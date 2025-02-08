import { useEffect, useRef } from "react";
import * as THREE from "three";
import Header from "../components/Header";
import { MeshLine, MeshLineMaterial } from "three.meshline"; // Importamos MeshLine
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";

const ThreeScene = () => {
  const mountRef = useRef(null); // Referencia al contenedor del canvas
  const sceneRef = useRef(null); // Para evitar la creación de múltiples escenas
  useEffect(() => {
    // Configuración básica de la escena
    const scene = new THREE.Scene();
    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);

    if (mountRef.current) {
      mountRef.current.appendChild(renderer.domElement);
    }

    // Crear un canvas para el fondo con un degradado
    const canvas = document.createElement("canvas");
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    const ctx = canvas.getContext("2d");

    // Crear un degradado de naranja a azul claro
    const gradient = ctx.createLinearGradient(0, 0, 0, canvas.height);
    gradient.addColorStop(1, "#FFFFFF"); // Blancos
    gradient.addColorStop(0, "#ADD8E6"); // Azul claro

    // Aplicar el degradado al canvas
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Crear una textura de Three.js usando el canvas
    const texture = new THREE.CanvasTexture(canvas);
    scene.background = texture;
    // Configuración de la cámara
    const camera = new THREE.PerspectiveCamera(
      40,
      window.innerWidth / window.innerHeight,
      0.1,
      10000
    );
    camera.position.set(40.5, 40.5, 40.5);
    camera.lookAt(2.5, 2.5, 2.5);

    // Habilitar controles interactivos
    const controls = new OrbitControls(camera, renderer.domElement);

    // Configuración de iluminación
    const bright = 1;
    const add_light = (x, y, z) => {
      const directionalLight = new THREE.DirectionalLight("#ffffff", bright);
      directionalLight.position.set(x, y, z);
      scene.add(directionalLight);
    };

    // Añadir luces a la escena
    add_light(10, 10, 10);
    add_light(-10, -10, -10);
    add_light(-10, 10, 10);
    add_light(10, -10, -10);

    // Crear un cubo con materiales transparentes
    const geometry11 = new THREE.BoxGeometry(3, 7, 4);
    const materials11 = [
      new THREE.MeshLambertMaterial({
        color: 0x919191,
        opacity: 0.5,
        transparent: true,
      }),
      new THREE.MeshLambertMaterial({
        color: 0x222222,
        opacity: 0.5,
        transparent: true,
      }),
      new THREE.MeshLambertMaterial({
        color: 0xf2f2f2,
        opacity: 0.5,
        transparent: true,
      }),
      new THREE.MeshLambertMaterial({
        color: 0x222222,
        opacity: 0,
        transparent: true,
      }),
      new THREE.MeshLambertMaterial({
        color: 0x333333,
        opacity: 0.5,
        transparent: true,
      }),
      new THREE.MeshLambertMaterial({
        color: 0x222222,
        opacity: 0.5,
        transparent: true,
      }),
    ];
    const cube11 = new THREE.Mesh(geometry11, materials11);
    cube11.position.set(0, 19, 0);
    scene.add(cube11);

    const cube12 = new THREE.Mesh(geometry11, materials11);
    cube12.position.set(0, 18.75 * -1, 0);
    scene.add(cube12);

    // Crear un cubo con materiales transparentes
    const geometry = new THREE.BoxGeometry(3, 27.5, 4);
    const materials = [
      new THREE.MeshLambertMaterial({
        color: 0x919191,
        opacity: 0.5,
        transparent: true,
      }),
      new THREE.MeshLambertMaterial({
        color: 0x222222,
        opacity: 0.5,
        transparent: true,
      }),
      new THREE.MeshLambertMaterial({
        color: 0xf2f2f2,
        opacity: 0,
        transparent: true,
      }),
      new THREE.MeshLambertMaterial({
        color: 0x222222,
        opacity: 0,
        transparent: true,
      }),
      new THREE.MeshLambertMaterial({
        color: 0x333333,
        opacity: 0.5,
        transparent: true,
      }),
      new THREE.MeshLambertMaterial({
        color: 0x222222,
        opacity: 0.5,
        transparent: true,
      }),
    ];
    const cube = new THREE.Mesh(geometry, materials);
    cube.position.set(0, 0.5, 0);
    scene.add(cube);

    // Crear un cubo con materiales transparentes
    const geometry2 = new THREE.BoxGeometry(9.4, 2, 7.4);
    const materials2 = [
      new THREE.MeshLambertMaterial({
        color: 0x919191,
        opacity: 0.5,
        transparent: true,
      }),
      new THREE.MeshLambertMaterial({
        color: 0x222222,
        opacity: 0.5,
        transparent: true,
      }),
      new THREE.MeshLambertMaterial({
        color: 0xf2f2f2,
        opacity: 0.5,
        transparent: true,
      }),
      new THREE.MeshLambertMaterial({
        color: 0x222222,
        opacity: 0.5,
        transparent: true,
      }),
      new THREE.MeshLambertMaterial({
        color: 0x333333,
        opacity: 0.5,
        transparent: true,
      }),
      new THREE.MeshLambertMaterial({
        color: 0x222222,
        opacity: 0.5,
        transparent: true,
      }),
    ];
    const cube2 = new THREE.Mesh(geometry2, materials2);
    cube2.position.set(0, 15.25, 0);
    scene.add(cube2);

    const cube7 = new THREE.Mesh(geometry2, materials2);
    cube7.position.set(0, 15.25 * -1 + 1, 0);
    scene.add(cube7);

    // Crear un cubo con materiales transparentes
    const geometry3 = new THREE.BoxGeometry(7.74, 2, 2.6);
    const materials3 = [
      new THREE.MeshLambertMaterial({
        color: 0x919191,
        opacity: 0.5,
        transparent: true,
      }),
      new THREE.MeshLambertMaterial({
        color: 0x222222,
        opacity: 0.5,
        transparent: true,
      }),
      new THREE.MeshLambertMaterial({
        color: 0xf2f2f2,
        opacity: 0,
        transparent: true,
      }),
      new THREE.MeshLambertMaterial({
        color: 0x222222,
        opacity: 0.5,
        transparent: true,
      }),
      new THREE.MeshLambertMaterial({
        color: 0x333333,
        opacity: 0.5,
        transparent: true,
      }),
      new THREE.MeshLambertMaterial({
        color: 0x222222,
        opacity: 0.5,
        transparent: true,
      }),
    ];
    const cube3 = new THREE.Mesh(geometry3, materials3);
    cube3.position.set(5.37175, 13.25, 0);
    scene.add(cube3);

    const cube34 = new THREE.Mesh(geometry3, materials3);
    cube34.position.set(5.37175 * -1, 13.25, 0);
    scene.add(cube34);

    const geometry32 = new THREE.BoxGeometry(4.815, 2, 2.6);
    const materials32 = [
      new THREE.MeshLambertMaterial({
        color: 0x919191,
        opacity: 0.5,
        transparent: true,
      }),
      new THREE.MeshLambertMaterial({
        color: 0x222222,
        opacity: 0.5,
        transparent: true,
      }),
      new THREE.MeshLambertMaterial({
        color: 0xf2f2f2,
        opacity: 0.5,
        transparent: true,
      }),
      new THREE.MeshLambertMaterial({
        color: 0x222222,
        opacity: 0,
        transparent: true,
      }),
      new THREE.MeshLambertMaterial({
        color: 0x333333,
        opacity: 0.5,
        transparent: true,
      }),
      new THREE.MeshLambertMaterial({
        color: 0x222222,
        opacity: 0.5,
        transparent: true,
      }),
    ];
    const cube32 = new THREE.Mesh(geometry32, materials32);
    cube32.position.set(6.8348, 15.25, 0);
    scene.add(cube32);

    const cube33 = new THREE.Mesh(geometry32, materials32);
    cube33.position.set(6.8348 * -1, 15.25, 0);
    scene.add(cube33);

    // Crear y agregar Varillas con MeshLine
    const createMeshLineVarillas = (
      points,
      color,
      lineWidth,
      xPosition = 0,
      yPosition = 0,
      zOffset = 0
    ) => {
      const curve = new THREE.CatmullRomCurve3(points, false);
      const curvePoints = curve.getPoints(100);

      // Crear geometría de la línea
      const lineGeometry = new THREE.BufferGeometry().setFromPoints(
        curvePoints
      );

      // Crear MeshLine y material
      const meshLine = new MeshLine();
      meshLine.setGeometry(lineGeometry);

      const meshLineMaterial = new MeshLineMaterial({
        color,
        lineWidth: 0.2,
        sizeAttenuation: 1,
      });

      // Crear malla de la línea y agregarla a la escena
      const lineMesh = new THREE.Mesh(meshLine, meshLineMaterial);
      lineMesh.position.x += xPosition;
      lineMesh.position.y = yPosition;
      lineMesh.position.z += zOffset;
      scene.add(lineMesh);
    };

    // Líneas azules 1
    const VarillasRojas = [
      new THREE.Vector3(1, 22, 1.5),
      new THREE.Vector3(1, -7, 1.5),
      new THREE.Vector3(1, -8, 1.1),
      new THREE.Vector3(1, -22, 1.1),
    ];

    for (let i = 0; i > -3; i--) {
      createMeshLineVarillas(VarillasRojas, 0xff0000, 0, i, 0, -0.1);
    }

    // Líneas azules 1
    const VarillasRojas2 = [
      new THREE.Vector3(1, 22, 1.5),
      new THREE.Vector3(1, -22, 1.5),
    ];

    for (let i = 0; i > -2; i--) {
      createMeshLineVarillas(VarillasRojas2, 0xff0000, 0, i * 2, 0, -1.6);
    }

    // Crear y agregar Varillas con MeshLine
    const createMeshLineVarillas2 = (
      points,
      color,
      lineWidth,
      xPosition = 0,
      yPosition = 0,
      zOffset = 0
    ) => {
      const curve = new THREE.CatmullRomCurve3(points, false);
      const curvePoints = curve.getPoints(100);

      // Crear geometría de la línea
      const lineGeometry = new THREE.BufferGeometry().setFromPoints(
        curvePoints
      );

      // Crear MeshLine y material
      const meshLine = new MeshLine();
      meshLine.setGeometry(lineGeometry);

      const meshLineMaterial = new MeshLineMaterial({
        color,
        lineWidth: 0.2,
        sizeAttenuation: 1,
      });

      // Crear malla de la línea y agregarla a la escena
      const lineMesh = new THREE.Mesh(meshLine, meshLineMaterial);
      lineMesh.position.x += xPosition;
      lineMesh.position.y = yPosition;
      lineMesh.position.z += zOffset;
      scene.add(lineMesh);
    };

    // Líneas azules 1
    const VarillasRojas223 = [
      new THREE.Vector3(1, 22, 1.5),
      new THREE.Vector3(1, -7, 1.5),
      new THREE.Vector3(1, -8, 1.8),
      new THREE.Vector3(1, -22, 1.8),
    ];

    for (let i = 0; i > -3; i--) {
      createMeshLineVarillas2(VarillasRojas223, 0xff0000, 0, i, 0, -3.1);
    }

    // Crear y agregar Varillas Amarillas con MeshLine
    const createMeshLineVarillas3 = (
      points,
      color,
      lineWidth,
      xPosition = 0,
      yPosition = 0,
      zOffset = 0
    ) => {
      const curve = new THREE.CatmullRomCurve3(points, false);
      const curvePoints = curve.getPoints(100);

      // Crear geometría de la línea
      const lineGeometry = new THREE.BufferGeometry().setFromPoints(
        curvePoints
      );

      // Crear MeshLine y material
      const meshLine = new MeshLine();
      meshLine.setGeometry(lineGeometry);

      const meshLineMaterial = new MeshLineMaterial({
        color,
        lineWidth: 0.2,
        sizeAttenuation: 1,
      });

      // Crear malla de la línea y agregarla a la escena
      const lineMesh = new THREE.Mesh(meshLine, meshLineMaterial);
      lineMesh.position.x += xPosition;
      lineMesh.position.y = yPosition;
      lineMesh.position.z += zOffset;
      scene.add(lineMesh);
    };

    // Líneas azules 1
    const VarillasAmarillas = [
      new THREE.Vector3(1, -8, -1.65),
      new THREE.Vector3(1, -22, -1.65),
    ];

    for (let i = 0; i > -3; i--) {
      for (let j = 0; j > -2; j--) {
        createMeshLineVarillas3(VarillasAmarillas, 0xffff00, 0, i, 0, -j * 3);
      }
    }

    // Líneas azules 1
    const VarillasAmarillas2 = [
      new THREE.Vector3(1, 22, -1.3),
      new THREE.Vector3(1, 18, -1.3),
    ];

    for (let i = 0; i > -3; i--) {
      for (let j = 0; j > -2; j--) {
        createMeshLineVarillas3(
          VarillasAmarillas2,
          0xffff00,
          0,
          i,
          0,
          -j * 2.4
        );
      }
    }

    // Crear y agregar líneas con MeshLine
    const createMeshLine = (
      points,
      color,
      lineWidth,
      yPosition = 0,
      zOffset = 0
    ) => {
      const curve = new THREE.CatmullRomCurve3(points, false);
      const curvePoints = curve.getPoints(100);

      // Crear geometría de la línea
      const lineGeometry = new THREE.BufferGeometry().setFromPoints(
        curvePoints
      );

      // Crear MeshLine y material
      const meshLine = new MeshLine();
      meshLine.setGeometry(lineGeometry);

      const meshLineMaterial = new MeshLineMaterial({
        color,
        lineWidth: 0.15,
        sizeAttenuation: 1,
      });

      // Crear malla de la línea y agregarla a la escena
      const lineMesh = new THREE.Mesh(meshLine, meshLineMaterial);
      lineMesh.position.y = yPosition;
      lineMesh.position.z += zOffset;
      scene.add(lineMesh);
    };

    // Líneas azules 1
    const rectPointsa2 = [
      new THREE.Vector3(-9, 0.5, 0.4),
      new THREE.Vector3(9, 0.5, 0.2),
    ];
    Array.from({ length: 3 }, (_, i) =>
      createMeshLine(rectPointsa2, 0x0000ff, 0.1, 12.5, -i + 0.5)
    );

    // Crear y agregar Varillas con MeshLine
    const createMeshLineEstribos = (
      points,
      color,
      lineWidth,
      xPosition = 0,
      yPosition = 0,
      zOffset = 0
    ) => {
      const curve = new THREE.CatmullRomCurve3(points, false);
      const curvePoints = curve.getPoints(100);

      // Crear geometría de la línea
      const lineGeometry = new THREE.BufferGeometry().setFromPoints(
        curvePoints
      );

      // Crear MeshLine y material
      const meshLine = new MeshLine();
      meshLine.setGeometry(lineGeometry);

      const meshLineMaterial = new MeshLineMaterial({
        color,
        lineWidth: 0.1,
        sizeAttenuation: 0.5,
      });

      // Crear malla de la línea y agregarla a la escena
      const lineMesh = new THREE.Mesh(meshLine, meshLineMaterial);
      lineMesh.position.x += xPosition;
      lineMesh.position.y = yPosition;
      lineMesh.position.z += zOffset;
      scene.add(lineMesh);
    };

    // Líneas azules 2
    const rectPointsEstribos = [
      new THREE.Vector3(0.7, 0.5, -0.7),
      new THREE.Vector3(1.2, 0.5, -1.3),
      new THREE.Vector3(1.2, 0.5, -1.5),
      new THREE.Vector3(1.2, 0.5, -1.7),
      new THREE.Vector3(1, 0.5, -1.7),
      new THREE.Vector3(0.8, 0.5, -1.7),
      new THREE.Vector3(0.6, 0.5, -1.7),
      new THREE.Vector3(0.4, 0.5, -1.7),
      new THREE.Vector3(0.2, 0.5, -1.7),
      new THREE.Vector3(0, 0.5, -1.7),
      new THREE.Vector3(-0.2, 0.5, -1.7),
      new THREE.Vector3(-0.4, 0.5, -1.7),
      new THREE.Vector3(-0.6, 0.5, -1.7),
      new THREE.Vector3(-0.8, 0.5, -1.7),
      new THREE.Vector3(-1, 0.5, -1.7),
      new THREE.Vector3(-1.2, 0.5, -1.7),

      new THREE.Vector3(-1.2, 0.55, -1.5),
      new THREE.Vector3(-1.2, 0.55, -1.4),
      new THREE.Vector3(-1.2, 0.55, -1.2),
      new THREE.Vector3(-1.2, 0.55, -1),
      new THREE.Vector3(-1.2, 0.55, -0.8),
      new THREE.Vector3(-1.2, 0.55, -0.6),
      new THREE.Vector3(-1.2, 0.55, -0.4),
      new THREE.Vector3(-1.2, 0.55, -0.2),
      new THREE.Vector3(-1.2, 0.55, 0),
      new THREE.Vector3(-1.2, 0.55, 0.2),
      new THREE.Vector3(-1.2, 0.55, 0.4),
      new THREE.Vector3(-1.2, 0.55, 0.6),
      new THREE.Vector3(-1.2, 0.55, 0.8),
      new THREE.Vector3(-1.2, 0.55, 1),
      new THREE.Vector3(-1.2, 0.55, 1.2),
      new THREE.Vector3(-1.2, 0.55, 1.4),
      new THREE.Vector3(-1.2, 0.55, 1.5),
      new THREE.Vector3(-1.2, 0.55, 1.7),

      new THREE.Vector3(-1, 0.6, 1.7),
      new THREE.Vector3(-0.8, 0.6, 1.7),
      new THREE.Vector3(-0.6, 0.6, 1.7),
      new THREE.Vector3(-0.4, 0.6, 1.7),
      new THREE.Vector3(-0.2, 0.6, 1.7),
      new THREE.Vector3(-0, 0.6, 1.7),
      new THREE.Vector3(0.2, 0.6, 1.7),
      new THREE.Vector3(0.4, 0.6, 1.7),
      new THREE.Vector3(0.6, 0.6, 1.7),
      new THREE.Vector3(0.8, 0.6, 1.7),
      new THREE.Vector3(1, 0.6, 1.7),
      new THREE.Vector3(1.2, 0.6, 1.7),

      new THREE.Vector3(1.2, 0.65, 1.5),
      new THREE.Vector3(1.2, 0.65, 1.4),
      new THREE.Vector3(1.2, 0.65, 1.2),
      new THREE.Vector3(1.2, 0.65, 1),
      new THREE.Vector3(1.2, 0.65, 0.8),
      new THREE.Vector3(1.2, 0.65, 0.6),
      new THREE.Vector3(1.2, 0.65, 0.4),
      new THREE.Vector3(1.2, 0.65, 0.2),
      new THREE.Vector3(1.2, 0.65, 0),
      new THREE.Vector3(1.2, 0.65, -0.2),
      new THREE.Vector3(1.2, 0.65, -0.4),
      new THREE.Vector3(1.2, 0.65, -0.6),
      new THREE.Vector3(1.2, 0.65, -0.8),
      new THREE.Vector3(1.2, 0.65, -1),
      new THREE.Vector3(1.2, 0.65, -1.2),
      new THREE.Vector3(1.2, 0.65, -1.4),
      new THREE.Vector3(1.2, 0.65, -1.5),
      new THREE.Vector3(1.2, 0.65, -1.7),
      new THREE.Vector3(1, 0.65, -1.7),
      new THREE.Vector3(0.8, 0.65, -1.7),
      new THREE.Vector3(0.2, 0.65, -1.2),
    ];
    Array.from({ length: 5 }, (_, i) =>
      createMeshLineEstribos(
        rectPointsEstribos,
        0x0000ff,
        0,
        0,
        21 - i * 1.1,
        0
      )
    );

    // Líneas azules 2
    const rectPointsEstribos2 = [
      new THREE.Vector3(-0.2, 0.65, 1.2),
      new THREE.Vector3(-0.8, 0.65, 1.7),
      new THREE.Vector3(-1.2, 0.65, 1.7),
      new THREE.Vector3(-1, 0.6, 1.7),
      new THREE.Vector3(-0.8, 0.6, 1.7),
      new THREE.Vector3(-0.6, 0.6, 1.7),
      new THREE.Vector3(-0.4, 0.6, 1.7),
      new THREE.Vector3(-0.2, 0.6, 1.7),
      new THREE.Vector3(-0, 0.6, 1.7),
      new THREE.Vector3(0.2, 0.6, 1.7),
      new THREE.Vector3(0.4, 0.6, 1.7),
      new THREE.Vector3(0.6, 0.6, 1.7),
      new THREE.Vector3(0.8, 0.6, 1.7),
      new THREE.Vector3(1, 0.6, 1.7),
      new THREE.Vector3(1.2, 0.6, 1.7),

      new THREE.Vector3(1.2, 0.65, 1.5),
      new THREE.Vector3(1.2, 0.65, 1.4),
      new THREE.Vector3(1.2, 0.65, 1.2),
      new THREE.Vector3(1.2, 0.65, 1),
      new THREE.Vector3(1.2, 0.65, 0.8),
      new THREE.Vector3(1.2, 0.65, 0.6),
      new THREE.Vector3(1.2, 0.65, 0.4),
      new THREE.Vector3(1.2, 0.65, 0.2),
      new THREE.Vector3(1.2, 0.65, 0),
      new THREE.Vector3(1.2, 0.65, -0.2),
      new THREE.Vector3(1.2, 0.65, -0.4),
      new THREE.Vector3(1.2, 0.65, -0.6),
      new THREE.Vector3(1.2, 0.65, -0.8),
      new THREE.Vector3(1.2, 0.65, -1),
      new THREE.Vector3(1.2, 0.65, -1.2),
      new THREE.Vector3(1.2, 0.65, -1.4),
      new THREE.Vector3(1.2, 0.65, -1.5),
      new THREE.Vector3(1.2, 0.65, -1.7),

      new THREE.Vector3(1.2, 0.5, -1.7),
      new THREE.Vector3(1, 0.5, -1.7),
      new THREE.Vector3(0.8, 0.5, -1.7),
      new THREE.Vector3(0.6, 0.5, -1.7),
      new THREE.Vector3(0.4, 0.5, -1.7),
      new THREE.Vector3(0.2, 0.5, -1.7),
      new THREE.Vector3(0, 0.5, -1.7),
      new THREE.Vector3(-0.2, 0.5, -1.7),
      new THREE.Vector3(-0.4, 0.5, -1.7),
      new THREE.Vector3(-0.6, 0.5, -1.7),
      new THREE.Vector3(-0.8, 0.5, -1.7),
      new THREE.Vector3(-1, 0.5, -1.7),
      new THREE.Vector3(-1.2, 0.5, -1.7),

      new THREE.Vector3(-1.2, 0.55, -1.5),
      new THREE.Vector3(-1.2, 0.55, -1.4),
      new THREE.Vector3(-1.2, 0.55, -1.2),
      new THREE.Vector3(-1.2, 0.55, -1),
      new THREE.Vector3(-1.2, 0.55, -0.8),
      new THREE.Vector3(-1.2, 0.55, -0.6),
      new THREE.Vector3(-1.2, 0.55, -0.4),
      new THREE.Vector3(-1.2, 0.55, -0.2),
      new THREE.Vector3(-1.2, 0.55, 0),
      new THREE.Vector3(-1.2, 0.55, 0.2),
      new THREE.Vector3(-1.2, 0.55, 0.4),
      new THREE.Vector3(-1.2, 0.55, 0.6),
      new THREE.Vector3(-1.2, 0.55, 0.8),
      new THREE.Vector3(-1.2, 0.55, 1),
      new THREE.Vector3(-1.2, 0.55, 1.2),
      new THREE.Vector3(-1.2, 0.55, 1.4),
      new THREE.Vector3(-1.2, 0.55, 1.5),
      new THREE.Vector3(-1.2, 0.65, 1.7),
      new THREE.Vector3(-1.2, 0.5, 1.7),
      new THREE.Vector3(-1.2, 0.5, 1.5),
      new THREE.Vector3(-1.2, 0.5, 1.3),
      new THREE.Vector3(-0.7, 0.5, 0.7),
    ];
    Array.from({ length: 4 }, (_, i) =>
      createMeshLineEstribos(
        rectPointsEstribos2,
        0x0000ff,
        0,
        0,
        21 - 0.5 - i * 1.1,
        0
      )
    );

    Array.from({ length: 4 }, (_, i) =>
      createMeshLineEstribos(rectPointsEstribos, 0x0000ff, 0, 0, 10.5 - i, 0)
    );

    Array.from({ length: 3 }, (_, i) =>
      createMeshLineEstribos(
        rectPointsEstribos2,
        0x0000ff,
        0,
        0,
        10.5 - 0.5 - i,
        0
      )
    );

    Array.from({ length: 4 }, (_, i) =>
      createMeshLineEstribos(rectPointsEstribos, 0x0000ff, 0, 0, 7 - i * 4, 0)
    );

    Array.from({ length: 4 }, (_, i) =>
      createMeshLineEstribos(rectPointsEstribos2, 0x0000ff, 0, 0, 5 - i * 4, 0)
    );

    Array.from({ length: 5 }, (_, i) =>
      createMeshLineEstribos(
        rectPointsEstribos,
        0x0000ff,
        0,
        0,
        -7.5 - i * 1.1,
        0
      )
    );

    Array.from({ length: 5 }, (_, i) =>
      createMeshLineEstribos(
        rectPointsEstribos2,
        0x0000ff,
        0,
        0,
        -7.5 - 0.5 - i * 1.1,
        0
      )
    );

    Array.from({ length: 5 }, (_, i) =>
      createMeshLineEstribos(
        rectPointsEstribos,
        0x0000ff,
        0,
        0,
        -17 - i * 1.1,
        0
      )
    );

    Array.from({ length: 5 }, (_, i) =>
      createMeshLineEstribos(
        rectPointsEstribos2,
        0x0000ff,
        0,
        0,
        -17 - 0.5 - i * 1.1,
        0
      )
    );

    const rectPointsVERDE3 = [
      new THREE.Vector3(1, 0.8, -0.8),
      new THREE.Vector3(1.2, 0.8, -0.1),
      new THREE.Vector3(1.03, 0.8, 0.05),
      new THREE.Vector3(0.53, 0.8, 0.05),
      new THREE.Vector3(-0.53, 0.8, 0.05),
      new THREE.Vector3(-1.03, 0.8, 0.05),
      new THREE.Vector3(-1.2, 0.8, -0.1),
      new THREE.Vector3(-1, 0.8, -0.2),
      new THREE.Vector3(-0.6, 0.8, -0.4),
    ];

    Array.from({ length: 5 }, (_, i) =>
      createMeshLineEstribos(rectPointsVERDE3, 0x008631, 0, 0, 21 - i * 1.1, 0)
    );
    Array.from({ length: 4 }, (_, i) =>
      createMeshLineEstribos(
        rectPointsVERDE3,
        0x008631,
        0,
        0,
        21 - 0.5 - i * 1.1,
        0
      )
    );

    Array.from({ length: 4 }, (_, i) =>
      createMeshLineEstribos(rectPointsVERDE3, 0x008631, 0, 0, 10.5 - i, 0)
    );

    Array.from({ length: 3 }, (_, i) =>
      createMeshLineEstribos(
        rectPointsVERDE3,
        0x008631,
        0,
        0,
        10.5 - 0.5 - i,
        0
      )
    );

    Array.from({ length: 4 }, (_, i) =>
      createMeshLineEstribos(rectPointsVERDE3, 0x008631, 0, 0, 7 - i * 4, 0)
    );

    Array.from({ length: 4 }, (_, i) =>
      createMeshLineEstribos(rectPointsVERDE3, 0x008631, 0, 0, 5 - i * 4, 0)
    );

    Array.from({ length: 5 }, (_, i) =>
      createMeshLineEstribos(
        rectPointsVERDE3,
        0x008631,
        0,
        0,
        -7.5 - i * 1.1,
        0
      )
    );

    Array.from({ length: 5 }, (_, i) =>
      createMeshLineEstribos(
        rectPointsVERDE3,
        0x008631,
        0,
        0,
        -7.5 - 0.5 - i * 1.1,
        0
      )
    );

    Array.from({ length: 5 }, (_, i) =>
      createMeshLineEstribos(rectPointsVERDE3, 0x008631, 0, 0, -17 - i * 1.1, 0)
    );

    Array.from({ length: 5 }, (_, i) =>
      createMeshLineEstribos(
        rectPointsVERDE3,
        0x008631,
        0,
        0,
        -17 - 0.5 - i * 1.1,
        0
      )
    );

    // Función de renderizado
    const animate = () => {
      requestAnimationFrame(animate);
      controls.update();
      renderer.render(scene, camera);
    };
    animate();

    return () => {
      if (mountRef && mountRef.current) {
        mountRef.current.removeChild(element);
      }
      renderer.dispose();
    };
  }, []);

  return (
    <>
      <Header />
      <div
        ref={mountRef}
        style={{
          width: "100vw",
          height: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          overflow: "hidden",
        }}
      />
    </>
  );
};

export default ThreeScene;
