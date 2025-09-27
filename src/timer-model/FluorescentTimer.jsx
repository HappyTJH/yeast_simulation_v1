import React, { useState, useEffect, useRef } from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../components/ui/select';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import { Raycaster } from 'three';

// 固定的模型参数（不对用户暴露，不可调）
const MODEL_PARAMS = {
  // 细胞周期参数
  Tcc_min: 87.0,          // 细胞周期时长 (分钟)
  pulse_width_min: 15.0,   // 脉冲宽度 (分钟)
  pulse_amp: 1.0,          // 脉冲幅度
  pulse_start_offset: 57.0, // 脉冲开始偏移 (Tcc - 30)

  // mRNA 降解速率 (新增)
  k_dm: 0.14,             // mRNA 降解速率 (对应约5分钟的半衰期)

  // 成熟时间常数 (体内环境)
  tau_B_min: 4.0 * 60.0,   // C→B 时间常数 (~4小时)
  tau_I_min: 8.0 * 60.0,   // B→I 时间常数 (~8小时)  
  tau_R_min: 18.0 * 60.0,  // I→R 时间常数 (~18小时)

  // 蛋白质半衰期
  t12_R_hours: 30.0,       // 红态蛋白半衰期 (小时)

  // 继承参数
  inherit_frac_C: 1.0,     // C态蛋白继承比例

  // 环境因素
  temperature_celsius: 30.0, // 培养温度
  medium_ph: 6.25           // 培养基pH
};

