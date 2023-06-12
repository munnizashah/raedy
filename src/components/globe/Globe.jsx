import React, { useEffect, useRef } from "react";
import * as THREE from "three";
import { GLTFLoader } from "three/addons/loaders/GLTFLoader.js";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import { gsap } from "gsap";

import { useMediaQuery } from "react-responsive";

const Globe = () => {
  const isMedium = useMediaQuery({ query: "(max-width: 768px)" });
  const isSmall = useMediaQuery({ query: "(max-width: 425px)" });
  // create a reference to the canvas
  const canvasRef = useRef(null);

  useEffect(() => {
    // create a new scene
    const scene = new THREE.Scene();
    scene.background = null;
    scene.fog = new THREE.Fog(0x1d4ed8, 10, 1000);

    // create a sphere geometry
    const sphere = new GLTFLoader();
    sphere.load("assets/basketball.glb", function (s) {
      s.scene.scale.set(
        isSmall ? 4 : isMedium ? 3 : 5,
        isSmall ? 4 : isMedium ? 3 : 5,
        isSmall ? 4 : isMedium ? 3 : 5
      );
      s.scene.position.set(0, 0, 0);
      s.scene.rotation.set(-10, -1, 100);
      scene.add(s.scene);
      function animate() {
        window.requestAnimationFrame(animate);
        s.scene.rotation.y += 0.05;
        
      }
      animate();
    });
    
    const hoop = new GLTFLoader();
    hoop.load("assets/basketball_hoop.glb", function (s) {
    
      
      s.scene.scale.set(.13, .16, .2);
      console.log(s)
      s.scene.position.set(0, 0, -90);
      s.scene.rotation.set(0, 0, 0);
      scene.add(s.scene);
      
    });


    const skinnormals = new THREE.TextureLoader().load("assets/skinNormal.jpg");

    const finger = new GLTFLoader();
    finger.load("assets/finger.glb", function (s) {

      s.scene.scale.set(1.8, 1.8, 1.8);
      console.log(s)
      s.scene.position.set(0, -11.5, 0);
      s.scene.rotation.set(0, 0.5, 0);
      scene.add(s.scene);
      s.scene.children[0].children[0].children[0].children.map(obj => {
        obj.material.normalMap = skinnormals;
        obj.material.color.set(0xde954b)})
  
    });
    

    // set up width and height for the renderer
    const sizes = {
      width: window.innerWidth,
      height: window.innerHeight,
    };

    // * create ambient light
 /*    const ambientLight = new THREE.AmbientLight(0x4a5966);
    ambientLight.position.set(-1, -1, -1);
    ambientLight.intensity = 5;
    scene.add(ambientLight);
 */
    // * create directional light right
    const directionalLightRight = new THREE.DirectionalLight(0xcb0cf2);
    directionalLightRight.position.set(-10, 10, 10);
    directionalLightRight.intensity = 1;
    scene.add(directionalLightRight);

    // * create directional light left
    const directionalLightLeft = new THREE.DirectionalLight(0xFFFFFF);
    directionalLightLeft.position.set(-5, -10, -10);
    directionalLightLeft.intensity = 3;
    scene.add(directionalLightLeft);

    // * create directional light top
    const directionalLightTop = new THREE.DirectionalLight(0xFFFFFF);
    directionalLightTop.position.set(0, 10, 0);
    directionalLightTop.intensity = 2;
    scene.add(directionalLightTop);

    //* set up camera position and perspective
    const camera = new THREE.PerspectiveCamera(
      40,
      sizes.width / sizes.height,
      0.5,
      100
    );
    camera.position.z = 40;

    // * create the renderer
    const renderer = new THREE.WebGLRenderer({ canvas: canvasRef.current });
    renderer.setClearColor(0x000000, 0);
    renderer.setSize(sizes.width, sizes.height);
    renderer.setPixelRatio(Math.max(window.devicePixelRatio, 2));

    // * create orbit controls for the camera
    const controls = new OrbitControls(camera, canvasRef.current);
    controls.enableDamping = false;
    controls.autoRotate = false;
    controls.autoRotateSpeed = 1.5;
    controls.enablePan = false;
    controls.enableZoom = false;
    controls.enableRotate = false;

    // * add event listener to update renderer size when window is resized
    window.addEventListener("resize", () => {
      sizes.width = window.innerWidth;
      sizes.height = window.innerHeight;
      camera.aspect = sizes.width / sizes.height;
      camera.updateProjectionMatrix();
      renderer.setSize(sizes.width, sizes.height);
    });

    // * create the animation loop
    const loop = () => {
      controls.update();
      renderer.render(scene, camera, sphere);
      window.requestAnimationFrame(loop);
    };
    loop();

    // * create timeline for animation with gsap
    const timeline = gsap.timeline({ defaults: { duration: 1 } });
    timeline.fromTo(
      scene.scale,
      { z: 0, x: 0, y: 0 },
      { z: 1, x: 1, y: 1, ease: "power2.inOut" }
    );
    timeline.fromTo(
      scene.rotation,
      { z: 0 },
      { z: Math.PI * 2, ease: "ease" },
      "<"
    );
    timeline.fromTo(
      scene.position,
      { z: 0 },
      { z: 0, ease: "power2.inOut" },
      "<"
    );
    timeline.fromTo(
      scene.position,
      { z: -50, y: 50 },
      { z: 0, y: 0, ease: "bounce.out" },
      "<"
    );

    // * dispose of the renderer when component is unmounted
    return () => {
      renderer.dispose();
    };
  }, [isMedium, isSmall]);  // render the canvas
  return (
    <>
      <canvas className="webgl" ref={canvasRef} />
    </>
  );
};

export default Globe;
