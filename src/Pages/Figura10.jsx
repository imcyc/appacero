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

    // Crear un cubo con materiales transparentes
    const geometry = new THREE.BoxGeometry(3.5, 2.5, 2.5);
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
    cube.position.set(0, 0.6, 0.5);
    scene.add(cube);

    // Agregar pilares rojos
    const pillarGeometry = new THREE.CylinderGeometry(0.025, 0.025, 3.2, 50);
    const pillarMaterial = new THREE.MeshBasicMaterial({ color: 0xff0000 });
    const pillarPositions = [
      [0.5, 0.95, -0.5],
      [0.5, 0.95, 1.5],
      [-1.5, 0.95, 1.5],
      [-1.5, 0.95, -0.5],
      [-0.4952, 0.95, -0.4952],
      [-0.4952, 0.95, 1.4952],
      [-1.4952, 0.95, 0.4952],
      [1.4952, 0.95, 0.4952],
      [1.4952, 0.95, -0.4952],
      [1.4952, 0.95, 1.4952],
    ];
    pillarPositions.forEach(([x, y, z]) => {
      const pillar = new THREE.Mesh(pillarGeometry, pillarMaterial);
      pillar.position.set(x, y, z);
      scene.add(pillar);
    });

    const rectPointsa2 = [
      new THREE.Vector3(-1.25, 0.5, 1.35),
      new THREE.Vector3(-1.54, 0.5, 1.54),
      new THREE.Vector3(-1.538, 0.5, 1.275),
      new THREE.Vector3(-1.536, 0.5, 1.025),
      new THREE.Vector3(-1.534, 0.5, 0.775),
      new THREE.Vector3(-1.532, 0.5, 0.525),
      new THREE.Vector3(-1.53, 0.5, 0.275),
      new THREE.Vector3(-1.528, 0.5, 0.025),
      new THREE.Vector3(-1.526, 0.5, -0.275),
      new THREE.Vector3(-1.524, 0.5, -0.525),
      new THREE.Vector3(-1.275, 0.5, -0.525),
      new THREE.Vector3(-1.025, 0.5, -0.525),
      new THREE.Vector3(-0.775, 0.5, -0.525),
      new THREE.Vector3(-0.525, 0.5, -0.525),
      new THREE.Vector3(-0.275, 0.5, -0.525),
      new THREE.Vector3(1.025, 0.5, -0.525),
      new THREE.Vector3(1.275, 0.509, -0.525),
      new THREE.Vector3(1.525, 0.51, -0.525),
      new THREE.Vector3(1.525, 0.5, -0.525),
      new THREE.Vector3(1.525, 0.5, -0.275),
      new THREE.Vector3(1.525, 0.5, 0.025),
      new THREE.Vector3(1.525, 0.5, 0.275),
      new THREE.Vector3(1.525, 0.5, 0.525),
      new THREE.Vector3(1.525, 0.5, 0.775),
      new THREE.Vector3(1.525, 0.5, 1.025),
      new THREE.Vector3(1.525, 0.5, 1.275),
      new THREE.Vector3(1.525, 0.5, 1.524),
      new THREE.Vector3(1.275, 0.5, 1.526),
      new THREE.Vector3(1.025, 0.5, 1.528),
      new THREE.Vector3(-0.275, 0.5, 1.53),
      new THREE.Vector3(-0.525, 0.5, 1.532),
      new THREE.Vector3(-0.775, 0.5, 1.534),
      new THREE.Vector3(-1.025, 0.5, 1.536),
      new THREE.Vector3(-1.275, 0.5, 1.538),
      new THREE.Vector3(-1.54, 0.5, 1.54),
      new THREE.Vector3(-1.35, 0.5, 1.25),
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
      line.position.y = 0.5 + i * 2; // Ajustar la posición en el eje Y para cada línea
      return line;
    });

    // Agregar las líneas curvas a la escena
    Lineasazules1.forEach((line) => scene.add(line));

    // Crear líneas con esquinas curvas
    const rectPoints = [
      new THREE.Vector3(1.2, 0.5, -0.2),
      new THREE.Vector3(1.555, 0.5, -0.525),
      new THREE.Vector3(1.55, 0.5, -0.275),
      new THREE.Vector3(1.545, 0.5, 0.025),
      new THREE.Vector3(1.54, 0.5, 0.275),
      new THREE.Vector3(1.535, 0.5, 0.525),
      new THREE.Vector3(1.53, 0.5, 0.775),
      new THREE.Vector3(1.525, 0.5, 1.025),
      new THREE.Vector3(1.525, 0.5, 1.275),
      new THREE.Vector3(1.525, 0.5, 1.525),
      new THREE.Vector3(1.275, 0.5, 1.525),
      new THREE.Vector3(1.025, 0.5, 1.525),
      new THREE.Vector3(-0.275, 0.5, 1.525),
      new THREE.Vector3(-0.525, 0.5, 1.525),
      new THREE.Vector3(-0.775, 0.5, 1.525),
      new THREE.Vector3(-1.025, 0.5, 1.525),
      new THREE.Vector3(-1.275, 0.5, 1.525),
      new THREE.Vector3(-1.525, 0.5, 1.525),
      new THREE.Vector3(-1.525, 0.5, 1.275),
      new THREE.Vector3(-1.525, 0.5, 1.025),
      new THREE.Vector3(-1.525, 0.5, 0.775),
      new THREE.Vector3(-1.525, 0.5, 0.525),
      new THREE.Vector3(-1.525, 0.5, 0.275),
      new THREE.Vector3(-1.525, 0.5, 0.025),
      new THREE.Vector3(-1.525, 0.5, -0.275),
      new THREE.Vector3(-1.525, 0.5, -0.525),
      new THREE.Vector3(-1.275, 0.5, -0.525),
      new THREE.Vector3(-1.025, 0.5, -0.525),
      new THREE.Vector3(-0.775, 0.5, -0.525),
      new THREE.Vector3(-0.525, 0.5, -0.528),
      new THREE.Vector3(-0.275, 0.5, -0.525),
      new THREE.Vector3(1.025, 0.5, -0.525),
      new THREE.Vector3(1.275, 0.509, -0.525),
      new THREE.Vector3(1.525, 0.51, -0.525),
      new THREE.Vector3(1.3, 0.51, -0.1),
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
      line.position.y = -0.5 + i * 2; // Ajustar la posición en el eje Y para cada línea
      return line;
    });

    // Agregar las líneas curvas a la escena
    curvedLines.forEach((line) => scene.add(line));

    // Crear líneas con esquinas curvas
    const rectPoints2 = [
      new THREE.Vector3(-0.9, 0.5, -0.2),
      new THREE.Vector3(-0.525, 0.5, -0.525),
      new THREE.Vector3(-0.525, 0.5, -0.275),
      new THREE.Vector3(-0.525, 0.5, 0.025),
      new THREE.Vector3(-0.525, 0.5, 0.275),
      new THREE.Vector3(-0.525, 0.5, 0.525),
      new THREE.Vector3(-0.525, 0.5, 0.775),
      new THREE.Vector3(-0.525, 0.5, 1.025),
      new THREE.Vector3(-0.525, 0.5, 1.275),
      new THREE.Vector3(-0.525, 0.5, 1.525),
      new THREE.Vector3(-0.775, 0.5, 1.525),
      new THREE.Vector3(-0.725, 0.5, 1.525),
      new THREE.Vector3(-0.775, 0.5, 1.525),
      new THREE.Vector3(-0.525, 0.5, 1.525),
      new THREE.Vector3(-0.775, 0.5, 1.525),
      new THREE.Vector3(-1.025, 0.5, 1.525),
      new THREE.Vector3(-1.275, 0.5, 1.525),
      new THREE.Vector3(-1.525, 0.5, 1.525),
      new THREE.Vector3(-1.525, 0.5, 1.275),
      new THREE.Vector3(-1.525, 0.5, 1.025),
      new THREE.Vector3(-1.525, 0.5, 0.775),
      new THREE.Vector3(-1.525, 0.5, 0.525),
      new THREE.Vector3(-1.525, 0.5, 0.275),
      new THREE.Vector3(-1.525, 0.5, 0.025),
      new THREE.Vector3(-1.525, 0.5, -0.275),
      new THREE.Vector3(-1.525, 0.5, -0.525),
      new THREE.Vector3(-1.275, 0.5, -0.525),
      new THREE.Vector3(-1.025, 0.5, -0.525),
      new THREE.Vector3(-0.775, 0.5, -0.525),
      new THREE.Vector3(-0.525, 0.5, -0.525),
      new THREE.Vector3(-0.775, 0.5, -0.525),
      new THREE.Vector3(-0.525, 0.5, -0.525),
      new THREE.Vector3(-0.775, 0.509, -0.525),
      new THREE.Vector3(-0.525, 0.51, -0.525),
      new THREE.Vector3(-0.8, 0.51, -0.1),
    ];

    // Crear y agregar líneas curvas repetidas
    const curvedLines2 = Array.from({ length: 1 }, (_, i) => {
      const curve = new THREE.CatmullRomCurve3(rectPoints2, false);
      const curvePoints = curve.getPoints(100);

      // Convertir puntos a LineGeometry
      const positions = curvePoints.flatMap((p) => [p.x, p.y, p.z]);
      const lineGeometry = new LineGeometry();
      lineGeometry.setPositions(positions);

      // Crear material para Line2
      const lineMaterial = new LineMaterial({
        color: 0xffdb58,
        linewidth: 5, // Cambiar según el grosor deseado
        dashed: false,
      });

      lineMaterial.resolution.set(window.innerWidth, window.innerHeight); // Necesario para Line2

      // Crear línea con Line2
      const line = new Line2(lineGeometry, lineMaterial);
      line.position.y = 0.7 + i * 2; // Ajustar la posición en el eje Y para cada línea
      line.position.x = 1; // Ajustar la posición en el eje Y para cada línea
      return line;
    });

    // Agregar las líneas curvas a la escena
    curvedLines2.forEach((line) => scene.add(line));

    const rectPointsamarillas2 = [
      new THREE.Vector3(-1.25, 0.5, 1.35),
      new THREE.Vector3(-1.54, 0.5, 1.54),
      new THREE.Vector3(-1.538, 0.5, 1.275),
      new THREE.Vector3(-1.536, 0.5, 1.025),
      new THREE.Vector3(-1.534, 0.5, 0.775),
      new THREE.Vector3(-1.532, 0.5, 0.525),
      new THREE.Vector3(-1.53, 0.5, 0.275),
      new THREE.Vector3(-1.528, 0.5, 0.025),
      new THREE.Vector3(-1.526, 0.5, -0.275),
      new THREE.Vector3(-1.524, 0.5, -0.525),
      new THREE.Vector3(-1.275, 0.5, -0.525),
      new THREE.Vector3(-1.025, 0.5, -0.525),
      new THREE.Vector3(-0.8, 0.5, -0.525),
      new THREE.Vector3(-0.5, 0.5, -0.525),
      new THREE.Vector3(-0.8, 0.5, -0.525),
      new THREE.Vector3(-0.5, 0.5, -0.525),
      new THREE.Vector3(-0.8, 0.509, -0.525),
      new THREE.Vector3(-0.5, 0.51, -0.525),
      new THREE.Vector3(-0.5, 0.5, -0.525),
      new THREE.Vector3(-0.5, 0.5, -0.275),
      new THREE.Vector3(-0.5, 0.5, 0.025),
      new THREE.Vector3(-0.5, 0.5, 0.275),
      new THREE.Vector3(-0.5, 0.5, 0.525),
      new THREE.Vector3(-0.5, 0.5, 0.775),
      new THREE.Vector3(-0.5, 0.5, 1.025),
      new THREE.Vector3(-0.5, 0.5, 1.275),
      new THREE.Vector3(-0.5, 0.5, 1.524),
      new THREE.Vector3(-0.8, 0.5, 1.526),
      new THREE.Vector3(-0.5, 0.5, 1.528),
      new THREE.Vector3(-0.8, 0.5, 1.53),
      new THREE.Vector3(-0.5, 0.5, 1.532),
      new THREE.Vector3(-0.8, 0.5, 1.534),
      new THREE.Vector3(-1.025, 0.5, 1.536),
      new THREE.Vector3(-1.275, 0.5, 1.538),
      new THREE.Vector3(-1.54, 0.5, 1.54),
      new THREE.Vector3(-1.35, 0.5, 1.25),
    ];

    // Crear y agregar líneas curvas repetidas
    const curvedLinesamarillas2 = Array.from({ length: 2 }, (_, i) => {
      const curve = new THREE.CatmullRomCurve3(rectPointsamarillas2, false);
      const curvePoints = curve.getPoints(100);

      // Convertir puntos a LineGeometry
      const positions = curvePoints.flatMap((p) => [p.x, p.y, p.z]);
      const lineGeometry = new LineGeometry();
      lineGeometry.setPositions(positions);

      // Crear material para Line2
      const lineMaterial = new LineMaterial({
        color: 0xffdb58,
        linewidth: 5, // Cambiar según el grosor deseado
        dashed: false,
      });

      lineMaterial.resolution.set(window.innerWidth, window.innerHeight); // Necesario para Line2

      // Crear línea con Line2
      const line = new Line2(lineGeometry, lineMaterial);
      line.position.y = -0.3 + i * 2; // Ajustar la posición en el eje Y para cada línea
      line.position.x = 1; // Ajustar la posición en el eje Y para cada línea
      return line;
    });

    // Agregar las líneas curvas a la escena
    curvedLinesamarillas2.forEach((line) => scene.add(line));

    // Crear líneas con esquinas curvas
    const rectPoints3 = [
      new THREE.Vector3(1.33, 0.51, 0.3),
      new THREE.Vector3(1.53, 0.51, 0.52),
      new THREE.Vector3(1.03, 0.51, 0.52),
      new THREE.Vector3(0.53, 0.51, 0.52),
      new THREE.Vector3(-0.53, 0.51, 0.52),
      new THREE.Vector3(-1.03, 0.51, 0.52),
      new THREE.Vector3(-1.53, 0.51, 0.52),
      new THREE.Vector3(-1.33, 0.51, 0.3),
    ];

    // Crear y agregar líneas curvas repetidas
    const curvedLines3 = Array.from({ length: 3 }, (_, i) => {
      const curve = new THREE.CatmullRomCurve3(rectPoints3, false);
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
      line.position.y = -0.4 + i * 1; // Ajustar la posición en el eje Y para cada línea
      return line;
    });

    // Agregar las líneas curvas a la escena
    curvedLines3.forEach((line) => scene.add(line));

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
