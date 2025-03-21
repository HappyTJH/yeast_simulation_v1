import React, { useState, useEffect, useRef } from 'react';
import { Card, CardHeader, CardTitle, CardContent } from './components/ui/card';
import { Button } from './components/ui/button';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

function YeastSimulation() {
  // 管理模拟的状态
  const [isPaused, setIsPaused] = useState(true); // 模拟是否暂停
  const [timeStep, setTimeStep] = useState(0); // 时间步长，控制生长速率
  const [stats, setStats] = useState({ // 存储实时统计数据
    totalCells: 1, // 总细胞数
    visibleCells: 0, // 可见细胞数
    avgLength: 0, // 平均细胞长度
    growthRate: 0 // 生长速率
  });
  const [environment, setEnvironment] = useState({ // 环境条件：氧气浓度和温度
    oxygen: 10, // 初始氧气浓度
    temperature: 30 // 初始温度
  });
  const controlsRef = useRef(null); // 添加OrbitControls的引用
  // Refs 变量
  const canvasRef = useRef(null); // 3D canvas 的引用
  const sceneRef = useRef(null); // Three.js 场景的引用
  const rendererRef = useRef(null); // Three.js 渲染器的引用
  const cameraRef = useRef(null); // Three.js 相机的引用
  const cellsRef = useRef([]); // 细胞的引用数组
  const totalCellCountRef = useRef(1); // 总细胞数的引用
  const MAX_VISIBLE_CELLS = 2000;  // 最大可见细胞数
  const MAX_TOTAL_CELLS = 999999999; // 最大总细胞数
  const MAX_LENGTH_RATIO = 1.8; // 最大细胞长度比例

  // 计算细胞的长度，根据氧气浓度调整
  const calculateCellLength = (oxygen) => {
    if (oxygen >= 20) {
      return 1.0;  // 需氧条件：完全圆形
    } else {
      const lengthIncrease = (20 - oxygen) / 20 * (MAX_LENGTH_RATIO - 1.0);
      return Math.min(1.0 + lengthIncrease, MAX_LENGTH_RATIO);
    }
  };
  useEffect(() => {
    // 初始化 Three.js 场景
    const scene = new THREE.Scene();
    sceneRef.current = scene;
    scene.background = new THREE.Color(0x000000); // 设置背景为黑色
  const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    cameraRef.current = camera;
    camera.position.set(0, 0, 30);
    camera.lookAt(scene.position);
  const renderer = new THREE.WebGLRenderer({ 
      canvas: canvasRef.current,
      antialias: true 
    });
    rendererRef.current = renderer;
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    // 设置渲染器尺寸为canvas的尺寸
    const canvasWidth = canvasRef.current.clientWidth;
    const canvasHeight = canvasRef.current.clientHeight;
    renderer.setSize(canvasWidth, canvasHeight);
    
    // 添加窗口大小变化的事件监听器
    const handleResize = () => {
      const width = canvasRef.current.clientWidth;
      const height = canvasRef.current.clientHeight;
      cameraRef.current.aspect = width / height;
      cameraRef.current.updateProjectionMatrix();
      rendererRef.current.setSize(width, height);
    };
    
    window.addEventListener('resize', handleResize);
    // 初始调用一次以确保尺寸正确
    handleResize();
  // 初始化OrbitControls
    const controls = new OrbitControls(camera, renderer.domElement);
    controlsRef.current = controls;
    controls.enableDamping = true; // 启用阻尼效果
    controls.dampingFactor = 0.05; // 设置阻尼系数
    controls.minDistance = 3; // 设置最小缩放距离
    controls.maxDistance = 40; // 设置最大缩放距离
    controls.enablePan = true; // 启用平移功能
    controls.panSpeed = 1.0; // 设置平移速度
    controls.screenSpacePanning = true; // 使用屏幕空间平移
    
    // 添加鼠标右键拖动时更新旋转中心点的功能
    let isDragging = false;
    let previousMousePosition = { x: 0, y: 0 };
    
    renderer.domElement.addEventListener('contextmenu', (event) => {
      event.preventDefault(); // 阻止默认右键菜单
    });
    
    renderer.domElement.addEventListener('mousedown', (event) => {
      if (event.button === 2) { // 右键
        isDragging = true;
        previousMousePosition = { x: event.clientX, y: event.clientY };
      }
    });
    
    renderer.domElement.addEventListener('mousemove', (event) => {
      if (isDragging) {
        // 计算鼠标移动距离
        const deltaX = event.clientX - previousMousePosition.x;
        const deltaY = event.clientY - previousMousePosition.y;
        
        // 根据相机方向计算平移向量
        const distance = camera.position.distanceTo(controls.target);
        const movementSpeed = distance / 500; // 根据距离调整移动速度
        
        // 更新旋转中心点(target)，使其跟随平移移动
        const right = new THREE.Vector3();
        const up = new THREE.Vector3();
        camera.getWorldDirection(up).cross(camera.up).normalize().multiplyScalar(-deltaX * movementSpeed);
        camera.up.clone().normalize().multiplyScalar(-deltaY * movementSpeed).add(up, right);
        
        controls.target.add(right);
        
        previousMousePosition = { x: event.clientX, y: event.clientY };
      }
    });
    
    renderer.domElement.addEventListener('mouseup', (event) => {
      if (event.button === 2) {
        isDragging = false;
      }
    });
    
    renderer.domElement.addEventListener('mouseleave', () => {
      isDragging = false;
    });
    
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.2);
    scene.add(ambientLight); // 环境光

    const pointLight = new THREE.PointLight(0xffffff, 3);
    pointLight.position.set(10, 10, 10);
    pointLight.castShadow = true; // 启用点光源的阴影投射
    scene.add(pointLight); // 点光源

    const spotLight = new THREE.SpotLight(0xffffff, 2);
    spotLight.position.set(15, 40, 35);
    spotLight.castShadow = true; // 启用聚光灯的阴影投射
    scene.add(spotLight); // 聚光灯

    // 添加初始细胞
    addInitialCell();

    // 动画循环
    const animate = () => {
      requestAnimationFrame(animate);

      if (!isPaused) {
        // 更新细胞生长
        cellsRef.current.forEach(cell => {
          if (!cell.userData.dividing) {
            cell.userData.growthStage += calculateGrowthRate() / 2000;
            if (cell.userData.growthStage >= (1 + cell.userData.divisionDelay)) {
              divideCellProcess(cell);
            }
          }
        });

        // 更新细胞形状（根据氧气浓度调整）
        cellsRef.current.forEach(cell => {
          const targetLength = calculateCellLength(environment.oxygen);
          cell.scale.x += (targetLength - cell.scale.x) * 0.1;
        });

        updateStats(); // 更新统计数据
      }

      controlsRef.current.update(); // 更新控制器状态
      renderer.render(scene, camera);
    };

    animate();

    return () => {
      scene.clear();
      renderer.dispose();
      controls.dispose(); // 清理控制器
    };
  }, []);

  // 创建酵母细胞的函数
  const createYeastCell = (position, oxygen) => {
    const length = calculateCellLength(oxygen); // 计算细胞长度
    const geometry = new THREE.SphereGeometry(1, 32, 32);
    geometry.scale(length, 1, 1); // 调整几何体比例
    
    // 创建自定义着色器材质来实现渐变发光效果
    const customMaterial = new THREE.ShaderMaterial({
      uniforms: {
        color: { value: new THREE.Color(0x00FFFF) },
        glowColor: { value: new THREE.Color(0x40E0D0) }
      },
      vertexShader: `
        varying vec3 vNormal;
        varying vec3 vPosition;
        void main() {
          vNormal = normalize(normalMatrix * normal);
          vPosition = position;
          gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }
      `,
      fragmentShader: `
        uniform vec3 color;
        uniform vec3 glowColor;
        varying vec3 vNormal;
        varying vec3 vPosition;
        void main() {
          float rim = pow(1.0 - abs(dot(vNormal, vec3(0, 0, 1.0))), 1.8);
          float edge = smoothstep(0.2, 1.0, abs(vPosition.x));
          float centerDim = smoothstep(0.0, 0.5, abs(vPosition.x));
          vec3 finalColor = mix(color, glowColor, rim + edge * 0.4);
          float alpha = 0.15 + rim * 0.2 + edge * 0.15 - centerDim * 0.05;
          gl_FragColor = vec4(finalColor, alpha);
        }
      `,
      transparent: true,
      side: THREE.DoubleSide
    });

    const cell = new THREE.Mesh(geometry, customMaterial);
    cell.castShadow = true;
    cell.receiveShadow = true;

    // 创建细胞核
    const nucleusGeometry = new THREE.SphereGeometry(0.3, 16, 16);
    const nucleusMaterial = new THREE.MeshPhongMaterial({
      color: 0xFFA500, // 橙黄色
      emissive: 0xFFA500,
      emissiveIntensity: 0.3,
      specular: 0xFFFFFF,
      shininess: 100
    });
    const nucleus = new THREE.Mesh(nucleusGeometry, nucleusMaterial);
    cell.add(nucleus); // 将细胞核添加为细胞的子对象

    // 设置细胞的位置
    if (position) {
      cell.position.copy(position);
    } else {
      cell.position.set(
        (Math.random() - 0.5) * 30,
        (Math.random() - 0.5) * 30,
        (Math.random() - 0.5) * 10
      );
    }

    // 设置细胞的用户数据
    cell.userData = {
      growthStage: 0, // 生长阶段
      dividing: false, // 是否在分裂
      createdAtOxygen: oxygen, // 细胞创建时的氧气浓度
      divisionCount: 0, // 分裂次数计数器 (0表示未分裂)
      growthRateModifier: 0.6 + Math.random() * 0.8, // 随机生长速率修正因子 (0.6-1.4)
      divisionDelay: Math.random() * 0.3, // 随机分裂延迟 (0-0.3)
      canDivide: true, // 标记细胞是否可以分裂
      isInitialCell: false // 默认不是初始细胞
    };

    return cell; // 返回创建的细胞
  };

  // 添加初始细胞
  const addInitialCell = () => {
    const cell = createYeastCell(new THREE.Vector3(0, 0, 0), environment.oxygen);
    // 为初始细胞设置特殊属性
    cell.userData.divisionCount = 0; // 初始分裂次数为0
    cell.userData.isInitialCell = true; // 标记为初始细胞
    cell.userData.divisionDelay = 0.1; // 减少初始细胞的分裂延迟
    
    // 为初始细胞设置六个方向的分裂延迟时间，使子细胞错落有致地生成
    cell.userData.directionDelays = [
      0.1,  // X轴正方向延迟
      0.5,  // X轴负方向延迟
      0.3,  // Y轴正方向延迟
      0.9,  // Y轴负方向延迟
      0.7,  // Z轴正方向延迟
      1.1   // Z轴负方向延迟
    ];
    
    sceneRef.current.add(cell); // 将细胞添加到场景
    cellsRef.current = [cell]; // 初始化细胞数组
    totalCellCountRef.current = 1; // 初始总细胞数为 1
    updateStats(); // 更新统计数据
  };

  // 管理可见细胞的数量
  const manageVisibleCells = () => {
    const scene = sceneRef.current;
    
    // 如果细胞数超过最大可见数量，移除最早的细胞
    while (cellsRef.current.length > MAX_VISIBLE_CELLS) {
      const oldestCell = cellsRef.current[0];
      scene.remove(oldestCell);
      cellsRef.current.shift();
    }
  };

  // 细胞分裂过程
  const divideCellProcess = (parentCell) => {
    // 如果细胞正在分裂或已经分裂过（divisionCount >= 1），则不继续
    if (parentCell.userData.dividing) return; 

    // 判断是否为初始细胞（位于原点）
    const isInitialCell = parentCell.position.x === 0 && 
                         parentCell.position.y === 0 && 
                         parentCell.position.z === 0;

    // 如果是初始细胞且已经分裂了6次，则不再分裂
    if (isInitialCell && parentCell.userData.divisionCount >= 6) return;
    
    // 如果不是初始细胞且已经分裂过，则不再分裂
    if (!isInitialCell && parentCell.userData.divisionCount >= 1) return;

    parentCell.userData.dividing = true; // 设置为正在分裂
    parentCell.userData.divisionCount++; // 增加分裂次数

    // 初始细胞必定产生一个子细胞，其他细胞保持原有逻辑
    const produceTwoCells = !isInitialCell && Math.random() < 0.6;
    
    // 创建第一个新细胞
    const newCell1 = createYeastCell(null, environment.oxygen);
    
    // 如果需要产生第二个子细胞，则创建
    let newCell2 = null;
    if (produceTwoCells) {
      newCell2 = createYeastCell(null, environment.oxygen);
    }
    
    // 添加新细胞到场景
    if (cellsRef.current.length < MAX_VISIBLE_CELLS) {
      sceneRef.current.add(newCell1);
      cellsRef.current.push(newCell1);
      
      if (produceTwoCells && cellsRef.current.length < MAX_VISIBLE_CELLS) {
        sceneRef.current.add(newCell2);
        cellsRef.current.push(newCell2);
      }
    }

    // 更新总细胞数
    const growthIncrement = calculateGrowthRate() / 100;
    const cellsToAdd = produceTwoCells ? 2 : 1;
    totalCellCountRef.current = Math.min(
      totalCellCountRef.current + cellsToAdd,
      MAX_TOTAL_CELLS
    );

    // 计算父细胞的长轴方向（假设X轴是长轴）
    const parentLongAxis = new THREE.Vector3(1, 0, 0).applyQuaternion(parentCell.quaternion);
    
    // 计算从中心点到父细胞的方向向量
    const centerToParent = new THREE.Vector3();
    centerToParent.copy(parentCell.position);
    const distanceFromCenter = centerToParent.length();

    // 使用固定的分裂距离
    const cellLength = parentCell.scale.x;
    const separationDistance = cellLength * 2.3;
    let progress = 0;
    
    // 为初始细胞设置特殊的分裂方向（六个坐标轴方向，但添加随机偏移）
    let directionVector1, directionVector2;
    if (isInitialCell) {
      // 生成随机角度偏移（5-15度之间）
      const randomAngleOffset = (5 + Math.random() * 10) * (Math.PI / 180);
      const randomAxisOffset = new THREE.Vector3(
        (Math.random() - 0.5) * 0.3,
        (Math.random() - 0.5) * 0.3,
        (Math.random() - 0.5) * 0.3
      ).normalize();
      
      // 根据已分裂的次数决定分裂方向，并添加随机偏移
      let baseDirection;
      const divisionIndex = parentCell.userData.divisionCount - 1; // 索引从0开始
      
      switch (divisionIndex) {
        case 0: // 第一次分裂，沿X轴正方向
          baseDirection = new THREE.Vector3(1, 0, 0);
          break;
        case 1: // 第二次分裂，沿X轴负方向
          baseDirection = new THREE.Vector3(-1, 0, 0);
          break;
        case 2: // 第三次分裂，沿Y轴正方向
          baseDirection = new THREE.Vector3(0, 1, 0);
          break;
        case 3: // 第四次分裂，沿Y轴负方向
          baseDirection = new THREE.Vector3(0, -1, 0);
          break;
        case 4: // 第五次分裂，沿Z轴正方向
          baseDirection = new THREE.Vector3(0, 0, 1);
          break;
        case 5: // 第六次分裂，沿Z轴负方向
          baseDirection = new THREE.Vector3(0, 0, -1);
          break;
      }
      
      // 使用初始细胞中设置的方向延迟时间
      if (parentCell.userData.directionDelays && divisionIndex < parentCell.userData.directionDelays.length) {
        newCell1.userData.divisionDelay = parentCell.userData.directionDelays[divisionIndex] + Math.random() * 0.1;
      } else {
        // 如果没有设置方向延迟时间，则使用默认值
        newCell1.userData.divisionDelay = 0.1 + divisionIndex * 0.1 + Math.random() * 0.1;
      }
      
      // 创建一个四元数来表示随机旋转
      const rotationAxis = new THREE.Vector3().crossVectors(baseDirection, randomAxisOffset).normalize();
      const rotationQuaternion = new THREE.Quaternion().setFromAxisAngle(rotationAxis, randomAngleOffset);
      
      // 应用旋转到基础方向向量
      directionVector1 = baseDirection.clone().applyQuaternion(rotationQuaternion);
      
      // 根据分裂方向调整分离距离
      // 长轴方向（X轴正负方向，索引0-1）使用正常分离距离
      // 非长轴方向（Y和Z轴方向，索引2-5）使用较小的分离距离
      const isLongAxisDirection = divisionIndex <= 1; // 索引0和1是X轴方向（长轴）
      newCell1.userData.separationFactor = isLongAxisDirection ? 1.0 : 0.8; // 非长轴方向使用80%的分离距离
    } else {
      // 为其他细胞保持原有的分裂逻辑
      const maxAngle = 15 * (Math.PI / 180);
      const randomAngle = Math.acos(Math.pow(Math.random(), 1/3)) * maxAngle;
      const randomDirection = Math.random() * Math.PI * 2;
      
      const tempUp = new THREE.Vector3(0, 1, 0);
      if (Math.abs(parentLongAxis.dot(tempUp)) > 0.99) {
        tempUp.set(0, 0, 1);
      }
      
      const perpAxis1 = new THREE.Vector3().crossVectors(parentLongAxis, tempUp).normalize();
      const perpAxis2 = new THREE.Vector3().crossVectors(parentLongAxis, perpAxis1).normalize();
      
      directionVector1 = new THREE.Vector3().copy(parentLongAxis);
      directionVector1.addScaledVector(perpAxis1, Math.sin(randomAngle) * Math.cos(randomDirection));
      directionVector1.addScaledVector(perpAxis2, Math.sin(randomAngle) * Math.sin(randomDirection));
      directionVector1.normalize();
      
      if (produceTwoCells) {
        const randomAngle2 = Math.acos(Math.pow(Math.random(), 1/3)) * maxAngle;
        // 修改这里，增大两个子细胞之间的夹角，确保接近180度
        // 原来是: randomDirection + (2*Math.PI/2 + Math.random() * Math.PI)
        // 现在改为固定的180度夹角，再加上一个小的随机偏移
        const randomDirection2 = randomDirection + Math.PI + (Math.random() - 0.5) * Math.PI * 0.2;
        
        directionVector2 = new THREE.Vector3().copy(parentLongAxis);
        directionVector2.addScaledVector(perpAxis1, Math.sin(randomAngle2) * Math.cos(randomDirection2));
        directionVector2.addScaledVector(perpAxis2, Math.sin(randomAngle2) * Math.sin(randomDirection2));
        directionVector2.normalize();
      }
    }
    
    // 为第一个子细胞设置旋转
    const rotationMatrix1 = new THREE.Matrix4();
    const up = new THREE.Vector3(0, 1, 0);
    const right1 = new THREE.Vector3().crossVectors(directionVector1, up).normalize();
    const adjustedUp1 = new THREE.Vector3().crossVectors(right1, directionVector1).normalize();
    
    rotationMatrix1.makeBasis(
      directionVector1,  // 将x轴（最长轴）对齐到分裂方向
      adjustedUp1,      // y轴
      right1           // z轴
    );
    
    const quaternion1 = new THREE.Quaternion();
    quaternion1.setFromRotationMatrix(rotationMatrix1);
    newCell1.setRotationFromQuaternion(quaternion1);
    
    // 如果有第二个子细胞，设置它的旋转
    if (produceTwoCells && newCell2) {
      const rotationMatrix2 = new THREE.Matrix4();
      const right2 = new THREE.Vector3().crossVectors(directionVector2, up).normalize();
      const adjustedUp2 = new THREE.Vector3().crossVectors(right2, directionVector2).normalize();
      
      rotationMatrix2.makeBasis(
        directionVector2,
        adjustedUp2,
        right2
      );
      
      const quaternion2 = new THREE.Quaternion();
      quaternion2.setFromRotationMatrix(rotationMatrix2);
      newCell2.setRotationFromQuaternion(quaternion2);
    }

    // 如果细胞数量超过限制，则自动暂停
    if (
      totalCellCountRef.current >= MAX_TOTAL_CELLS ||
      cellsRef.current.length >= MAX_VISIBLE_CELLS
    ) {
      setIsPaused(true); // 自动暂停
    }

    // 动画实现细胞分裂过程
    const animate = () => {
      if (progress >= 1) {
        parentCell.userData.dividing = false; // 分裂完成
        parentCell.userData.growthStage = 0; // 重置生长阶段
        updateStats(); // 更新统计数据
        return;
      }

      progress += 0.015;  // 减慢分裂动画的速度
      
      // 更新第一个子细胞的位置，根据separationFactor调整分离距离
      const separationFactor = newCell1.userData.separationFactor || 1.0; // 默认为1.0
      const adjustedSeparationDistance = separationDistance * 1.18 * separationFactor; // 应用分离因子
      newCell1.position.copy(parentCell.position).addScaledVector(directionVector1, adjustedSeparationDistance * progress);
      
      // 如果有第二个子细胞，更新它的位置
      if (produceTwoCells && newCell2) {
        const separationFactor2 = newCell2.userData.separationFactor || 1.0; // 默认为1.0
        const adjustedSeparationDistance2 = separationDistance * 1.18 * separationFactor2; // 应用分离因子
        newCell2.position.copy(parentCell.position).addScaledVector(directionVector2, adjustedSeparationDistance2 * progress);
      }

      requestAnimationFrame(animate); // 递归调用动画
    };

    animate();
    manageVisibleCells(); // 管理细胞的可见数量
  };

  // 更新实时统计数据
  const updateStats = () => {
    const visibleCells = cellsRef.current.length; // 获取当前可见细胞数
    const avgLength = cellsRef.current.reduce((sum, cell) => 
      sum + cell.scale.x, 0) / visibleCells; // 计算平均细胞长度

    setStats({
      totalCells: totalCellCountRef.current,
      visibleCells,
      avgLength: avgLength.toFixed(2),
      growthRate: calculateGrowthRate() // 计算生长速率
    });
  };

  // 计算生长速率，受时间、氧气浓度、温度影响
  const calculateGrowthRate = () => {
    const baseRate = 0.15;  // 基础生长速率
    const timeMultiplier = Math.min(timeStep / 200, 3);  // 时间对生长的影响
    const oxygenEffect = environment.oxygen < 20 ? 0.8 : 1;  // 氧气浓度对生长的影响
    const temperatureEffect = Math.exp(-Math.pow(environment.temperature - 30, 2) / 100);
    return ((baseRate * (1 + timeMultiplier) * oxygenEffect * temperatureEffect) * 100).toFixed(2);
  };

  // 设置模拟运行的定时器
  useEffect(() => {
    let interval;
    if (!isPaused) {
      interval = setInterval(() => {
        setTimeStep(prev => prev + 1); // 更新时间步长
        
        // 更新所有细胞状态
        cellsRef.current.forEach(cell => {
          if (!cell.userData.dividing) {
            const growthRate = (calculateGrowthRate() / 2000) * cell.userData.growthRateModifier;
            cell.userData.growthStage += growthRate;
            
            // 更新细胞形状
            const targetLength = calculateCellLength(environment.oxygen);
            cell.scale.x += (targetLength - cell.scale.x) * 0.1;
            
            if (cell.userData.growthStage >= (1 + cell.userData.divisionDelay)) {
              divideCellProcess(cell);
            }
          }
        });

        updateStats(); // 更新统计数据
      }, 50);
    }
    return () => clearInterval(interval);
  }, [isPaused, environment]);

  // 重置模拟
  const handleReset = () => {
    cellsRef.current.forEach(cell => {
      sceneRef.current.remove(cell); // 移除细胞
    });
    cellsRef.current = []; // 清空细胞数组
    totalCellCountRef.current = 1; // 重置总细胞数
    addInitialCell(); // 添加初始细胞
    setTimeStep(0); // 重置时间步长
    setIsPaused(true); // 设置暂停状态
  };

  // 重置相机视角
  const resetCamera = () => {
    if (cameraRef.current && controlsRef.current) {
      // 重置相机位置
      cameraRef.current.position.set(0, 0, 30);
      // 重置控制器目标点到原点
      controlsRef.current.target.set(0, 0, 0);
      // 更新控制器
      controlsRef.current.update();
    }
  };

  // 计算模拟时间（分钟和秒）
  const minutes = Math.floor(timeStep / 10);
  const seconds = ((timeStep % 10) * 6).toFixed(0);

  return (
    <Card className="w-full max-w-5xl mx-auto">
      <CardHeader>
        <CardTitle>3D酵母生长模拟</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex flex-col gap-4" style={{ width: '800px', margin: '0 auto' }}>
          <div className="flex gap-4 mb-4">
            <Button 
              onClick={() => setIsPaused(!isPaused)} 
              className="w-24"
            >
              {isPaused ? '开始' : '暂停'}
            </Button>
            <Button 
              onClick={handleReset} 
              className="w-24"
            >
              重置
            </Button>
            <Button 
              onClick={resetCamera} 
              className="w-24"
            >
              重置视角
            </Button>
          </div>

          <div className="flex justify-center items-center bg-gray-100 rounded-lg mb-4" style={{ width: '800px', height: '500px' }}>
            <canvas 
              ref={canvasRef} 
              className="rounded-lg"
              style={{ width: '800px', height: '500px' }}
            />
          </div>

          <div className="grid grid-cols-2 gap-8 mb-4" style={{ width: '800px' }}>
            <div>
              <div className="mb-2">氧气浓度: {environment.oxygen}%</div>
              <input
                type="range"
                value={environment.oxygen}
                onChange={(e) => setEnvironment(prev => ({...prev, oxygen: parseInt(e.target.value)}))}                min={0}
                max={100}
                className="w-full"
              />
            </div>

            <div>
              <div className="mb-2">温度: {environment.temperature}°C</div>
              <input
                type="range"
                value={environment.temperature}
                onChange={(e) => setEnvironment(prev => ({...prev, temperature: parseInt(e.target.value)}))}                min={20}
                max={40}
                className="w-full"
              />
            </div>
          </div>

          <div className="p-4 bg-white rounded-lg shadow" style={{ width: '800px' }}>
            <div className="grid grid-cols-2 gap-4">
              <div className="text-sm space-y-2">
                <div className="font-bold mb-2">实时统计数据:</div>
                <div>实际总细胞数: {stats.totalCells.toLocaleString()}</div>
                <div>可见细胞数: {stats.visibleCells}</div>
                <div>生长速率: {stats.growthRate}%</div>
                <div>时间: {minutes} 分钟 {seconds} 秒</div>
                {environment.oxygen < 20 ? 
                  <div className="text-blue-600">厌氧条件: 新生成的细胞呈现伸长状态</div> :
                  <div className="text-green-600">需氧条件: 细胞保持圆形</div>
                }
                {Math.abs(environment.temperature - 30) > 5 &&
                  <div className="text-yellow-600">温度偏离最适范围，生长受限</div>
                }
              </div>
              <div className="text-gray-600 text-sm text-left">
                <p>
                  本 Software 模拟了 <strong>酵母菌的三维生长过程</strong>，其核心可以提炼为一个生物数学建模框架，
                  Model描述了 <strong>细胞形态、生长速率、分裂机制</strong> 与环境条件（如氧气浓度、温度）之间的相互关系。
                </p>
                <p className="mt-2">
                  这个框架可以进一步推广，模拟更复杂的细胞生长行为或引入其他环境变量（如营养浓度、竞争等）。
                </p>
                <p className="mt-3 text-green-600">
                  鼠标左键拖动为视角旋转，滚轮为缩放，右键为视野平移。
                </p>
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

// 导出YeastSimulation组件作为默认导出
// 导出YeastSimulation组件
export { YeastSimulation };
