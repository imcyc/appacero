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
      30,
      window.innerWidth / window.innerHeight,
      0.1,
      10000
    );
    camera.position.set(20.5, 20.5, 20.5);
    camera.lookAt(2.5, -20.5, 2.5);

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
    const geometry1 = new THREE.BoxGeometry(9, 7, 4);
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
    const cube11 = new THREE.Mesh(geometry1, materials);
    cube11.position.set(0, 0, 0);
    scene.add(cube11);

    const geometry2 = new THREE.BoxGeometry(3.5, 5, 7);
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
        opacity: 0,
        transparent: true,
      }),
      new THREE.MeshLambertMaterial({
        color: 0x222222,
        opacity: 0.5,
        transparent: true,
      }),
    ];

    const cube = new THREE.Mesh(geometry2, materials2);
    cube.position.set(0, 1, -5.5);
    scene.add(cube);

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
        lineWidth: 0.1,
        sizeAttenuation: 1,
      });

      // Crear malla de la línea y agregarla a la escena
      const lineMesh = new THREE.Mesh(meshLine, meshLineMaterial);
      lineMesh.position.x += xPosition;
      lineMesh.position.y += yPosition;
      lineMesh.position.z += zOffset;
      scene.add(lineMesh);
    };

    // Varillas Rojas

    const VarillasRojas = [
      new THREE.Vector3(4.5, -2.75, 1.5),
      new THREE.Vector3(-4.5, -2.75, 1.5),
    ];

    for (let i = 0; i < 2; i++) {
      createMeshLineVarillas(
        VarillasRojas,
        0xff0000,
        0,
        0,
        5.25,
        -0.4 - i * 2.35
      );
    }

    for (let i = 0; i < 4; i++) {
      createMeshLineVarillas(VarillasRojas, 0xff0000, 0, 0, 0, -0.4 - i * 0.75);
    }

    // Varillas Azul

    const VarillasAzules = [
      new THREE.Vector3(4.5, -1.75, 5),
      new THREE.Vector3(4.5, -2, 5),
      new THREE.Vector3(4.5, -2.25, 5),
      new THREE.Vector3(4.5, -2.5, 5),
      new THREE.Vector3(4.5, -2.75, 5),
      new THREE.Vector3(4.5, -2.75, 4.5),
      new THREE.Vector3(4.5, -2.75, 4),
      new THREE.Vector3(4.5, -2.75, 3.5),
      new THREE.Vector3(4.5, -2.75, 3),
      new THREE.Vector3(4.5, -2.75, 2.5),
      new THREE.Vector3(4.5, -2.75, -5),
      new THREE.Vector3(4.5, -2.75, -5.3),
    ];

    for (let i = 0; i < 3; i++) {
      createMeshLineVarillas(
        VarillasAzules,
        0x0000ff,
        0,
        -i * 1 - 3.45,
        2,
        -3.7
      );
    }

    // Varillas Azul2

    const VarillasAzules2 = [
      new THREE.Vector3(4.5, -3.75, 5),
      new THREE.Vector3(4.5, -3.5, 5),
      new THREE.Vector3(4.5, -3.25, 5),
      new THREE.Vector3(4.5, -3, 5),
      new THREE.Vector3(4.5, -2.75, 5),
      new THREE.Vector3(4.5, -2.75, 4.5),
      new THREE.Vector3(4.5, -2.75, 4),
      new THREE.Vector3(4.5, -2.75, 3.5),
      new THREE.Vector3(4.5, -2.75, 3),
      new THREE.Vector3(4.5, -2.75, 2.5),
      new THREE.Vector3(4.5, -2.75, -5),
      new THREE.Vector3(4.5, -2.75, -5.3),
    ];

    for (let i = 0; i < 3; i++) {
      createMeshLineVarillas(
        VarillasAzules2,
        0x0000ff,
        0,
        -i * 1 - 3.45,
        5.5,
        -3.7
      );
    }

    // Varillas Verdes

    const VarillasVerdes = [
      new THREE.Vector3(4.5, -3.55, 4.5),
      new THREE.Vector3(4.5, -2.9, 5.2),
      new THREE.Vector3(4.5, -2.75, 5.2),
      new THREE.Vector3(4.5, -2.75, 5),
      new THREE.Vector3(4.5, -2.75, 4.5),
      new THREE.Vector3(4.5, -2.75, 4),
      new THREE.Vector3(4.5, -2.75, 3.5),
      new THREE.Vector3(4.5, -2.75, 3),
      new THREE.Vector3(4.5, -2.75, 2.7),

      new THREE.Vector3(4.5, -3.25, 2.7),
      new THREE.Vector3(4.5, -3.75, 2.7),
      new THREE.Vector3(4.5, -4.25, 2.7),
      new THREE.Vector3(4.5, -4.75, 2.7),
      new THREE.Vector3(4.5, -5.25, 2.7),
      new THREE.Vector3(4.5, -5.75, 2.7),
      new THREE.Vector3(4.5, -6.25, 2.7),
      new THREE.Vector3(4.5, -6.75, 2.7),
      new THREE.Vector3(4.5, -7.25, 2.7),
      new THREE.Vector3(4.5, -7.75, 2.7),
      new THREE.Vector3(4.5, -8, 2.7),

      new THREE.Vector3(4.5, -8.2, 2.7),
      new THREE.Vector3(4.5, -8.2, 3),
      new THREE.Vector3(4.5, -8.2, 3.5),
      new THREE.Vector3(4.5, -8.2, 4),
      new THREE.Vector3(4.5, -8.2, 4.5),
      new THREE.Vector3(4.5, -8.2, 5),
      new THREE.Vector3(4.5, -8.2, 5.2),

      new THREE.Vector3(4.5, -8, 5.2),
      new THREE.Vector3(4.5, -7.5, 5.2),
      new THREE.Vector3(4.5, -7, 5.2),
      new THREE.Vector3(4.49, -6.5, 5.2),
      new THREE.Vector3(4.48, -6, 5.2),
      new THREE.Vector3(4.47, -6.5, 5.2),
      new THREE.Vector3(4.46, -6, 5.2),
      new THREE.Vector3(4.45, -5.5, 5.2),
      new THREE.Vector3(4.44, -5, 5.2),
      new THREE.Vector3(4.43, -4.5, 5.2),
      new THREE.Vector3(4.42, -4, 5.2),
      new THREE.Vector3(4.41, -3.5, 5.2),
      new THREE.Vector3(4.4, -3, 5.2),
      new THREE.Vector3(4.4, -2.8, 5.2),
      new THREE.Vector3(4.4, -2.8, 5),
      new THREE.Vector3(4.4, -3.25, 4.2),
    ];

    for (let i = 0; i < 6; i++) {
      createMeshLineVarillas(
        VarillasVerdes,
        0x00ff00,
        0,
        -i * 1.5 - 0.7,
        5.35,
        -4
      );
    }

    // Varillas Morados

    const VarillasMorados = [
      new THREE.Vector3(2.5, -3.6, 4.5),
      new THREE.Vector3(2, -3, 4.5),
      new THREE.Vector3(2, -2.85, 4.5),
      new THREE.Vector3(2.5, -2.85, 4.5),
      new THREE.Vector3(3, -2.85, 4.5),
      new THREE.Vector3(3.5, -2.85, 4.5),
      new THREE.Vector3(4, -2.85, 4.5),
      new THREE.Vector3(4.4, -2.85, 4.5),

      new THREE.Vector3(4.4, -3.25, 4.5),
      new THREE.Vector3(4.4, -3.75, 4.5),
      new THREE.Vector3(4.4, -4.25, 4.5),
      new THREE.Vector3(4.4, -4.75, 4.5),
      new THREE.Vector3(4.4, -5.25, 4.5),
      new THREE.Vector3(4.4, -5.75, 4.5),
      new THREE.Vector3(4.4, -6.25, 4.5),
      new THREE.Vector3(4.4, -6.6, 4.5),

      new THREE.Vector3(4, -6.6, 4.5),
      new THREE.Vector3(3.5, -6.6, 4.5),
      new THREE.Vector3(3, -6.6, 4.5),
      new THREE.Vector3(2.5, -6.6, 4.5),
      new THREE.Vector3(2, -6.6, 4.49),

      new THREE.Vector3(2, -6.6, 4.48),
      new THREE.Vector3(2, -6.25, 4.47),
      new THREE.Vector3(2, -5.75, 4.46),
      new THREE.Vector3(2, -5.25, 4.45),
      new THREE.Vector3(2, -4.75, 4.44),
      new THREE.Vector3(2, -4.25, 4.43),
      new THREE.Vector3(2, -3.75, 4.42),
      new THREE.Vector3(2, -3.25, 4.41),
      new THREE.Vector3(2, -2.85, 4.41),
      new THREE.Vector3(2.3, -2.85, 4.41),
      new THREE.Vector3(2.8, -3.25, 4.41),
    ];

    for (let i = 0; i < 3; i++) {
      createMeshLineVarillas(
        VarillasMorados,
        0xbe2ed6,
        0,
        -3.2,
        5.7,
        -7.5 - i * 2.5
      );
    }

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
