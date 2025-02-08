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
    camera.position.set(5.5, 5.5, 5.5);
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

    //Cubos transparentes
    const geometry = new THREE.BoxGeometry(3.5, 2.5, 2.5); // Geometría de un cubo
    // Materiales para las 6 caras del cubo (con diferentes colores y transparencias)
    const materials = [
      new THREE.MeshLambertMaterial({
        color: 0x919191,
        opacity: 0.5,
        transparent: true,
      }), // Cara derecha
      new THREE.MeshLambertMaterial({
        color: 0x222222,
        opacity: 0.5,
        transparent: true,
      }), // Cara izquierda
      new THREE.MeshLambertMaterial({
        color: 0xf2f2f2,
        opacity: 0.5,
        transparent: true,
      }), // Cara superior
      new THREE.MeshLambertMaterial({
        color: 0x222222,
        opacity: 0.5,
        transparent: true,
      }), // Cara inferior
      new THREE.MeshLambertMaterial({
        color: 0x333333,
        opacity: 0.5,
        transparent: true,
      }), // Cara frontal
      new THREE.MeshLambertMaterial({
        color: 0x222222,
        opacity: 0.5,
        transparent: true,
      }), // Cara trasera
    ];
    const cube = new THREE.Mesh(geometry, materials); // Crea un cubo con la geometría y los materiales

    cube.position.set(0, 0.5, 0.5);
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

    //Varillas Rojas

    const VarillasRojas = [
      new THREE.Vector3(4.5, -1, 0),
      new THREE.Vector3(4.5, 2, 0),
    ];
    for (let j = 0; j < 3; j++) {
      for (let i = 0; i < 4; i++) {
        if (i === 1 && j === 1) {
          continue;
        } else if (i === 2 && j === 1) {
          continue;
        } else {
          createMeshLineVarillas(
            VarillasRojas,
            0xff0000,
            0,
            -i * 1 - 3,
            0.25,
            j * 1 - 0.5
          );
        }
      }
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
        lineWidth: 0.05,
        sizeAttenuation: 1,
      });

      // Crear malla de la línea y agregarla a la escena
      const lineMesh = new THREE.Mesh(meshLine, meshLineMaterial);
      lineMesh.position.x += xPosition;
      lineMesh.position.y += yPosition;
      lineMesh.position.z += zOffset;
      scene.add(lineMesh);
    };

    // Blue Lines

    const VarillasAzules = [
      new THREE.Vector3(0, 0.5, -0.3),
      new THREE.Vector3(0.5, 0.5, -0.6),
      new THREE.Vector3(0.6, 0.5, -0.6),
      new THREE.Vector3(0.6, 0.5, -0.5),
      new THREE.Vector3(0.6, 0.5, 0),
      new THREE.Vector3(0.6, 0.5, 0.5),
      new THREE.Vector3(0.6, 0.5, 1),
      new THREE.Vector3(0.6, 0.5, 1.5),
      new THREE.Vector3(0.6, 0.5, 1.6),

      new THREE.Vector3(0, 0.5, 1.6),
      new THREE.Vector3(-0.5, 0.5, 1.6),
      new THREE.Vector3(-1, 0.5, 1.6),
      new THREE.Vector3(-1.5, 0.5, 1.6),
      new THREE.Vector3(-1.6, 0.5, 1.6),

      new THREE.Vector3(-1.6, 0.5, 0.5),
      new THREE.Vector3(-1.6, 0.5, 0),
      new THREE.Vector3(-1.6, 0.5, -0.5),
      new THREE.Vector3(-1.6, 0.5, -0.6),

      new THREE.Vector3(-1, 0.5, -0.6),
      new THREE.Vector3(-0.5, 0.5, -0.6),
      new THREE.Vector3(0, 0.5, -0.6),
      new THREE.Vector3(0.6, 0.5, -0.6),
      new THREE.Vector3(0.6, 0.5, -0.4),
      new THREE.Vector3(0.2, 0.5, 0),
    ];
    for (let i = 0; i < 2; i++) {
      createMeshLineVarillas2(VarillasAzules, 0x0000ff, 0, 0, i * 2 - 1, 0);
    }
    for (let i = 0; i < 2; i++) {
      createMeshLineVarillas2(VarillasAzules, 0xffdb58, 0, 1, i * 2 - 0.9, 0);
    }

    // Blue Lines

    const VarillasAzules2 = [
      new THREE.Vector3(-1, 0.5, 1.3),
      new THREE.Vector3(-1.5, 0.5, 1.6),
      new THREE.Vector3(-1.6, 0.5, 1.6),
      new THREE.Vector3(-1.6, 0.5, 1),
      new THREE.Vector3(-1.6, 0.5, 0.5),
      new THREE.Vector3(-1.6, 0.5, 0),
      new THREE.Vector3(-1.6, 0.5, -0.5),
      new THREE.Vector3(-1.6, 0.5, -0.6),

      new THREE.Vector3(-1, 0.5, -0.6),
      new THREE.Vector3(-0.5, 0.5, -0.6),
      new THREE.Vector3(0, 0.5, -0.6),
      new THREE.Vector3(0.6, 0.5, -0.6),

      new THREE.Vector3(0.6, 0.5, -0.5),
      new THREE.Vector3(0.6, 0.5, 0),
      new THREE.Vector3(0.6, 0.5, 0.5),
      new THREE.Vector3(0.6, 0.5, 1),
      new THREE.Vector3(0.6, 0.5, 1.5),
      new THREE.Vector3(0.6, 0.5, 1.6),

      new THREE.Vector3(0, 0.5, 1.6),
      new THREE.Vector3(-0.5, 0.5, 1.6),
      new THREE.Vector3(-1, 0.5, 1.6),
      new THREE.Vector3(-1.5, 0.5, 1.6),
      new THREE.Vector3(-1.6, 0.5, 1.6),
      new THREE.Vector3(-1.6, 0.5, 1.4),
      new THREE.Vector3(-1.2, 0.5, 1),
    ];
    for (let i = 0; i < 1; i++) {
      createMeshLineVarillas2(VarillasAzules2, 0x0000ff, 0, 0, i * 1, 0);
    }
    for (let i = 0; i < 1; i++) {
      createMeshLineVarillas2(VarillasAzules2, 0xffdb58, 0, 1, i * 1 + 0.1, 0);
    }

    const Grapas = [
      new THREE.Vector3(-0.3, 0.6, -0.3),
      new THREE.Vector3(-0.6, 0.6, -0.5),
      new THREE.Vector3(-0.6, 0.6, -0.55),
      new THREE.Vector3(-0.5, 0.6, -0.55),
      new THREE.Vector3(0, 0.6, -0.55),
      new THREE.Vector3(0.5, 0.6, -0.55),
      new THREE.Vector3(2.5, 0.6, -0.55),
      new THREE.Vector3(2.6, 0.6, -0.55),
      new THREE.Vector3(2.6, 0.6, -0.5),
      new THREE.Vector3(2.3, 0.6, -0.3),
    ];
    for (let i = 0; i < 3; i++) {
      createMeshLineVarillas2(Grapas, 0x39ff14, 0, -1, i * 1 - 1.05, 1);
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