function FluorescentTimer() {
  // 模拟状态管理
  const [isPaused, setIsPaused] = useState(true);
  const [timeStep, setTimeStep] = useState(0);
  const [speedMultiplier, setSpeedMultiplier] = useState(1);
  const [selectedCell, setSelectedCell] = useState(null);
  const selectedCellRef = useRef(null);
  
  // 使用固定参数
  const modelParams = MODEL_PARAMS;

  // 统计数据
  const [stats, setStats] = useState({
    totalCells: 1,
    visibleCells: 0,
    avgMaturationStage: 0,
    avgRRatio: 0
  });

  // Three.js 引用
  const canvasRef = useRef(null);
  const sceneRef = useRef(null);
  const rendererRef = useRef(null);
  const cameraRef = useRef(null);
  const cellsRef = useRef([]);
  const controlsRef = useRef(null);
  const raycasterRef = useRef(new Raycaster());
  const mouseRef = useRef(new THREE.Vector2());
  const cellIdCounterRef = useRef(1);
  const totalCellCountRef = useRef(1);

  const MAX_VISIBLE_CELLS = 1500;
  const MAX_TOTAL_CELLS = 999999999;
  const MAX_LENGTH_RATIO = 1.8;

  // 固定环境条件：氧气浓度10%、温度30℃ (复制自YeastSimulation.jsx)
  const environment = {
    oxygen: 10,
    temperature: 30
  };

  // 运行时控制用的可变引用，避免因依赖变更而重建场景
  const isPausedRef = useRef(isPaused);
  const speedMultiplierRef = useRef(speedMultiplier);

  // 同步最新状态到引用
  useEffect(() => {
    isPausedRef.current = isPaused;
    speedMultiplierRef.current = speedMultiplier;
  }, [isPaused, speedMultiplier]);
  const calculateCellLength = (oxygen) => {
    // 葡萄酵母根据氧气浓度调整形状
    if (oxygen >= 20) {
      return 1.0;  // 需氧条件：完全圆形
    } else {
      const lengthIncrease = (20 - oxygen) / 20 * (MAX_LENGTH_RATIO - 1.0);
      return Math.min(1.0 + lengthIncrease, MAX_LENGTH_RATIO);
    }
  };

  // 计算细胞生长速率 (复制自YeastSimulation.jsx)
  const calculateGrowthRate = () => {
    const baseRate = 0.15;  // 基础生长速率
    const timeMultiplier = Math.min(timeStep / 200, 3);  // 时间对生长的影响
    const oxygenEffect = 0.8;  // 氧气浓度为10%时的固定影响
    const temperatureEffect = 1.0;  // 温度为30℃时的固定影响
    // 应用速度倍率到生长速率（通过ref读取最新值）
    return (baseRate * (1 + timeMultiplier) * oxygenEffect * temperatureEffect * speedMultiplierRef.current);
  };


  // 细胞周期依赖的转录翻译速率
  const getTranscriptionTranslationRates = (t) => {
    const t_in_cycle = t % modelParams.Tcc_min;
    
    if (t_in_cycle < 30.0) {
      return { k_tx: 0.2, k_tl: 0.2 };
    } else if (t_in_cycle < 40.0) {
      const fraction = (t_in_cycle - 30.0) / 10.0;
      return { 
        k_tx: 0.2 + fraction * (0.8 - 0.2),
        k_tl: 0.2 + fraction * (0.8 - 0.2)
      };
    } else if (t_in_cycle < 55.0) {
      const fraction = (t_in_cycle - 40.0) / 15.0;
      return {
        k_tx: 0.8 + fraction * (1.2 - 0.8),
        k_tl: 0.8 + fraction * (1.2 - 0.8)
      };
    } else if (t_in_cycle < 72.0) {
      return { k_tx: 1.2, k_tl: 1.2 };
    } else {
      return { k_tx: 0.1, k_tl: 0.1 };
    }
  };

  // 计算成熟速率常数
  const getMaturationRates = () => {
    return {
      k_B: 1.0 / Math.max(modelParams.tau_B_min, 1e-9),
      k_I: 1.0 / Math.max(modelParams.tau_I_min, 1e-9),
      k_R: 1.0 / Math.max(modelParams.tau_R_min, 1e-9),
      k_DR: Math.log(2) / (modelParams.t12_R_hours * 60.0)
    };
  };

  // 处理鼠标点击事件
  const handleMouseClick = (event) => {
    const rect = canvasRef.current.getBoundingClientRect();
    mouseRef.current.x = ((event.clientX - rect.left) / rect.width) * 2 - 1;
    mouseRef.current.y = -((event.clientY - rect.top) / rect.height) * 2 + 1;
    
    raycasterRef.current.setFromCamera(mouseRef.current, cameraRef.current);
    const intersects = raycasterRef.current.intersectObjects(cellsRef.current);
    
    if (intersects.length > 0) {
      const selectedCellObj = intersects[0].object;
      selectedCellRef.current = selectedCellObj; // 保存引用
      // 设置初始数据显示
      setSelectedCell({
        id: selectedCellObj.userData.cellId,
        maturationData: { ...selectedCellObj.userData.maturationData },
      });
    }
  };

  // 创建荧光蛋白细胞
  const createFluorescentCell = (position, parentCell = null) => {
    const length = calculateCellLength(environment.oxygen);
    const geometry = new THREE.SphereGeometry(1, 32, 32);
    geometry.scale(length, 1, 1);

    // 初始材质 - 透明状态 (C态), 会被 updateCellColor 更新
    const material = new THREE.MeshPhongMaterial({
      color: 0x888888,
      transparent: true,
      opacity: 0.3,
      emissive: 0x222222,
      emissiveIntensity: 0.1
    });

    const cell = new THREE.Mesh(geometry, material);
    cell.castShadow = true;
    cell.receiveShadow = true;

    // 创建细胞核
    const nucleusGeometry = new THREE.SphereGeometry(0.3, 16, 16);
    const nucleusMaterial = new THREE.MeshPhongMaterial({
      color: 0xFFA500,
      emissive: 0xFFA500,
      emissiveIntensity: 0.3
    });
    const nucleus = new THREE.Mesh(nucleusGeometry, nucleusMaterial);
    nucleus.position.set(0, 0, 0);
    cell.add(nucleus);

    if (position) {
      cell.position.copy(position);
    }

    // 初始化细胞数据
    cell.userData = {
      // From YeastSimulation
      growthStage: 0,
      dividing: false,
      createdAtOxygen: environment.oxygen,
      divisionCount: 0,
      growthRateModifier: 0.6 + Math.random() * 0.8,
      divisionDelay: Math.random() * 0.3,
      canDivide: true,
      isInitialCell: parentCell === null,  // 只有没有父细胞的才是初始细胞
      isChildOfDividedCell: parentCell !== null,
      cellId: cellIdCounterRef.current,
      separationFactor: 1.0, // 初始化分离因子

      // From FluorescentTimer
      birthTime: timeStep,
      maturationData: {
        mRNA: parentCell ? 0.0 : 1.0,
        C: parentCell ? 0.0 : 2.0, // C蛋白在分裂时继承
        B: 0.0,
        I: 0.0,
        R: 0.0,
        r_ratio: 0.0,
        cellCycleTime: 0.0,
        lastPulseTime: -1
      },
    };

    return cell;
  };

  // 更新细胞的荧光蛋白成熟状态
  const updateCellMaturation = (cell, dt) => {
    const data = cell.userData.maturationData;
    const rates = getMaturationRates();
    const currentTime = timeStep - cell.userData.birthTime;

    // 更新细胞周期时间
    data.cellCycleTime += dt;
    
    // mRNA动力学：脉冲式合成
    const pulse_start = modelParams.pulse_start_offset;
    const pulse_end = pulse_start + modelParams.pulse_width_min;
    const in_pulse_window = data.cellCycleTime >= pulse_start && data.cellCycleTime < pulse_end;

    let dm_dt = -modelParams.k_dm * data.mRNA; // 基础降解
    if (in_pulse_window) {
      const { k_tx } = getTranscriptionTranslationRates(data.cellCycleTime);
      dm_dt += k_tx * modelParams.pulse_amp; // 在脉冲窗口内合成
    }

    data.mRNA += dm_dt * dt;
    data.mRNA = Math.max(0, data.mRNA);
    
    // 蛋白质成熟链 C→B→I→R
    const { k_tl } = getTranscriptionTranslationRates(data.cellCycleTime);
    const dC_dt = k_tl * data.mRNA - rates.k_B * data.C;
    const dB_dt = rates.k_B * data.C - rates.k_I * data.B;
    const dI_dt = rates.k_I * data.B - rates.k_R * data.I;
    const dR_dt = rates.k_R * data.I - rates.k_DR * data.R;
    
    data.C += dC_dt * dt;
    data.B += dB_dt * dt;
    data.I += dI_dt * dt;
    data.R += dR_dt * dt;
    
    // 确保非负值
    data.C = Math.max(0, data.C);
    data.B = Math.max(0, data.B);
    data.I = Math.max(0, data.I);
    data.R = Math.max(0, data.R);
    
    // 计算r比值
    data.r_ratio = data.R / (data.B + data.R + 1e-12);
    
    // 更新细胞颜色基于成熟状态
    updateCellColor(cell);
  };

  // 更新细胞颜色
  const updateCellColor = (cell) => {
    const data = cell.userData.maturationData;
    const totalFluorescent = data.B + data.I + data.R;
    
    if (totalFluorescent < 0.01) {
      // C态 - 灰色透明
      cell.material.color.setHex(0x888888);
      cell.material.opacity = 0.3;
      cell.material.emissive.setHex(0x222222);
      cell.material.emissiveIntensity = 0.1;
    } else {
      // 混合颜色：蓝色 → 紫色(中间态) → 红色
      // 为了让颜色变化更慢，仅在视觉映射阶段做非线性压缩，不改变模型与统计计算
      const progressRaw = (data.I * 0.5 + data.R) / (totalFluorescent + 1e-12);
      const COLOR_SLOWDOWN_GAMMA = 1.6; // >1 会让前期颜色变化更慢，可根据需要微调
      const progress = Math.pow(progressRaw, COLOR_SLOWDOWN_GAMMA);
      
      let r = Math.min(255, progress * 255);
      let g = 0;
      let b = Math.min(255, Math.pow(1 - progress, 1.5) * 255);
      
      // 在接近成熟的末段阶段（当前偏粉时），添加向“大红”的过渡
      // 不影响前面的颜色变化，仅在 progress 高于阈值时逐步过渡到纯红
      const RED_BOOST_START = 0.88; // 仅在最后12%的阶段进行红色增强
      if (progress >= RED_BOOST_START) {
        const t = Math.min(1, (progress - RED_BOOST_START) / (1 - RED_BOOST_START));
        // 线性插值到纯红 (255, 0, 0)
        r = Math.round(r * (1 - t) + 255 * t);
        g = Math.round(g * (1 - t) + 0 * t);
        b = Math.round(b * (1 - t) + 0 * t);
      }
      
      const color = (Math.floor(r) << 16) | (Math.floor(g) << 8) | Math.floor(b);
      
      cell.material.color.setHex(color);
      cell.material.opacity = 0.7 + totalFluorescent * 0.3;
      cell.material.emissive.setHex(color);
      cell.material.emissiveIntensity = 0.2 + totalFluorescent * 0.3;
    }
  };

  // 更新统计数据
  const updateStats = () => {
    const visibleCells = cellsRef.current.length;
    const totalProgress = cellsRef.current.reduce((sum, cell) => {
      const data = cell.userData.maturationData;
      const totalFluorescent = data.B + data.I + data.R;
      // 将成熟度定义为 I+R 的比例，提升成熟度上涨速度（不影响颜色机制）
      const progress = totalFluorescent > 0
        ? (data.I + data.R) / (totalFluorescent + 1e-12)
        : 0;
      return sum + progress;
    }, 0);
    const totalRRatio = cellsRef.current.reduce((sum, cell) => sum + cell.userData.maturationData.r_ratio, 0);
    
    const avgMaturationStage = visibleCells > 0 ? totalProgress / visibleCells : 0; // 0-1
    const avgRRatio = visibleCells > 0 ? totalRRatio / visibleCells : 0;

    setStats({
      totalCells: totalCellCountRef.current,
      visibleCells,
      avgMaturationStage,
      avgRRatio
    });
  };

  // 添加初始细胞
  const addInitialCell = () => {
    cellIdCounterRef.current = 1; // 重置细胞ID计数器
    const cell = createFluorescentCell(new THREE.Vector3(0, 0, 0), null);
    // 为初始细胞设置特殊属性
    cell.userData.divisionCount = 0; // 初始分裂次数为0
    cell.userData.isInitialCell = true; // 标记为初始细胞
    cell.userData.cellId = 1; // 初始细胞编号为1
    
    // 葡萄酵母的初始属性
    cell.userData.divisionDelay = 0.1; // 减少初始细胞的分裂延迟
    // 为葡萄酵母设置十个方向的分裂延迟时间，对应立方体的八个顶点加上X轴正负方向
    cell.userData.directionDelays = [
      0.1,  // 右上前方向延迟
      0.3,  // 右上后方向延迟
      0.5,  // 右下前方向延迟
      0.7,  // 右下后方向延迟
      0.2,  // 左上前方向延迟
      0.4,  // 左上后方向延迟
      0.6,  // 左下前方向延迟
      0.8,  // 左下后方向延迟
      0.15, // X轴正方向延迟
      0.25  // X轴负方向延迟
    ];
    
    sceneRef.current.add(cell); // 将细胞添加到场景
    cellsRef.current = [cell]; // 初始化细胞数组
    totalCellCountRef.current = 1; // 初始总细胞数为 1
    updateStats(); // 更新统计数据
  };

  // 细胞分裂过程 (移植自 YeastSimulation.jsx)
  const divideCellProcess = (parentCell) => {
    if (parentCell.userData.dividing) return;

    const isInitialCell = parentCell.userData.isInitialCell;

    // 葡萄酵母分裂规则：初始细胞可分裂10次，其他细胞只分裂1次
    if (isInitialCell && parentCell.userData.divisionCount >= 10) return;
    if (!isInitialCell && parentCell.userData.divisionCount >= 1) return;

    // 检查当前细胞数量是否已达到上限
    if (cellsRef.current.length >= MAX_VISIBLE_CELLS) {
      console.warn(`细胞数量已达到上限 ${MAX_VISIBLE_CELLS}，停止创建新细胞`);
      return;
    }

    parentCell.userData.dividing = true;
    parentCell.userData.divisionCount++;

    const isChildOfDividedCell = parentCell.userData.isChildOfDividedCell;
    const produceTwoCells = Math.random() < (isChildOfDividedCell ? 0.85 : 0.08);

    cellIdCounterRef.current++;
    const newCell1 = createFluorescentCell(parentCell.position, parentCell);
    newCell1.userData.cellId = cellIdCounterRef.current;
    if (produceTwoCells) {
      newCell1.userData.isChildOfDividedCell = true;
    }

    let newCell2 = null;
    if (produceTwoCells) {
      cellIdCounterRef.current++;
      newCell2 = createFluorescentCell(parentCell.position, parentCell);
      newCell2.userData.cellId = cellIdCounterRef.current;
      newCell2.userData.isChildOfDividedCell = true;
    }

    sceneRef.current.add(newCell1);
    cellsRef.current.push(newCell1);

    if (produceTwoCells && newCell2) {
      sceneRef.current.add(newCell2);
      cellsRef.current.push(newCell2);
    }

    if (cellsRef.current.length > MAX_VISIBLE_CELLS) {
      manageVisibleCells();
    }

    const cellsToAdd = produceTwoCells ? 2 : 1;
    totalCellCountRef.current = Math.min(
      totalCellCountRef.current + cellsToAdd,
      MAX_TOTAL_CELLS
    );

    const parentLongAxis = new THREE.Vector3(1, 0, 0).applyQuaternion(parentCell.quaternion);
    const separationDistance = (parentCell.scale.x + newCell1.scale.x) * 0.95;
    
    let directionVector1, directionVector2;

    if (isInitialCell) {
      const divisionIndex = parentCell.userData.divisionCount - 1;
      const randomAngleOffset = (5 + Math.random() * 10) * (Math.PI / 180);
      const randomAxisOffset = new THREE.Vector3(
        (Math.random() - 0.5) * 0.3,
        (Math.random() - 0.5) * 0.3,
        (Math.random() - 0.5) * 0.3
      ).normalize();
      
      const snowflakeDirections = [
        new THREE.Vector3(1, 1, 1), new THREE.Vector3(1, 1, -1),
        new THREE.Vector3(1, -1, 1), new THREE.Vector3(1, -1, -1),
        new THREE.Vector3(-1, 1, 1), new THREE.Vector3(-1, 1, -1),
        new THREE.Vector3(-1, -1, 1), new THREE.Vector3(-1, -1, -1),
        new THREE.Vector3(1, 0, 0), new THREE.Vector3(-1, 0, 0)
      ];
      snowflakeDirections.forEach(dir => dir.normalize());

      let baseDirection = (divisionIndex < snowflakeDirections.length)
        ? snowflakeDirections[divisionIndex]
        : new THREE.Vector3(Math.random() - 0.5, Math.random() - 0.5, Math.random() - 0.5).normalize();

      if (parentCell.userData.directionDelays && divisionIndex < parentCell.userData.directionDelays.length) {
        newCell1.userData.divisionDelay = parentCell.userData.directionDelays[divisionIndex] + Math.random() * 0.1;
      } else {
        newCell1.userData.divisionDelay = 0.1 + divisionIndex * 0.1 + Math.random() * 0.1;
      }

      const rotationAxis = new THREE.Vector3().crossVectors(baseDirection, randomAxisOffset).normalize();
      const rotationQuaternion = new THREE.Quaternion().setFromAxisAngle(rotationAxis, randomAngleOffset);
      directionVector1 = baseDirection.clone().applyQuaternion(rotationQuaternion);

      const isOctantDirection = divisionIndex < 8;
      const isXAxisDirection = divisionIndex >= 8 && divisionIndex < 10;
      
      if (isOctantDirection) newCell1.userData.separationFactor = 0.8;
      else if (isXAxisDirection) newCell1.userData.separationFactor = 1.0;
      else newCell1.userData.separationFactor = 0.9;

    } else {
      const maxAngle = 60 * (Math.PI / 180);
      const randomAngle = Math.acos(Math.pow(Math.random(), 1/3)) * maxAngle;
      const randomDirection = Math.random() * Math.PI * 2;
      
      const tempUp = new THREE.Vector3(0, 1, 0);
      if (Math.abs(parentLongAxis.dot(tempUp)) > 0.99) tempUp.set(0, 0, 1);
      
      const perpAxis1 = new THREE.Vector3().crossVectors(parentLongAxis, tempUp).normalize();
      const perpAxis2 = new THREE.Vector3().crossVectors(parentLongAxis, perpAxis1).normalize();
      
      directionVector1 = new THREE.Vector3().copy(parentLongAxis)
        .addScaledVector(perpAxis1, Math.sin(randomAngle) * Math.cos(randomDirection))
        .addScaledVector(perpAxis2, Math.sin(randomAngle) * Math.sin(randomDirection))
        .normalize();
      
      if (produceTwoCells) {
        const randomAngle2 = Math.acos(Math.pow(Math.random(), 1/3)) * maxAngle;
        const randomDirection2 = randomDirection + Math.PI + (Math.random() - 0.5) * Math.PI * 0.2;
        
        directionVector2 = new THREE.Vector3().copy(parentLongAxis)
          .addScaledVector(perpAxis1, Math.sin(randomAngle2) * Math.cos(randomDirection2))
          .addScaledVector(perpAxis2, Math.sin(randomAngle2) * Math.sin(randomDirection2))
          .normalize();
      }
    }

    const rotationMatrix1 = new THREE.Matrix4();
    const up = new THREE.Vector3(0, 1, 0);
    const right1 = new THREE.Vector3().crossVectors(directionVector1, up).normalize();
    const adjustedUp1 = new THREE.Vector3().crossVectors(right1, directionVector1).normalize();
    rotationMatrix1.makeBasis(directionVector1, adjustedUp1, right1);
    const quaternion1 = new THREE.Quaternion().setFromRotationMatrix(rotationMatrix1);
    newCell1.setRotationFromQuaternion(quaternion1);

    if (produceTwoCells && newCell2) {
      const rotationMatrix2 = new THREE.Matrix4();
      const right2 = new THREE.Vector3().crossVectors(directionVector2, up).normalize();
      const adjustedUp2 = new THREE.Vector3().crossVectors(right2, directionVector2).normalize();
      rotationMatrix2.makeBasis(directionVector2, adjustedUp2, right2);
      const quaternion2 = new THREE.Quaternion().setFromRotationMatrix(rotationMatrix2);
      newCell2.setRotationFromQuaternion(quaternion2);
    }

    const parentData = parentCell.userData.maturationData;

    // 1. C蛋白和mRNA在母细胞和子细胞之间分配
    const numDaughters = produceTwoCells ? 2 : 1;
    const divisionFactor = 1 / (numDaughters + 1); // 母细胞+子细胞
    
    const inherited_mRNA = parentData.mRNA * divisionFactor;
    const inherited_C = parentData.C * divisionFactor;
    
    // 更新母细胞的mRNA和C蛋白
    parentData.mRNA *= divisionFactor;
    parentData.C *= divisionFactor;
    
    // 为子细胞设置继承的mRNA和C蛋白
    newCell1.userData.maturationData.mRNA = inherited_mRNA;
    newCell1.userData.maturationData.C = inherited_C;
    if (newCell2) {
      newCell2.userData.maturationData.mRNA = inherited_mRNA;
      newCell2.userData.maturationData.C = inherited_C;
    }
    
    // 2. B, I, R 蛋白保留在母细胞中，子细胞从0开始
    newCell1.userData.maturationData.B = 0;
    newCell1.userData.maturationData.I = 0;
    newCell1.userData.maturationData.R = 0;
    if (newCell2) {
      newCell2.userData.maturationData.B = 0;
      newCell2.userData.maturationData.I = 0;
      newCell2.userData.maturationData.R = 0;
    }

    let progress = 0;
    const animateDivision = () => {
      if (progress >= 1) {
        // 分裂动画结束
        parentCell.userData.dividing = false;
        parentCell.userData.growthStage = 0;
        parentCell.scale.x = 1;

        updateStats();
        return;
      }

      progress += 0.015;
      
      const separationFactor1 = newCell1.userData.separationFactor || 1.0;
      const adjustedSeparationDistance1 = separationDistance * 1.10 * separationFactor1;
      newCell1.position.copy(parentCell.position).addScaledVector(directionVector1, adjustedSeparationDistance1 * progress);
      
      if (produceTwoCells && newCell2) {
        const separationFactor2 = newCell2.userData.separationFactor || 1.0;
        const adjustedSeparationDistance2 = separationDistance * 1.10 * separationFactor2;
        newCell2.position.copy(parentCell.position).addScaledVector(directionVector2, adjustedSeparationDistance2 * progress);
      }

      requestAnimationFrame(animateDivision);
    };

    animateDivision();
  };

  // 管理可见细胞数量
  const manageVisibleCells = () => {
    // 不再主动移除细胞，防止非自然消失
    // 只记录当前细胞数量，但不执行移除操作
    const currentCellCount = cellsRef.current.length;
    if (currentCellCount > MAX_VISIBLE_CELLS) {
      console.warn(`细胞数量超过限制: ${currentCellCount} / ${MAX_VISIBLE_CELLS}，但不再主动移除细胞`);
    }
  };

  // Three.js 初始化
  useEffect(() => {
    const scene = new THREE.Scene();
    sceneRef.current = scene;
    scene.background = new THREE.Color(0xffffff); // 设置白色背景
    
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    cameraRef.current = camera;
    camera.position.set(0, 0, 30);
    camera.lookAt(scene.position);
    
    if (!canvasRef.current) return;
    
    const renderer = new THREE.WebGLRenderer({ 
      canvas: canvasRef.current,
      antialias: true,
      alpha: true
    });
    rendererRef.current = renderer;
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    
    const canvasWidth = canvasRef.current.clientWidth;
    const canvasHeight = canvasRef.current.clientHeight;
    renderer.setSize(canvasWidth, canvasHeight);
    
    const handleResize = () => {
      if (!canvasRef.current) return;
      const width = canvasRef.current.clientWidth;
      const height = canvasRef.current.clientHeight;
      cameraRef.current.aspect = width / height;
      cameraRef.current.updateProjectionMatrix();
      rendererRef.current.setSize(width, height);
    };
    
    window.addEventListener('resize', handleResize);
    canvasRef.current.addEventListener('click', handleMouseClick);
    handleResize();
    
    // 初始化OrbitControls
    const controls = new OrbitControls(camera, renderer.domElement);
    controlsRef.current = controls;
    controls.enableDamping = true;
    controls.dampingFactor = 0.05;
    controls.minDistance = 3;
    controls.maxDistance = 40;
    
    // 添加光照
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.2);
    scene.add(ambientLight);
    
    const pointLight = new THREE.PointLight(0xffffff, 3);
    pointLight.position.set(10, 10, 10);
    pointLight.castShadow = true;
    scene.add(pointLight);

    const spotLight = new THREE.SpotLight(0xffffff, 2);
    spotLight.position.set(15, 40, 35);
    spotLight.castShadow = true;
    scene.add(spotLight);

    addInitialCell();

    // 动画循环
    let animationFrameId;
    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      
      if (controlsRef.current) {
        controlsRef.current.update();
      }

      if (!isPausedRef.current) {
        const dt = speedMultiplierRef.current * 0.1; // 时间步长 (分钟)
        setTimeStep(prev => prev + dt);

        const baseGrowthRate = calculateGrowthRate();

        cellsRef.current.forEach(cell => {
          if (!cell.userData.dividing) {
            updateCellMaturation(cell, dt);

            const growthRate = (baseGrowthRate / 200) * cell.userData.growthRateModifier;
            cell.userData.growthStage += growthRate;
            
            const divisionThreshold = 0.5 + cell.userData.divisionDelay;
            const growthProgress = Math.min(cell.userData.growthStage / divisionThreshold, 1.0);
            
            const initialLength = calculateCellLength(cell.userData.createdAtOxygen);
            const targetScale = MAX_LENGTH_RATIO / initialLength;
            const scaleMultiplier = 1 + (targetScale - 1) * growthProgress;
            cell.scale.x = scaleMultiplier;

            if (cell.userData.growthStage >= divisionThreshold) {
              divideCellProcess(cell);
            }
          }
        });
        
        // 如果有选中的细胞，则更新其信息
        if (selectedCellRef.current) {
          const cell = selectedCellRef.current;
          // 检查细胞是否仍然存在于场景中
          if (cellsRef.current.includes(cell)) {
            setSelectedCell({
              id: cell.userData.cellId,
              maturationData: { ...cell.userData.maturationData },
            });
          } else {
            // 细胞已被移除，取消选中
            selectedCellRef.current = null;
            setSelectedCell(null);
          }
        }
        
        if (Math.random() < 0.1) {
            updateStats();
        }
      }
      
      renderer.render(scene, camera);
    };

    animate();

    return () => {
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
      }
      window.removeEventListener('resize', handleResize);
      if (canvasRef.current) {
        canvasRef.current.removeEventListener('click', handleMouseClick);
      }
      if (scene) scene.clear();
      if (renderer) renderer.dispose();
      if (controlsRef.current) controlsRef.current.dispose();
      
      sceneRef.current = null;
      rendererRef.current = null;
      cameraRef.current = null;
      controlsRef.current = null;
      cellsRef.current = [];
    };
  }, []);

  return (
    <div className="w-full h-screen bg-gradient-to-br from-blue-50 to-purple-50 flex flex-col">
      {/* 标题栏 */}
      <div className="bg-white shadow-sm border-b p-4">
        <h1 className="text-2xl font-bold text-gray-800">荧光计时器模型可视化</h1>
        <p className="text-sm text-gray-600 mt-1">基于Fast-FT蛋白的C→B→I→R成熟链模拟</p>
      </div>

      <div className="flex-1 flex">
        {/* 左侧控制面板 */}
        <div className="w-80 bg-white shadow-lg p-4 overflow-y-auto">
          {/* 模拟控制 */}
          <Card className="mb-4">
            <CardHeader>
              <CardTitle className="text-lg">模拟控制</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex gap-2">
                <Button 
                  onClick={() => setIsPaused(!isPaused)}
                  className={isPaused ? "bg-green-500 hover:bg-green-600" : "bg-red-500 hover:bg-red-600"}
                >
                  {isPaused ? "开始" : "暂停"}
                </Button>
                <Button 
                  onClick={() => {
                    setIsPaused(true);
                    setTimeStep(0);
                    // 重置场景
                    if (sceneRef.current) {
                      cellsRef.current.forEach(cell => sceneRef.current.remove(cell));
                      cellsRef.current = [];
                      addInitialCell();
                    }
                  }}
                  variant="outline"
                >
                  重置
                </Button>
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-2">速度倍率: {speedMultiplier}x</label>
                <input
                  type="range"
                  min="0.1"
                  max="10"
                  step="0.1"
                  value={speedMultiplier}
                  onChange={(e) => setSpeedMultiplier(parseFloat(e.target.value))}
                  className="w-full"
                />
              </div>
            </CardContent>
          </Card>

          {/* 模型参数已移除，参数作为定值保存在代码中 */}

          {/* 统计信息 */}
           <Card className="mb-4">
             <CardHeader>
               <CardTitle className="text-lg">统计信息</CardTitle>
             </CardHeader>
             <CardContent className="space-y-2">
               <div className="text-sm">
                 <span className="font-medium">总细胞数:</span> {stats.totalCells}
               </div>
               <div className="text-sm">
                 <span className="font-medium">可见细胞:</span> {stats.visibleCells}
               </div>
               <div className="text-sm">
                 <span className="font-medium">平均成熟度:</span> {(stats.avgMaturationStage * 100).toFixed(1)}%
               </div>
               <div className="text-sm">
                 <span className="font-medium">模拟时间:</span> {(timeStep / 60).toFixed(1)} 小时
               </div>
             </CardContent>
           </Card>

          {/* 选中细胞信息 */}
          {selectedCell && (
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">细胞 #{selectedCell.id}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <div className="text-sm">
                  <span className="font-medium">mRNA:</span> {selectedCell.maturationData.mRNA.toFixed(3)}
                </div>
                <div className="text-sm">
                  <span className="font-medium">C态:</span> {selectedCell.maturationData.C.toFixed(3)}
                </div>
                <div className="text-sm">
                  <span className="font-medium">B态:</span> {selectedCell.maturationData.B.toFixed(3)}
                </div>
                <div className="text-sm">
                  <span className="font-medium">I态:</span> {selectedCell.maturationData.I.toFixed(3)}
                </div>
                <div className="text-sm">
                  <span className="font-medium">R态:</span> {selectedCell.maturationData.R.toFixed(3)}
                </div>
                <div className="text-sm">
                  <span className="font-medium">r比值:</span> {selectedCell.maturationData.r_ratio.toFixed(3)}
                </div>
              </CardContent>
            </Card>
          )}
        </div>

        {/* 右侧3D可视化 */}
        <div className="flex-1 relative">
          <canvas 
            ref={canvasRef}
            className="w-full h-full"
            style={{ background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)' }}
          />
          
          {/* 颜色图例 */}
          <div className="absolute top-4 right-4 bg-white bg-opacity-90 p-3 rounded-lg shadow-lg">
            <h3 className="font-medium text-sm mb-2">荧光状态</h3>
            <div className="space-y-1 text-xs">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-gray-400 rounded opacity-50"></div>
                <span>C态 (未成熟)</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-blue-500 rounded"></div>
                <span>B态 (蓝色)</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-purple-500 rounded"></div>
                <span>I态 (紫色)</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-red-500 rounded"></div>
                <span>R态 (红色)</span>
              </div>
            </div>
          </div>
          
          {/* 操作提示 */}
          <div className="absolute bottom-4 left-4 bg-black bg-opacity-70 text-white p-2 rounded text-xs">
            <div>左键拖拽: 旋转视角</div>
            <div>滚轮: 缩放</div>
            <div>右键拖拽: 平移</div>
            <div>点击细胞: 查看详情</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FluorescentTimer;