import React, { useState, useEffect, useRef } from 'react';
import { Card, CardHeader, CardTitle, CardContent } from './components/ui/card';
import { Button } from './components/ui/button';

import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import { Raycaster } from 'three';

const ResistanceSim3D = ({ onExit }) => {
  // 管理模拟的状态
  const [isPaused, setIsPaused] = useState(true); // 模拟是否暂停
  const [timeStep, setTimeStep] = useState(0); // 时间步长，控制生长速率
  const [speedMultiplier, setSpeedMultiplier] = useState(1); // 速度倍率，控制模拟速度
  // 使用雪花酵母类型
  const [stats, setStats] = useState({ // 存储实时统计数据
    totalCells: 1, // 总细胞数
    visibleCells: 0, // 可见细胞数
    avgLength: 0, // 平均细胞长度
    growthRate: 0 // 生长速率
  });
  const [selectedCell, setSelectedCell] = useState(null); // 存储被选中的细胞信息
  
  // 抗药性模拟相关状态
  const [opioidSecreting, setOpioidSecreting] = useState(false); // 阿片肽分泌状态
  const [antibioticConcentration, setAntibioticConcentration] = useState('none'); // 抗生素浓度：'none', 'low', 'high'
  const [opioidStartTime, setOpioidStartTime] = useState(0); // 阿片肽开始分泌时间
  const [antibioticStartTime, setAntibioticStartTime] = useState(0); // 抗生素开始添加时间
  const opioidFieldRef = useRef(null); // 阿片肽浓度场的引用
  const antibioticFieldRef = useRef(null); // 抗生素浓度场的引用
  const opioidTimeRef = useRef(0); // 独立的阿片肽时间追踪
  // 固定环境条件：氧气浓度10%、温度30℃
  const environment = {
    oxygen: 10,
    temperature: 30
  };
  const controlsRef = useRef(null); // 添加OrbitControls的引用
  // Refs 变量
  const canvasRef = useRef(null); // 3D canvas 的引用
  const sceneRef = useRef(null); // Three.js 场景的引用
  const rendererRef = useRef(null); // Three.js 渲染器的引用
  const cameraRef = useRef(null); // Three.js 相机的引用
  const cellsRef = useRef([]); // 细胞的引用数组
  const totalCellCountRef = useRef(1); // 总细胞数的引用
  const raycasterRef = useRef(new Raycaster()); // 射线检测器的引用
  const mouseRef = useRef(new THREE.Vector2()); // 鼠标位置的引用
  const cellIdCounterRef = useRef(1); // 细胞ID计数器的引用
  const timeStepRef = useRef(0); // timeStep的引用，用于在动画循环中获取最新值
  const MAX_VISIBLE_CELLS = 2100;  // 最大可见细胞数
  const MAX_TOTAL_CELLS = 999999999; // 最大总细胞数
  const MAX_LENGTH_RATIO = 1.8; // 最大细胞长度比例

  // 计算细胞的长度，根据氧气浓度调整（仅雪花酵母）
  const calculateCellLength = (oxygen) => {
    // 雪花酵母根据氧气浓度调整形状
    if (oxygen >= 20) {
      return 1.0;  // 需氧条件：完全圆形
    } else {
      const lengthIncrease = (20 - oxygen) / 20 * (MAX_LENGTH_RATIO - 1.0);
      return Math.min(1.0 + lengthIncrease, MAX_LENGTH_RATIO);
    }
  };
  
  // 设置细胞突变颜色
  const setMutationColor = (cell, mutationLevel) => {
    if (mutationLevel === 0) {
      // 正常细胞保持白色
      cell.material.uniforms.color.value.setRGB(1, 1, 1);
    } else if (mutationLevel === 1) {
      // 一级突变：浅红色
      cell.material.uniforms.color.value.setRGB(1, 0.6, 0.6);
    } else if (mutationLevel === 2) {
      // 二级突变：深红色
      cell.material.uniforms.color.value.setRGB(1, 0.2, 0.2);
    }
  };
  

  // 处理鼠标点击事件，显示细胞编号
  // 计算指定位置的阿片肽浓度
  const calculateOpioidConcentration = (position) => {
    if (!opioidSecreting) {
      return 0;
    }
    
    const currentOpioidTime = opioidTimeRef.current;
    const timeSinceStart = currentOpioidTime;
    if (timeSinceStart < 0) {
      return 0;
    }
    
    // 计算距离中心的距离
    const distance = Math.sqrt(position.x * position.x + position.y * position.y);
    
    // 特殊处理：如果是中心位置（祖细胞），立即达到最高浓度
    if (distance < 0.1) { // 中心区域半径0.1
      return 1.0; // 100%浓度
    }
    
    // 使用与shader相同的计算逻辑
    const effectiveTime = Math.max(0.1, timeSinceStart);
    const diffusionRate = 0.8;
    const diffusionRadius = diffusionRate * effectiveTime * 2.0;
    
    // 如果距离超过当前扩散半径，浓度为0
    if (distance > diffusionRadius) {
      return 0;
    }
    
    // 扩散边缘的软化效果
    const edgeSoftness = 2.0;
    const edgeFade = 1.0 - Math.max(0, Math.min(1, (distance - (diffusionRadius - edgeSoftness)) / edgeSoftness));
    
    // 径向亮度梯度：中心最亮，向外指数衰减
    const radialGradient = Math.exp(-distance * 0.15);
    
    // 时间因子：控制整体强度随时间增长
    const timeFactor = Math.min(1.0, effectiveTime / 15.0);
    
    // 综合浓度计算
    const concentration = radialGradient * timeFactor * edgeFade;
    
    return Math.max(0, Math.min(1, concentration));
  };

  const handleMouseClick = (event) => {
    // 计算鼠标在canvas中的相对位置
    const rect = canvasRef.current.getBoundingClientRect();
    mouseRef.current.x = ((event.clientX - rect.left) / rect.width) * 2 - 1;
    mouseRef.current.y = -((event.clientY - rect.top) / rect.height) * 2 + 1;
    
    // 设置射线检测器
    raycasterRef.current.setFromCamera(mouseRef.current, cameraRef.current);
    
    // 检测射线与细胞的交叉
    const intersects = raycasterRef.current.intersectObjects(cellsRef.current);
    
    if (intersects.length > 0) {
      // 获取第一个相交的细胞
      const selectedCell = intersects[0].object;
      // 使用细胞已存储的阿片肽浓度，而不是重新计算
      const opioidConcentration = selectedCell.userData.opioidConcentration || 0;
      
      // 记录鼠标点击的实际位置，用于显示标签
      setSelectedCell({
        id: selectedCell.userData.cellId,
        position: selectedCell.position.clone(),
        opioidConcentration: opioidConcentration,
        clickPosition: {
          x: event.clientX - rect.left,
          y: event.clientY - rect.top
        }
      });
    } else {
      // 如果没有点击到细胞，清除选中状态
      setSelectedCell(null);
    }
  };

  // 创建阿片肽扩散可视化（3D球形扩散）
  const createOpioidVisualization = () => {
    if (opioidFieldRef.current) {
      sceneRef.current.remove(opioidFieldRef.current);
    }
    
    // 创建一个平面来显示阿片肽扩散场，始终面向相机
    const geometry = new THREE.PlaneGeometry(60, 60, 64, 64);
    const material = new THREE.ShaderMaterial({
      uniforms: {
        time: { value: 0 }, // 初始时间为0
        diffusionRate: { value: 0.8 }, // 增加扩散速率
        maxConcentration: { value: 1.0 }
      },
      vertexShader: `
        varying vec2 vUv;
        varying vec3 vPosition;
        void main() {
          vUv = uv;
          vPosition = position;
          gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }
      `,
      fragmentShader: `
        uniform float time;
        uniform float diffusionRate;
        uniform float maxConcentration;
        varying vec2 vUv;
        varying vec3 vPosition;
        
        void main() {
          if (time <= 0.0) {
            discard;
          }
          
          float effectiveTime = max(0.1, time);
          
          // 计算从中心(0.5, 0.5)的距离
          vec2 center = vec2(0.5, 0.5);
          float distance = length(vUv - center) * 30.0; // 缩放到实际尺寸
          
          // 扩散前沿：随时间向外扩展的边界
          float diffusionRadius = diffusionRate * effectiveTime * 2.0;
          
          // 如果距离超过当前扩散半径，则不显示
          if (distance > diffusionRadius) {
            discard;
          }
          
          // 扩散边缘的软化效果
          float edgeSoftness = 2.0;
          float edgeFade = 1.0 - smoothstep(diffusionRadius - edgeSoftness, diffusionRadius, distance);
          
          // 径向亮度梯度：中心最亮，向外指数衰减
          float radialGradient = exp(-distance * 0.15);
          
          // 时间因子：控制整体强度随时间增长
          float timeFactor = min(1.0, effectiveTime / 15.0);
          
          // 综合浓度计算：结合径向梯度、时间因子和边缘淡化
          float concentration = radialGradient * timeFactor * edgeFade;
          
          // 颜色梯度：中心亮白蓝色，边缘深蓝色
          float colorIntensity = concentration;
          vec3 centerColor = vec3(0.9, 0.95, 1.0); // 中心更亮的白蓝色
          vec3 edgeColor = vec3(0.2, 0.4, 0.9);    // 边缘蓝色
          vec3 color = mix(edgeColor, centerColor, colorIntensity * colorIntensity); // 使用平方增强中心亮度
          
          // 透明度：基于浓度和径向梯度
          float alpha = concentration * (0.5 + 0.4 * radialGradient);
          alpha = max(alpha, 0.05); // 最小可见度
          alpha = min(alpha, 0.8); // 限制最大透明度
          
          gl_FragColor = vec4(color, alpha);
        }
      `,
      transparent: true,
        side: THREE.DoubleSide, // 双面渲染
        depthWrite: false,
        depthTest: false, // 禁用深度测试以确保可见性
        blending: THREE.AdditiveBlending, // 恢复加法混合模式
        opacity: 1.0
    });
    
    const opioidField = new THREE.Mesh(geometry, material);
    opioidField.position.set(0, 0, 0);
    
    opioidFieldRef.current = opioidField;
    sceneRef.current.add(opioidField);
  };
  
  // 更新阿片肽可视化（平面扩散）
  const updateOpioidVisualization = () => {
    if (opioidFieldRef.current && opioidSecreting) {
      const timeSinceStart = opioidTimeRef.current;
      opioidFieldRef.current.material.uniforms.time.value = timeSinceStart;
      
      // 根据扩散时间调整平面的可见性和大小
      const diffusionProgress = Math.min(1.0, timeSinceStart / 30.0);
      opioidFieldRef.current.material.uniforms.maxConcentration.value = diffusionProgress;
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
    
    // 添加鼠标点击事件监听器
    canvasRef.current.addEventListener('click', handleMouseClick);
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

    // 动画循环（仅负责渲染和视觉更新）
    const animate = () => {
      requestAnimationFrame(animate);

      // 更新阿片肽可视化（独立于细胞生长）
      updateOpioidVisualization();
      
      // 确保扩散平面始终面向相机
      if (opioidFieldRef.current && cameraRef.current) {
        opioidFieldRef.current.lookAt(cameraRef.current.position);
      }

      controlsRef.current.update(); // 更新控制器状态
      renderer.render(scene, camera);
    };

    animate();

    return () => {
      window.removeEventListener('resize', handleResize); // 移除窗口大小变化的事件监听器
      if (canvasRef.current) {
        canvasRef.current.removeEventListener('click', handleMouseClick); // 移除鼠标点击事件监听器
      }
      if (renderer.domElement) {
        renderer.domElement.removeEventListener('contextmenu', event => event.preventDefault());
        renderer.domElement.removeEventListener('mousedown', event => {});
        renderer.domElement.removeEventListener('mousemove', event => {});
        renderer.domElement.removeEventListener('mouseup', event => {});
        renderer.domElement.removeEventListener('mouseleave', () => {});
      }
      scene.clear();
      renderer.dispose();
      controls.dispose(); // 清理控制器
    };
  }, []);

  // 创建酵母细胞的函数
  const createYeastCell = (position, oxygen, parentCellId = null) => {
    const length = calculateCellLength(oxygen); // 计算细胞长度
    const geometry = new THREE.SphereGeometry(1, 32, 32);
    
    // 雪花酵母 - 椭圆形，白色
    geometry.scale(length, 1, 1); // 调整几何体比例为椭圆形
    
    // 创建自定义着色器材质来实现渐变发光效果
    // 雪花酵母设置为白色，但会根据阿片肽浓度变绿
    const cellColor = new THREE.Color(0xFFFFFF); // 雪花酵母为白色
    const cellGlowColor = new THREE.Color(0xCCCCCC); // 雪花酵母为白色光晕
    
    const customMaterial = new THREE.ShaderMaterial({
      uniforms: {
        color: { value: cellColor },
        glowColor: { value: cellGlowColor },
        opioidConcentration: { value: 0.0 } // 阿片肽浓度uniform
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
        uniform float opioidConcentration;
        varying vec3 vNormal;
        varying vec3 vPosition;
        void main() {
          float rim = pow(1.0 - abs(dot(vNormal, vec3(0, 0, 1.0))), 1.8);
          float edge = smoothstep(0.2, 1.0, abs(vPosition.x));
          float centerDim = smoothstep(0.0, 0.5, abs(vPosition.x));
          
          // 根据阿片肽浓度混合绿色
          vec3 greenColor = vec3(0.2, 1.0, 0.3); // 亮绿色
          vec3 baseColor = mix(color, greenColor, opioidConcentration);
          vec3 baseGlowColor = mix(glowColor, greenColor * 0.8, opioidConcentration);
          
          vec3 finalColor = mix(baseColor, baseGlowColor, rim + edge * 0.4);
          float alpha = 0.15 + rim * 0.2 + edge * 0.15 - centerDim * 0.05 + opioidConcentration * 0.1;
          gl_FragColor = vec4(finalColor, alpha);
        }
      `,
      transparent: true,
      side: THREE.DoubleSide
    });
    
    var cell = new THREE.Mesh(geometry, customMaterial);
    
    cell.castShadow = true;
    cell.receiveShadow = true;

    // 创建细胞核 - 雪花酵母的细胞核为灰色
    const nucleusGeometry = new THREE.SphereGeometry(0.3, 16, 16);
    const nucleusColor = 0x888888; // 雪花酵母为灰色
    const nucleusMaterial = new THREE.MeshPhongMaterial({
      color: nucleusColor,
      emissive: nucleusColor,
      emissiveIntensity: 0.3,
      specular: 0xFFFFFF,
      shininess: 100
    });
    const nucleus = new THREE.Mesh(nucleusGeometry, nucleusMaterial);
    
    // 雪花酵母的细胞核位于细胞中心
    nucleus.position.set(0, 0, 0); // 设置在细胞中心
    
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

    // 计算初始阿片肽浓度
    const initialOpioidConcentration = calculateOpioidConcentration(position || new THREE.Vector3(0, 0, 0));
    
    // 设置细胞的用户数据
    cell.userData = {
      growthStage: 0, // 生长阶段
      dividing: false, // 是否在分裂
      createdAtOxygen: oxygen, // 细胞创建时的氧气浓度
      divisionCount: 0, // 分裂次数计数器 (0表示未分裂)
      growthRateModifier: 0.6 + Math.random() * 0.8, // 随机生长速率修正因子 (0.6-1.4)
      divisionDelay: Math.random() * 0.3, // 随机分裂延迟 (0-0.3)
      canDivide: true, // 标记细胞是否可以分裂
      isInitialCell: false, // 默认不是初始细胞
      isChildOfDividedCell: parentCellId ? true : false, // 标记是否是已分裂细胞的子细胞
      cellId: parentCellId ? parentCellId + 1 : cellIdCounterRef.current, // 细胞编号
      // 抗药性相关属性
      hasResistancePlasmid: false, // 是否具有抗药质粒
      opioidConcentration: initialOpioidConcentration, // 当前阿片肽浓度
      resistanceGeneExpression: 0, // 抗药基因表达强度
      antibioticConcentration: 0, // 当前抗生素浓度
      survivalProbability: 1.0, // 存活概率
      isDead: false, // 是否死亡
      dying: false, // 是否正在死亡
      deathProgress: 0, // 死亡进度（0-1）
      mutationLevel: 0 // 突变水平（0-正常，1-轻度突变，2-重度突变）
    };
    
    // 初始化shader中的阿片肽浓度uniform
    if (customMaterial.uniforms && customMaterial.uniforms.opioidConcentration) {
      customMaterial.uniforms.opioidConcentration.value = initialOpioidConcentration;
    }
    
    // 设置初始突变颜色（默认为0级，即白色）
    setMutationColor(cell, cell.userData.mutationLevel);

    return cell; // 返回创建的细胞
  };

  // 添加初始细胞
  const addInitialCell = () => {
    cellIdCounterRef.current = 1; // 重置细胞ID计数器
    const cell = createYeastCell(new THREE.Vector3(0, 0, 0), environment.oxygen);
    // 为初始细胞设置特殊属性
    cell.userData.divisionCount = 0; // 初始分裂次数为0
    cell.userData.isInitialCell = true; // 标记为初始细胞
    cell.userData.cellId = 1; // 初始细胞编号为1
    cell.userData.hasResistancePlasmid = true; // 祖细胞具有抗药质粒
    
    // 设置雪花酵母的初始属性
    cell.userData.divisionDelay = 0.1; // 减少初始细胞的分裂延迟
    // 为雪花酵母设置十个方向的分裂延迟时间，对应立方体的八个顶点加上X轴正负方向
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

  // 管理可见细胞的数量
  const manageVisibleCells = () => {
    const scene = sceneRef.current;
    
    // 如果细胞数超过最大可见数量，根据优先级移除细胞
    while (cellsRef.current.length > MAX_VISIBLE_CELLS) {
      // 按照与中心点的距离对细胞进行排序，保留中心区域的细胞
      // 创建一个包含细胞和其距离信息的数组
      const cellsWithDistance = cellsRef.current.map((cell, index) => {
        // 计算细胞到原点的距离
        const distanceToCenter = cell.position.length();
        // 如果是初始细胞或位于中心区域的重要细胞，给予高保留优先级
        const isImportantCell = cell.userData.isInitialCell || distanceToCenter < 5;
        
        return {
          cell,
          index,
          distanceToCenter,
          isImportantCell
        };
      });
      
      // 首先移除非重要细胞，按照距离中心从远到近排序
      const nonImportantCells = cellsWithDistance
        .filter(item => !item.isImportantCell)
        .sort((a, b) => b.distanceToCenter - a.distanceToCenter);
      
      if (nonImportantCells.length > 0) {
        // 移除距离中心最远的非重要细胞
        const cellToRemove = nonImportantCells[0];
        scene.remove(cellToRemove.cell);
        // 从数组中移除该细胞
        cellsRef.current.splice(cellToRemove.index, 1);
      } else {
        // 如果所有细胞都是重要细胞，则按照距离排序移除最远的
        cellsWithDistance.sort((a, b) => b.distanceToCenter - a.distanceToCenter);
        const cellToRemove = cellsWithDistance[0];
        scene.remove(cellToRemove.cell);
        // 从数组中移除该细胞
        cellsRef.current.splice(cellToRemove.index, 1);
      }
    }
  };

  // 细胞分裂过程
  const divideCellProcess = (parentCell) => {
    // 如果细胞正在分裂、死亡或已死亡，则不继续
    if (parentCell.userData.dividing || parentCell.userData.dying || parentCell.userData.isDead) return;
    
    // 如果可见细胞数已达到上限，停止分裂（冻结状态）
    if (cellsRef.current.length >= MAX_VISIBLE_CELLS) return; 

    // 判断是否为初始细胞（位于原点）
    const isInitialCell = parentCell.position.x === 0 && 
                         parentCell.position.y === 0 && 
                         parentCell.position.z === 0;

    // 雪花酵母的分裂规则：
    // 如果是初始细胞且已经分裂了10次，则不再分裂（修改为10个方向：8个卦限+X轴正负方向）
    if (isInitialCell && parentCell.userData.divisionCount >= 10) return;
    
    // 如果不是初始细胞且已经分裂过，则不再分裂
    if (!isInitialCell && parentCell.userData.divisionCount >= 1) return;

    parentCell.userData.dividing = true; // 设置为正在分裂
    parentCell.userData.divisionCount++; // 增加分裂次数

    // 雪花酵母的子细胞产生逻辑
    // 检查是否是已分裂细胞的子细胞
    const isChildOfDividedCell = parentCell.userData.isChildOfDividedCell;
    
    // 初始细胞必定产生一个子细胞
    // 如果是已分裂细胞的子细胞，则分裂概率降低到30%
    // 其他细胞有60%概率产生两个子细胞
    let produceTwoCells;
    if (isChildOfDividedCell) {
      produceTwoCells = !isInitialCell && Math.random() < 0.3; // 降低到30%
    } else {
      produceTwoCells = !isInitialCell && Math.random() < 0.6;
    }
    
    // 创建第一个新细胞，传递父细胞的ID
    const newCell1 = createYeastCell(null, environment.oxygen, parentCell.userData.cellId);
    
    // 继承抗药质粒
    newCell1.userData.hasResistancePlasmid = parentCell.userData.hasResistancePlasmid;
    
    // 突变机制：继承父细胞的突变状态，并有小概率进一步突变
    newCell1.userData.mutationLevel = parentCell.userData.mutationLevel; // 首先继承父细胞的突变等级
    
    if (Math.random() < 0.005) { // 0.5%概率发生进一步突变
      newCell1.userData.mutationLevel = Math.min(2, newCell1.userData.mutationLevel + 1);
    }
    
    // 设置突变颜色
    setMutationColor(newCell1, newCell1.userData.mutationLevel);
    
    // 如果父细胞已经产生了两个子细胞，则标记这些子细胞
    if (produceTwoCells) {
      newCell1.userData.isChildOfDividedCell = true;
    }
    
    // 如果需要产生第二个子细胞，则创建
    let newCell2 = null;
    if (produceTwoCells) {
      newCell2 = createYeastCell(null, environment.oxygen, parentCell.userData.cellId);
      
      // 继承抗药质粒
      newCell2.userData.hasResistancePlasmid = parentCell.userData.hasResistancePlasmid;
      
      // 突变机制：继承父细胞的突变状态，并有小概率进一步突变
      newCell2.userData.mutationLevel = parentCell.userData.mutationLevel; // 首先继承父细胞的突变等级
      
      if (Math.random() < 0.005) { // 0.5%概率发生进一步突变
        newCell2.userData.mutationLevel = Math.min(2, newCell2.userData.mutationLevel + 1);
      }
      
      // 设置突变颜色
      setMutationColor(newCell2, newCell2.userData.mutationLevel);
      
      // 标记第二个子细胞
      newCell2.userData.isChildOfDividedCell = true;
    }
    
    // 添加新细胞到场景 - 确保所有新细胞都被添加到场景中
    sceneRef.current.add(newCell1);
    cellsRef.current.push(newCell1);
    
    if (produceTwoCells && newCell2) {
      sceneRef.current.add(newCell2);
      cellsRef.current.push(newCell2);
    }
    
    // 移除自动管理可见细胞数量的逻辑，因为现在通过停止分裂来冻结状态

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
    
    // 雪花酵母的分裂方向逻辑
    let directionVector1, directionVector2;
    
    if (isInitialCell) {
      // 初始细胞分裂方向逻辑 - 八卦限方向（立方体8个顶点）
      // 生成随机角度偏移（5-15度之间）
      const randomAngleOffset = (5 + Math.random() * 10) * (Math.PI / 180);
      const randomAxisOffset = new THREE.Vector3(
        (Math.random() - 0.5) * 0.3,
        (Math.random() - 0.5) * 0.3,
        (Math.random() - 0.5) * 0.3
      ).normalize();
      
      // 定义10个方向向量：立方体8个顶点（八卦限方向）加上X轴正负方向
      const snowflakeDirections = [
        new THREE.Vector3(1, 1, 1),    // 右上前
        new THREE.Vector3(1, 1, -1),   // 右上后
        new THREE.Vector3(1, -1, 1),   // 右下前
        new THREE.Vector3(1, -1, -1),  // 右下后
        new THREE.Vector3(-1, 1, 1),   // 左上前
        new THREE.Vector3(-1, 1, -1),  // 左上后
        new THREE.Vector3(-1, -1, 1),  // 左下前
        new THREE.Vector3(-1, -1, -1), // 左下后
        new THREE.Vector3(1, 0, 0),    // X轴正方向
        new THREE.Vector3(-1, 0, 0)    // X轴负方向
      ];
      
      // 确保所有方向向量都是单位向量
      snowflakeDirections.forEach(dir => dir.normalize());
      
      // 根据已分裂的次数决定分裂方向，并添加随机偏移
      let baseDirection;
      const divisionIndex = parentCell.userData.divisionCount - 1; // 索引从0开始
      
      if (divisionIndex < snowflakeDirections.length) {
        baseDirection = snowflakeDirections[divisionIndex];
      } else {
        // 如果分裂次数超过10次，使用随机方向
        baseDirection = new THREE.Vector3(
          Math.random() - 0.5,
          Math.random() - 0.5,
          Math.random() - 0.5
        ).normalize();
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
      // 判断是否为八卦限方向（前8个方向）
      const isOctantDirection = divisionIndex < 8;
      // 判断是否为X轴方向（后2个方向）
      const isXAxisDirection = divisionIndex >= 8 && divisionIndex < 10;
      
      // 八卦限方向使用80%的分离距离，X轴方向使用正常分离距离
      if (isOctantDirection) {
        newCell1.userData.separationFactor = 0.8; // 八卦限方向使用80%的分离距离
      } else if (isXAxisDirection) {
        newCell1.userData.separationFactor = 1.0; // X轴方向使用正常分离距离
      } else {
        newCell1.userData.separationFactor = 0.9; // 其他方向使用90%的分离距离
      }
    } else {
      // 非初始细胞的分裂方向逻辑 - 雪花酵母
      // 为雪花酵母的非初始细胞设置分裂方向
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

    // 如果细胞数量超过限制，不再自动暂停，而是通过manageVisibleCells限制显示数量
    // 移除自动暂停逻辑，让程序继续运行

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
    // 移除manageVisibleCells调用，因为现在通过停止分裂来冻结状态
  };

  // 更新实时统计数据
  const updateStats = () => {
    // 只统计活着的细胞
    const aliveCells = cellsRef.current.filter(cell => !cell.userData.isDead && !cell.userData.dying);
    const visibleCells = aliveCells.length; // 获取当前可见活细胞数
    const avgLength = visibleCells > 0 ? 
      aliveCells.reduce((sum, cell) => sum + cell.scale.x, 0) / visibleCells : 0; // 计算平均细胞长度

    setStats({
      totalCells: totalCellCountRef.current,
      visibleCells,
      avgLength: avgLength.toFixed(2),
      growthRate: calculateGrowthRate() // 计算生长速率
    });
  };

  // 计算生长速率，受时间影响，氧气浓度和温度已固定为10%和30℃
  const calculateGrowthRate = () => {
    const baseRate = 0.15;  // 基础生长速率
    const timeMultiplier = Math.min(timeStep / 200, 3);  // 时间对生长的影响
    const oxygenEffect = 0.8;  // 氧气浓度为10%时的固定影响
    const temperatureEffect = 1.0;  // 温度为30℃时的固定影响
    // 应用速度倍率到生长速率
    return ((baseRate * (1 + timeMultiplier) * oxygenEffect * temperatureEffect * speedMultiplier) * 100).toFixed(2);
  };

  // 检查细胞是否应该死亡
  const checkCellSurvival = (cell) => {
    // 如果抗生素浓度为无，没有细胞死亡
    if (antibioticConcentration === 'none') {
      return true;
    }
    
    const opioidConc = cell.userData.opioidConcentration || 0;
    const mutationLevel = cell.userData.mutationLevel || 0;
    
    if (antibioticConcentration === 'low') {
      // 低浓度：阿片肽浓度>=20%或mutationLevel>=1的细胞存活
      return opioidConc >= 0.2 || mutationLevel >= 1;
    } else if (antibioticConcentration === 'high') {
      // 高浓度：阿片肽浓度>=30%或mutationLevel=2的细胞存活
      return opioidConc >= 0.3 || mutationLevel === 2;
    }
    
    return true;
  };
  
  // 处理细胞死亡动画
  const processCellDeath = (cell) => {
    if (!cell.userData.dying) {
      cell.userData.dying = true;
      cell.userData.deathProgress = 0;
    }
    
    // 逐渐降低亮度
    cell.userData.deathProgress += 0.02; // 死亡进度
    const brightness = Math.max(0, 1 - cell.userData.deathProgress);
    
    // 更新材质亮度
    if (cell.material && cell.material.uniforms && cell.material.uniforms.color) {
      const currentColor = cell.material.uniforms.color.value;
      cell.material.uniforms.color.value.setRGB(
        currentColor.r * brightness,
        currentColor.g * brightness, 
        currentColor.b * brightness
      );
    }
    
    // 当完全变暗时，标记为死亡
    if (cell.userData.deathProgress >= 1) {
      cell.userData.isDead = true;
      return true; // 返回true表示细胞已完全死亡
    }
    
    return false;
  };

  // 设置细胞生长和分裂的定时器（独立于阿片肽功能）
  useEffect(() => {
    let interval;
    if (!isPaused) {
      // 根据速度倍率调整定时器间隔时间
      const intervalTime = Math.max(10, Math.floor(50 / speedMultiplier));
      interval = setInterval(() => {
        setTimeStep(prev => prev + 1); // 更新时间步长
        
        // 检查细胞存活状态并处理死亡
        const cellsToRemove = [];
        cellsRef.current.forEach((cell, index) => {
          if (!cell.userData.isDead && !cell.userData.dying) {
            // 检查细胞是否应该死亡
            if (!checkCellSurvival(cell)) {
              // 开始死亡过程
              processCellDeath(cell);
            }
          } else if (cell.userData.dying) {
            // 继续死亡过程
            const fullyDead = processCellDeath(cell);
            if (fullyDead) {
              cellsToRemove.push(index);
            }
          }
        });
        
        // 移除完全死亡的细胞
        cellsToRemove.reverse().forEach(index => {
          const cell = cellsRef.current[index];
          sceneRef.current.remove(cell);
          cellsRef.current.splice(index, 1);
        });
        
        // 更新所有细胞状态（仅细胞生长和分裂相关）
        cellsRef.current.forEach(cell => {
          if (!cell.userData.isDead && !cell.userData.dying && !cell.userData.dividing) {
            const growthRate = (calculateGrowthRate() / 2000) * cell.userData.growthRateModifier;
            cell.userData.growthStage += growthRate;
            
            if (cell.userData.growthStage >= (1 + cell.userData.divisionDelay)) {
              divideCellProcess(cell);
            }
          }
        });
        
        // 更新细胞形状（根据氧气浓度调整）
        cellsRef.current.forEach(cell => {
          if (!cell.userData.isDead && !cell.userData.dying) {
            const targetLength = calculateCellLength(environment.oxygen);
            cell.scale.x += (targetLength - cell.scale.x) * 0.1;
          }
        });

        updateStats(); // 更新统计数据
      }, intervalTime);
    }
    return () => clearInterval(interval);
  }, [isPaused, speedMultiplier, antibioticConcentration]);

  // 独立的阿片肽浓度更新定时器（不受isPaused影响）
  useEffect(() => {
    let opioidInterval;
    if (opioidSecreting) {
      opioidInterval = setInterval(() => {
        // 更新独立的阿片肽时间
        opioidTimeRef.current += 0.1; // 每50ms增加0.1时间单位
        
        // 更新所有细胞的阿片肽浓度
        cellsRef.current.forEach(cell => {
          const newOpioidConcentration = calculateOpioidConcentration(cell.position);
          cell.userData.opioidConcentration = newOpioidConcentration;
          
          // 更新shader中的阿片肽浓度uniform
          if (cell.material && cell.material.uniforms && cell.material.uniforms.opioidConcentration) {
            cell.material.uniforms.opioidConcentration.value = newOpioidConcentration;
          }
        });
      }, 50); // 固定50ms间隔更新阿片肽浓度
    }
    return () => clearInterval(opioidInterval);
  }, [opioidSecreting]); // 只依赖于opioidSecreting状态

  // 移除自动恢复监控定时器，因为不再需要自动暂停和恢复功能

  // 开始分泌阿片肽
  const startOpioidSecretion = () => {
    if (!opioidSecreting) {
      setOpioidSecreting(true);
      setOpioidStartTime(timeStep);
      opioidTimeRef.current = 0; // 重置独立的阿片肽时间
      createOpioidVisualization();
      
      // 立即更新所有细胞的阿片肽浓度
      cellsRef.current.forEach(cell => {
        const newOpioidConcentration = calculateOpioidConcentration(cell.position);
        cell.userData.opioidConcentration = newOpioidConcentration;
        
        // 更新shader中的阿片肽浓度uniform
        if (cell.material && cell.material.uniforms && cell.material.uniforms.opioidConcentration) {
          cell.material.uniforms.opioidConcentration.value = newOpioidConcentration;
        }
      });
    }
  };
  
  // 添加抗生素
  const addAntibiotic = (concentration) => {
    // 只能从无到低，从低到高，不能降级
    if (concentration === 'low' && antibioticConcentration === 'none') {
      setAntibioticConcentration('low');
      setAntibioticStartTime(timeStep);
    } else if (concentration === 'high' && (antibioticConcentration === 'none' || antibioticConcentration === 'low')) {
      setAntibioticConcentration('high');
      setAntibioticStartTime(timeStep);
    }
  };
  
  // 重置模拟
  const handleReset = () => {
    cellsRef.current.forEach(cell => {
      sceneRef.current.remove(cell); // 移除细胞
    });
    cellsRef.current = []; // 清空细胞数组
    totalCellCountRef.current = 1; // 重置总细胞数
    cellIdCounterRef.current = 1; // 重置细胞ID计数器
    setSelectedCell(null); // 清除选中的细胞
    
    // 清除阿片肽扩散场
    if (opioidFieldRef.current) {
      sceneRef.current.remove(opioidFieldRef.current);
      opioidFieldRef.current = null;
    }
    
    // 重置抗药性相关状态
    setOpioidSecreting(false);
    setAntibioticConcentration('none');
    setOpioidStartTime(0);
    setAntibioticStartTime(0);
    opioidTimeRef.current = 0; // 重置独立的阿片肽时间
    
    addInitialCell(); // 添加初始细胞
    setTimeStep(0); // 重置时间步长
    setIsPaused(true); // 设置暂停状态
    // 重置完成
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
        <CardTitle>3D耐药梯度模型</CardTitle>
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
            <Button 
              onClick={startOpioidSecretion}
              disabled={opioidSecreting}
              className="w-32"
            >
              {opioidSecreting ? '已分泌阿片肽' : '分泌阿片肽'}
            </Button>
            <Button 
              onClick={() => addAntibiotic('low')}
              disabled={antibioticConcentration === 'high'}
              className="w-32"
            >
              {antibioticConcentration === 'none' ? '低浓度抗生素' : '已添加低浓度'}
            </Button>
            <Button 
              onClick={() => addAntibiotic('high')}
              disabled={antibioticConcentration === 'high'}
              className="w-32"
            >
              {antibioticConcentration === 'high' ? '已添加高浓度' : '高浓度抗生素'}
            </Button>

          </div>
          
          <div className="mb-4">
            <div className="mb-2">模拟速度: {speedMultiplier}x</div>
            <input
              type="range"
              value={speedMultiplier}
              onChange={(e) => setSpeedMultiplier(parseFloat(e.target.value))}
              min={0.5}
              max={3}
              step={0.5}
              className="w-full"
            />
            <div className="flex justify-between text-xs text-gray-500">
              <span>0.5x</span>
              <span>1x</span>
              <span>1.5x</span>
              <span>2x</span>
              <span>2.5x</span>
              <span>3x</span>
            </div>
          </div>

          <div className="flex justify-center items-center bg-gray-100 rounded-lg mb-4" style={{ width: '800px', height: '500px', position: 'relative' }}>
            <canvas 
              ref={canvasRef} 
              className="rounded-lg"
              style={{ width: '800px', height: '500px' }}
            />
            {/* 抗生素浓度显示 */}
            <div 
              className="absolute bg-blue-600 bg-opacity-80 text-white px-3 py-2 rounded-md text-sm font-semibold"
              style={{
                top: '10px',
                right: '10px',
                zIndex: 15
              }}
            >
              抗生素浓度：{antibioticConcentration === 'none' ? '无' : antibioticConcentration === 'low' ? '低' : '高'}
            </div>
            {selectedCell && (
              <div 
                className="absolute bg-black bg-opacity-70 text-white px-2 py-1 rounded-md text-sm"
                style={{
                  left: `${selectedCell.clickPosition ? selectedCell.clickPosition.x : 400}px`,
                  top: `${selectedCell.clickPosition ? selectedCell.clickPosition.y : 250}px`,
                  transform: 'translate(-50%, -50%)',
                  zIndex: 10
                }}
              >
                <div>第{selectedCell.id}代</div>
                <div>阿片肽浓度: {(selectedCell.opioidConcentration * 100).toFixed(1)}%</div>
              </div>
            )}
          </div>

          <div className="p-4 bg-white rounded-lg shadow" style={{ width: '800px' }}>
            <div className="grid grid-cols-2 gap-4">
              <div className="text-sm space-y-2">
                <div className="font-bold mb-2">实时统计</div>
                <div>总细胞数: {stats.totalCells.toLocaleString()}</div>
                <div>可见细胞数: {stats.visibleCells}</div>
                <div>平均细胞长度: {stats.avgLength}</div>
                <div>生长速率: {stats.growthRate}%</div>
                <div>模拟时间: {minutes}分{seconds}秒</div>
              </div>
              <div className="text-sm space-y-2">
                <div className="font-bold mb-2">抗药性状态</div>
                <div>阿片肽分泌: {opioidSecreting ? '是' : '否'}</div>
                <div>抗生素浓度: {antibioticConcentration === 'none' ? '无' : antibioticConcentration === 'low' ? '低' : '高'}</div>
                <div>氧气浓度: {environment.oxygen}%</div>
                <div>温度: {environment.temperature}°C</div>
                <div>酵母类型: 雪花酵母</div>
              </div>
            </div>
          </div>

          <div className="p-4 bg-gray-100 rounded-lg shadow" style={{ width: '800px' }}>
            <div className="font-bold mb-2">模拟说明</div>
            <div className="text-sm space-y-2">
              <div><strong>1. 初始状态：</strong>祖细胞（白色）具有抗药质粒，位于中心位置</div>
              <div><strong>2. 阿片肽分泌：</strong>点击"分泌阿片肽"按钮，祖细胞开始分泌阿片肽（蓝色扩散场）（这个场的渲染调了好久，暂时还没弄好）</div>
              <div><strong>3. 基因激活：</strong>接收阿片肽的细胞激活抗药基因表达（绿色表示表达强度）</div>
              <div><strong>4. 抗生素压力：</strong>点击"添加抗生素"按钮，对所有细胞施加选择压力</div>
              <div><strong>5. 细胞死亡：</strong>无抗药性的细胞死亡（变为灰色，之后消失）</div>
              <div><strong>6. 突变进化：</strong>存活细胞可能发生突变（红色），获得更强抗药性（红色越深抗药性越强）</div>
              <div><strong>7. 细胞簇形成：</strong>最终形成抗药性强的细胞簇</div>
            </div>
          </div>

          <Button onClick={onExit}>返回酵母生长模拟</Button>
        </div>
      </CardContent>
    </Card>
  );
}

// 使用命名导出而不是默认导出
export { ResistanceSim3D };