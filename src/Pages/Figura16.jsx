import { useEffect, useRef } from "react";
import * as THREE from "three";
import Header from "../components/Header";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
import { LineGeometry } from "three/examples/jsm/lines/LineGeometry.js";
import { Line2 } from "three/examples/jsm/lines/Line2.js";
import { LineMaterial } from "three/examples/jsm/lines/LineMaterial.js";
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
    camera.position.set(7, 7, 7);
    camera.lookAt(0, 0, 0);

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
    const geometry = new THREE.BoxGeometry(5, 4, 5);
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
    const cube = new THREE.Mesh(geometry, materials);
    cube.position.set(0.5, -0.25, 0.5);
    scene.add(cube);

    // Agregar pilares rojos
    const pillarGeometry = new THREE.CylinderGeometry(0.05, 0.05, 5, 50);
    const pillarMaterial = new THREE.MeshBasicMaterial({ color: 0xff0000 });
    const pillarPositions = [
      [2.5, 0, 2.5],
      [1.5, 0, 2.5],
      [0.5, 0, 2.5],
      [-0.5, 0, 2.5],
      [-1.5, 0, 2.5],

      [2.5, 0, -0.5],
      [2.5, 0, 0.5],
      [2.5, 0, 1.5],

      [-1.5, 0, -0.5],
      [-1.5, 0, 0.5],
      [-1.5, 0, 1.5],

      [-1.5, 0, -1.5],
      [-0.5, 0, -1.5],
      [0.5, 0, -1.5],
      [1.5, 0, -1.5],
      [2.5, 0, -1.5],
    ];
    pillarPositions.forEach(([x, y, z]) => {
      const pillar = new THREE.Mesh(pillarGeometry, pillarMaterial);
      pillar.position.set(x, y + 0.25, z);
      scene.add(pillar);
    });

    const rectPointsa2 = [
      new THREE.Vector3(-2.2, 0.5, 2.3),
      new THREE.Vector3(-2.57, 0.5, 2.6),
      new THREE.Vector3(-2.57, 0.5, 2.25),
      new THREE.Vector3(-2.57, 0.5, 2),
      new THREE.Vector3(-2.57, 0.5, 1.75),
      new THREE.Vector3(-2.57, 0.5, 1.5),
      new THREE.Vector3(-2.57, 0.5, 1.25),
      new THREE.Vector3(-2.57, 0.5, 1),
      new THREE.Vector3(-2.57, 0.5, 0.75),
      new THREE.Vector3(-2.57, 0.5, 0.5),
      new THREE.Vector3(-2.57, 0.5, 0.25),
      new THREE.Vector3(-2.57, 0.5, 0),
      new THREE.Vector3(-2.57, 0.5, -0.25),
      new THREE.Vector3(-2.57, 0.5, -0.5),
      new THREE.Vector3(-2.57, 0.5, -1),
      new THREE.Vector3(-2.57, 0.5, -1.25),
      new THREE.Vector3(-2.57, 0.5, -1.57),

      new THREE.Vector3(-2.25, 0.5, -1.57),
      new THREE.Vector3(-2, 0.5, -1.57),
      new THREE.Vector3(-1.75, 0.5, -1.57),
      new THREE.Vector3(-1.5, 0.5, -1.57),
      new THREE.Vector3(-1.25, 0.5, -1.57),
      new THREE.Vector3(-1, 0.5, -1.57),
      new THREE.Vector3(-0.75, 0.5, -1.57),
      new THREE.Vector3(-0.5, 0.5, -1.57),
      new THREE.Vector3(-0.25, 0.5, -1.57),
      new THREE.Vector3(-0, 0.5, -1.57),
      new THREE.Vector3(0.25, 0.5, -1.57),
      new THREE.Vector3(0.5, 0.5, -1.57),
      new THREE.Vector3(0.75, 0.5, -1.57),
      new THREE.Vector3(1, 0.5, -1.57),
      new THREE.Vector3(1.25, 0.5, -1.57),
      new THREE.Vector3(1.6, 0.5, -1.57),

      new THREE.Vector3(1.57, 0.5, -1.25),
      new THREE.Vector3(1.57, 0.5, -1),
      new THREE.Vector3(1.57, 0.5, -0.75),
      new THREE.Vector3(1.57, 0.5, -0.5),
      new THREE.Vector3(1.57, 0.5, -0.25),
      new THREE.Vector3(1.57, 0.5, 0),
      new THREE.Vector3(1.57, 0.5, 0.25),
      new THREE.Vector3(1.57, 0.5, 0.5),
      new THREE.Vector3(1.57, 0.5, 0.75),
      new THREE.Vector3(1.57, 0.5, 1),
      new THREE.Vector3(1.57, 0.5, 1.25),
      new THREE.Vector3(1.6, 0.5, 1.57),
      new THREE.Vector3(1.57, 0.5, 1.75),
      new THREE.Vector3(1.57, 0.5, 2),
      new THREE.Vector3(1.57, 0.5, 2.25),
      new THREE.Vector3(1.57, 0.5, 2.6),

      new THREE.Vector3(1.25, 0.5, 2.57),
      new THREE.Vector3(1, 0.5, 2.57),
      new THREE.Vector3(0.75, 0.5, 2.57),
      new THREE.Vector3(0.5, 0.5, 2.57),
      new THREE.Vector3(0.25, 0.5, 2.57),
      new THREE.Vector3(0, 0.5, 2.57),
      new THREE.Vector3(-0.25, 0.5, 2.57),
      new THREE.Vector3(-0.5, 0.5, 2.57),
      new THREE.Vector3(-0.75, 0.5, 2.57),
      new THREE.Vector3(-1, 0.5, 2.57),
      new THREE.Vector3(-1.25, 0.5, 2.57),
      new THREE.Vector3(-1.5, 0.5, 2.57),
      new THREE.Vector3(-1.75, 0.5, 2.57),
      new THREE.Vector3(-2, 0.5, 2.57),
      new THREE.Vector3(-2.25, 0.5, 2.57),
      new THREE.Vector3(-2.6, 0.5, 2.57),
      new THREE.Vector3(-2.3, 0.5, 2.1),
    ];

    // Crear y agregar líneas curvas repetidas
    const Lineasazules1 = Array.from({ length: 1 }, (_, i) => {
      const curve = new THREE.CatmullRomCurve3(rectPointsa2, false);
      const curvePoints = curve.getPoints(100);

      // Convertir puntos a LineGeometry
      const positions = curvePoints.flatMap((p) => [p.x, p.y, p.z]);
      const lineGeometry = new LineGeometry();
      lineGeometry.setPositions(positions);

      // Crear material para Line2
      const lineMaterial = new LineMaterial({
        color: 0x0000ff,
        linewidth: 5, // Cambiar según el grosor deseado
        dashed: false,
      });

      lineMaterial.resolution.set(window.innerWidth, window.innerHeight); // Necesario para Line2

      // Crear línea con Line2
      const line = new Line2(lineGeometry, lineMaterial);
      line.position.y = 0.2 + i * 2; // Ajustar la posición en el eje Y para cada línea
      line.position.x = 1;
      return line;
    });

    // Agregar las líneas curvas a la escena
    Lineasazules1.forEach((line) => scene.add(line));

    // Crear líneas con esquinas curvas
    const rectPoints = [
      new THREE.Vector3(1, 0.55, -1.3),
      new THREE.Vector3(1.57, 0.5, -1.57),
      new THREE.Vector3(1.57, 0.5, -1.25),
      new THREE.Vector3(1.57, 0.5, -1),
      new THREE.Vector3(1.57, 0.5, -0.75),
      new THREE.Vector3(1.57, 0.5, -0.5),
      new THREE.Vector3(1.57, 0.5, -0.25),
      new THREE.Vector3(1.57, 0.5, 0),
      new THREE.Vector3(1.57, 0.5, 0.25),
      new THREE.Vector3(1.57, 0.5, 0.5),
      new THREE.Vector3(1.57, 0.5, 1),
      new THREE.Vector3(1.57, 0.5, 1.25),
      new THREE.Vector3(1.57, 0.5, 1.5),
      new THREE.Vector3(1.57, 0.5, 1.75),
      new THREE.Vector3(1.57, 0.5, 2),
      new THREE.Vector3(1.57, 0.5, 2.25),
      new THREE.Vector3(1.57, 0.5, 2.6),

      new THREE.Vector3(1.25, 0.5, 2.57),
      new THREE.Vector3(1, 0.5, 2.57),
      new THREE.Vector3(1.25, 0.5, 2.57),
      new THREE.Vector3(1, 0.5, 2.57),
      new THREE.Vector3(0.75, 0.5, 2.57),
      new THREE.Vector3(0.5, 0.5, 2.57),
      new THREE.Vector3(0.25, 0.5, 2.57),
      new THREE.Vector3(0, 0.5, 2.57),
      new THREE.Vector3(-0.25, 0.5, 2.57),
      new THREE.Vector3(-0.5, 0.5, 2.57),
      new THREE.Vector3(-0.75, 0.5, 2.57),
      new THREE.Vector3(-1, 0.5, 2.57),
      new THREE.Vector3(-1.25, 0.5, 2.57),
      new THREE.Vector3(-1.5, 0.5, 2.57),
      new THREE.Vector3(-1.75, 0.5, 2.57),
      new THREE.Vector3(-2, 0.5, 2.57),
      new THREE.Vector3(-2.25, 0.5, 2.57),
      new THREE.Vector3(-2.6, 0.5, 2.57),

      new THREE.Vector3(-2.57, 0.5, 2.25),
      new THREE.Vector3(-2.57, 0.5, 2),
      new THREE.Vector3(-2.57, 0.5, 1.75),
      new THREE.Vector3(-2.57, 0.5, 1.25),
      new THREE.Vector3(-2.57, 0.5, 1),
      new THREE.Vector3(-2.57, 0.5, 0.75),
      new THREE.Vector3(-2.57, 0.5, 0.5),
      new THREE.Vector3(-2.57, 0.5, 0.25),
      new THREE.Vector3(-2.57, 0.5, 0),
      new THREE.Vector3(-2.57, 0.5, -0.25),
      new THREE.Vector3(-2.57, 0.5, -0.5),
      new THREE.Vector3(-2.57, 0.5, -1),
      new THREE.Vector3(-2.57, 0.5, -1.25),
      new THREE.Vector3(-2.57, 0.5, -1.57),

      new THREE.Vector3(-2.25, 0.5, -1.57),
      new THREE.Vector3(-2, 0.5, -1.57),
      new THREE.Vector3(-1.75, 0.5, -1.57),
      new THREE.Vector3(-1.5, 0.5, -1.57),
      new THREE.Vector3(-1.25, 0.5, -1.57),
      new THREE.Vector3(-1, 0.5, -1.57),
      new THREE.Vector3(-0.75, 0.5, -1.57),
      new THREE.Vector3(-0.5, 0.5, -1.57),
      new THREE.Vector3(-0.25, 0.5, -1.57),
      new THREE.Vector3(-0, 0.5, -1.57),
      new THREE.Vector3(0.25, 0.5, -1.57),
      new THREE.Vector3(0.5, 0.5, -1.57),
      new THREE.Vector3(0.75, 0.5, -1.57),
      new THREE.Vector3(1, 0.5, -1.57),
      new THREE.Vector3(1.25, 0.5, -1.57),
      new THREE.Vector3(1.6, 0.5, -1.57),
      new THREE.Vector3(1.3, 0.525, -1),
    ];

    // Crear y agregar líneas curvas repetidas
    const curvedLines = Array.from({ length: 2 }, (_, i) => {
      const curve = new THREE.CatmullRomCurve3(rectPoints, false);
      const curvePoints = curve.getPoints(100);

      // Convertir puntos a LineGeometry
      const positions = curvePoints.flatMap((p) => [p.x, p.y, p.z]);
      const lineGeometry = new LineGeometry();
      lineGeometry.setPositions(positions);

      // Crear material para Line2
      const lineMaterial = new LineMaterial({
        color: 0x0000ff,
        linewidth: 5, // Cambiar según el grosor deseado
        dashed: false,
      });

      lineMaterial.resolution.set(window.innerWidth, window.innerHeight); // Necesario para Line2

      // Crear línea con Line2
      const line = new Line2(lineGeometry, lineMaterial);
      line.position.y = -1.7 + i * 3.2; // Ajustar la posición en el eje Y para cada línea
      line.position.x = 1;
      return line;
    });

    // Agregar las líneas curvas a la escena
    curvedLines.forEach((line) => scene.add(line));

    const rectPointsverdes1 = [
      new THREE.Vector3(2.2, 0.5, 0.4),
      new THREE.Vector3(2.6, 0.5, 0.4),
      new THREE.Vector3(2.6, 0.5, 0.5),
      new THREE.Vector3(2.4, 0.5, 0.8),
      new THREE.Vector3(2.2, 0.5, 1),
      new THREE.Vector3(2, 0.5, 1.2),
      new THREE.Vector3(1.8, 0.5, 1.4),
      new THREE.Vector3(1.6, 0.5, 1.6),
      new THREE.Vector3(1.4, 0.5, 1.8),
      new THREE.Vector3(1.2, 0.5, 2),
      new THREE.Vector3(1, 0.5, 2.2),
      new THREE.Vector3(0.8, 0.5, 2.4),
      new THREE.Vector3(0.7, 0.5, 2.5),

      new THREE.Vector3(0.5, 0.5, 2.6),
      new THREE.Vector3(0.3, 0.5, 2.4),
      new THREE.Vector3(0.1, 0.5, 2.2),
      new THREE.Vector3(-0.1, 0.5, 2),
      new THREE.Vector3(-0.3, 0.5, 1.8),
      new THREE.Vector3(-0.5, 0.5, 1.6),
      new THREE.Vector3(-0.7, 0.5, 1.4),
      new THREE.Vector3(-0.9, 0.5, 1.2),
      new THREE.Vector3(-1.1, 0.5, 1),
      new THREE.Vector3(-1.3, 0.5, 0.8),
      new THREE.Vector3(-1.6, 0.5, 0.5),

      new THREE.Vector3(-1.4, 0.5, 0.2),
      new THREE.Vector3(-1.2, 0.5, 0),
      new THREE.Vector3(-1, 0.5, -0.2),
      new THREE.Vector3(-0.8, 0.5, -0.4),
      new THREE.Vector3(-0.6, 0.5, -0.6),
      new THREE.Vector3(-0.4, 0.5, -0.8),
      new THREE.Vector3(-0.2, 0.5, -1),
      new THREE.Vector3(0, 0.5, -1.2),
      new THREE.Vector3(0.2, 0.5, -1.4),
      new THREE.Vector3(0.5, 0.5, -1.6),

      new THREE.Vector3(0.7, 0.5, -1.4),
      new THREE.Vector3(0.9, 0.5, -1.2),
      new THREE.Vector3(1.1, 0.5, -1),
      new THREE.Vector3(1.3, 0.5, -0.8),
      new THREE.Vector3(1.5, 0.5, -0.6),
      new THREE.Vector3(1.7, 0.5, -0.4),
      new THREE.Vector3(1.9, 0.5, -0.2),
      new THREE.Vector3(2.1, 0.5, 0),
      new THREE.Vector3(2.3, 0.5, 0.2),
      new THREE.Vector3(2.5, 0.5, 0.4),
      new THREE.Vector3(2.6, 0.5, 0.5),
      new THREE.Vector3(2.6, 0.5, 0.6),
      new THREE.Vector3(2.2, 0.5, 0.6),
    ];

    // Crear y agregar líneas curvas repetidas
    const curvedLinesverdes2 = Array.from({ length: 2 }, (_, i) => {
      const curve = new THREE.CatmullRomCurve3(rectPointsverdes1, false);
      const curvePoints = curve.getPoints(100);

      // Convertir puntos a LineGeometry
      const positions = curvePoints.flatMap((p) => [p.x, p.y, p.z]);
      const lineGeometry = new LineGeometry();
      lineGeometry.setPositions(positions);

      // Crear material para Line2
      const lineMaterial = new LineMaterial({
        color: 0x008631,
        linewidth: 5, // Cambiar según el grosor deseado
        dashed: false,
      });

      lineMaterial.resolution.set(window.innerWidth, window.innerHeight); // Necesario para Line2

      // Crear línea con Line2
      const line = new Line2(lineGeometry, lineMaterial);
      line.position.y = -1.6 + i * 3.2; // Ajustar la posición en el eje Y para cada línea //
      return line;
    });

    // Agregar las líneas curvas a la escena
    curvedLinesverdes2.forEach((line) => scene.add(line));

    const rectPointsverdes2 = [
      new THREE.Vector3(-1, 0.5, 0.6),
      new THREE.Vector3(-1.6, 0.5, 0.6),
      new THREE.Vector3(-1.6, 0.5, 0.4),
      new THREE.Vector3(-1.4, 0.5, 0.2),
      new THREE.Vector3(-1.2, 0.5, 0),
      new THREE.Vector3(-1, 0.5, -0.2),
      new THREE.Vector3(-0.8, 0.5, -0.4),
      new THREE.Vector3(-0.6, 0.5, -0.6),
      new THREE.Vector3(-0.4, 0.5, -0.8),
      new THREE.Vector3(-0.2, 0.5, -1),
      new THREE.Vector3(0, 0.5, -1.2),
      new THREE.Vector3(0.2, 0.5, -1.4),
      new THREE.Vector3(0.5, 0.5, -1.6),

      new THREE.Vector3(0.7, 0.5, -1.4),
      new THREE.Vector3(0.9, 0.5, -1.2),
      new THREE.Vector3(1.1, 0.5, -1),
      new THREE.Vector3(1.3, 0.5, -0.8),
      new THREE.Vector3(1.5, 0.5, -0.6),
      new THREE.Vector3(1.7, 0.5, -0.4),
      new THREE.Vector3(1.9, 0.5, -0.2),
      new THREE.Vector3(2.1, 0.5, 0),
      new THREE.Vector3(2.3, 0.5, 0.2),
      new THREE.Vector3(2.5, 0.5, 0.4),
      new THREE.Vector3(2.6, 0.5, 0.5),
      new THREE.Vector3(2.6, 0.5, 0.6),

      new THREE.Vector3(2.4, 0.5, 0.8),
      new THREE.Vector3(2.2, 0.5, 1),
      new THREE.Vector3(2, 0.5, 1.2),
      new THREE.Vector3(1.8, 0.5, 1.4),
      new THREE.Vector3(1.6, 0.5, 1.6),
      new THREE.Vector3(1.4, 0.5, 1.8),
      new THREE.Vector3(1.2, 0.5, 2),
      new THREE.Vector3(1, 0.5, 2.2),
      new THREE.Vector3(0.8, 0.5, 2.4),
      new THREE.Vector3(0.7, 0.5, 2.5),

      new THREE.Vector3(0.5, 0.5, 2.6),
      new THREE.Vector3(0.3, 0.5, 2.4),
      new THREE.Vector3(0.1, 0.5, 2.2),
      new THREE.Vector3(-0.1, 0.5, 2),
      new THREE.Vector3(-0.3, 0.5, 1.8),
      new THREE.Vector3(-0.5, 0.5, 1.6),
      new THREE.Vector3(-0.7, 0.5, 1.4),
      new THREE.Vector3(-0.9, 0.5, 1.2),
      new THREE.Vector3(-1.1, 0.5, 1),
      new THREE.Vector3(-1.3, 0.5, 0.8),
      new THREE.Vector3(-1.6, 0.5, 0.6),
      new THREE.Vector3(-1.6, 0.5, 0.4),
      new THREE.Vector3(-1, 0.5, 0.4),
    ];

    // Crear y agregar líneas curvas repetidas
    const curvedLinesverdes = Array.from({ length: 1 }, (_, i) => {
      const curve = new THREE.CatmullRomCurve3(rectPointsverdes2, false);
      const curvePoints = curve.getPoints(100);

      // Convertir puntos a LineGeometry
      const positions = curvePoints.flatMap((p) => [p.x, p.y, p.z]);
      const lineGeometry = new LineGeometry();
      lineGeometry.setPositions(positions);

      // Crear material para Line2
      const lineMaterial = new LineMaterial({
        color: 0x008631,
        linewidth: 5, // Cambiar según el grosor deseado
        dashed: true,
      });

      lineMaterial.resolution.set(window.innerWidth, window.innerHeight); // Necesario para Line2

      // Crear línea con Line2
      const line = new Line2(lineGeometry, lineMaterial);
      line.position.y = 0.3 + i * 2; // Ajustar la posición en el eje Y para cada línea
      line.position.x = 0; // Ajustar la posición en el eje X para cada línea
      return line;
    });
    // Agregar las líneas curvas a la escena
    curvedLinesverdes.forEach((line) => scene.add(line));

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
