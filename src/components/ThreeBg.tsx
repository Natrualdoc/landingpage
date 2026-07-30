"use client";

import React, { useEffect, useRef } from "react";
import * as THREE from "three";

export default function ThreeBg() {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    let width = container.clientWidth;
    let height = container.clientHeight;

    // 1. Scene & Camera
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(60, width / height, 0.1, 1000);
    camera.position.z = 240;

    // 2. WebGL Renderer
    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    container.appendChild(renderer.domElement);

    // Voxel / Pixel art character group
    const voxelGroup = new THREE.Group();
    scene.add(voxelGroup);

    // Voxel parameters
    const voxelCount = 180;
    const voxelSize = 6;
    const voxels: THREE.Mesh[] = [];

    // Claude color palette for voxels
    const clayColor = new THREE.Color("#d97756"); // Claude clay/terracotta
    const sandColor = new THREE.Color("#fbfaf7"); // Claude warm sand

    const clayMat = new THREE.MeshBasicMaterial({ color: clayColor, wireframe: false });
    const sandMat = new THREE.MeshBasicMaterial({ color: sandColor, wireframe: false });
    const voxelGeo = new THREE.BoxGeometry(voxelSize - 0.5, voxelSize - 0.5, voxelSize - 0.5);

    // 3. Define target coordinate matrices for 4 voxel shapes (Camera, Reel, Play, Database)
    const cameraPos: THREE.Vector3[] = [];
    const reelPos: THREE.Vector3[] = [];
    const playPos: THREE.Vector3[] = [];
    const dbPos: THREE.Vector3[] = [];

    // Helper to generate coordinates
    for (let i = 0; i < voxelCount; i++) {
      // Shape 1: Cinema Camera Voxel (هیرو - دوربین فیلمبرداری پیکسلی)
      let cx = 0, cy = 0, cz = 0;
      if (i < 90) {
        // Camera main body (box block)
        const bx = (i % 6) - 3;
        const by = (Math.floor(i / 6) % 5) - 2.5;
        const bz = Math.floor(i / 30) - 1.5;
        cx = bx * (voxelSize + 0.5);
        cy = by * (voxelSize + 0.5);
        cz = bz * (voxelSize + 0.5);
      } else if (i < 130) {
        // Camera lens (extended tube on right)
        const lx = ((i - 90) % 4) + 3;
        const ly = (Math.floor((i - 90) / 4) % 3) - 1.5;
        const lz = Math.floor((i - 90) / 12) - 1.5;
        cx = lx * (voxelSize + 0.5);
        cy = ly * (voxelSize + 0.5);
        cz = lz * (voxelSize + 0.5);
      } else {
        // Top reels (two circles on top)
        const arm = i % 2 === 0 ? -1.5 : 1.5;
        const angle = ((i - 130) / 50) * Math.PI * 2;
        cx = (arm * 3 + Math.cos(angle) * 2) * (voxelSize + 0.5);
        cy = (3.5 + Math.sin(angle) * 2) * (voxelSize + 0.5);
        cz = (Math.random() - 0.5) * voxelSize;
      }
      cameraPos.push(new THREE.Vector3(cx, cy, cz));

      // Shape 2: Film Reel (بخش ویژگی‌ها - حلقه فیلم دایره‌ای پیکسلی)
      const angleR = (i / voxelCount) * Math.PI * 2 * 3; // spiral arms or layered rings
      const radiusR = 15 + (i % 5) * 6;
      const rx = Math.cos(angleR) * radiusR;
      const ry = Math.sin(angleR) * radiusR;
      const rz = ((i % 3) - 1) * (voxelSize + 0.5);
      reelPos.push(new THREE.Vector3(rx, ry, rz));

      // Shape 3: Play button triangle (مینی‌براوز - مثلث دکمه پخش)
      // We form a 3D triangle pointing right (positive X)
      const row = Math.floor(i / 10) - 9; // -9 to 9
      const maxCol = 10 - Math.abs(row);
      const col = maxCol > 0 ? (i % maxCol) - maxCol / 2 : 0;
      const px = col * (voxelSize + 1) - 10;
      const py = row * (voxelSize + 0.5);
      const pz = ((i % 4) - 2) * (voxelSize + 0.5);
      playPos.push(new THREE.Vector3(px, py, pz));

      // Shape 4: Database cylinder (مشخصات فنی - سیلندر پیکسلی دیتابیس)
      const ring = Math.floor(i / 30) - 3; // 6 stacked rings
      const angleD = ((i % 30) / 30) * Math.PI * 2;
      const radiusD = 28;
      const dx = Math.cos(angleD) * radiusD;
      const dy = ring * (voxelSize + 3);
      const dz = Math.sin(angleD) * radiusD;
      dbPos.push(new THREE.Vector3(dx, dy, dz));
    }

    // 4. Instantiate Voxel meshes
    for (let i = 0; i < voxelCount; i++) {
      // Alternating colors between Clay and Sand initially
      const mat = i % 2 === 0 ? clayMat : sandMat;
      const mesh = new THREE.Mesh(voxelGeo, mat);
      
      // Start in Camera layout
      mesh.position.copy(cameraPos[i]);
      voxelGroup.add(mesh);
      voxels.push(mesh);
    }

    // 5. Scroll & Mouse trackers
    let scrollProgress = 0;
    let targetScrollProgress = 0;
    let mouseX = 0;
    let mouseY = 0;
    let targetMouseX = 0;
    let targetMouseY = 0;

    const handleScroll = () => {
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = scrollHeight > 0 ? window.scrollY / scrollHeight : 0;
      targetScrollProgress = Math.max(0, Math.min(1, progress));
    };

    const handleMouseMove = (event: MouseEvent) => {
      targetMouseX = (event.clientX / window.innerWidth) - 0.5;
      targetMouseY = (event.clientY / window.innerHeight) - 0.5;
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("mousemove", handleMouseMove);
    handleScroll(); // init

    // 6. Animation Loop (Replaced deprecated THREE.Clock with robust performance.now())
    let animationFrameId: number;
    const startTime = performance.now();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);

      const elapsed = (performance.now() - startTime) / 1000;

      // Smooth lag interpolations
      scrollProgress += (targetScrollProgress - scrollProgress) * 0.08;
      mouseX += (targetMouseX - mouseX) * 0.05;
      mouseY += (targetMouseY - mouseY) * 0.05;

      // Dynamic color palette objects based on scroll progress
      const colorTarget = new THREE.Color();
      if (scrollProgress < 0.33) {
        // Clay -> Sand
        colorTarget.lerpColors(new THREE.Color("#d97756"), new THREE.Color("#fbfaf7"), scrollProgress / 0.33);
      } else if (scrollProgress < 0.66) {
        // Sand -> Violet
        colorTarget.lerpColors(new THREE.Color("#fbfaf7"), new THREE.Color("#a855f7"), (scrollProgress - 0.33) / 0.33);
      } else {
        // Violet -> Emerald
        colorTarget.lerpColors(new THREE.Color("#a855f7"), new THREE.Color("#10b981"), (scrollProgress - 0.66) / 0.34);
      }

      // Morphing positions and dynamic colors
      voxels.forEach((voxel, i) => {
        let targetX = cameraPos[i].x;
        let targetY = cameraPos[i].y;
        let targetZ = cameraPos[i].z;

        if (scrollProgress < 0.33) {
          const t = scrollProgress / 0.33;
          targetX = THREE.MathUtils.lerp(cameraPos[i].x, reelPos[i].x, t);
          targetY = THREE.MathUtils.lerp(cameraPos[i].y, reelPos[i].y, t);
          targetZ = THREE.MathUtils.lerp(cameraPos[i].z, reelPos[i].z, t);
        } else if (scrollProgress < 0.66) {
          const t = (scrollProgress - 0.33) / 0.33;
          targetX = THREE.MathUtils.lerp(reelPos[i].x, playPos[i].x, t);
          targetY = THREE.MathUtils.lerp(reelPos[i].y, playPos[i].y, t);
          targetZ = THREE.MathUtils.lerp(reelPos[i].z, playPos[i].z, t);
        } else {
          const t = (scrollProgress - 0.66) / 0.34;
          targetX = THREE.MathUtils.lerp(playPos[i].x, dbPos[i].x, t);
          targetY = THREE.MathUtils.lerp(playPos[i].y, dbPos[i].y, t);
          targetZ = THREE.MathUtils.lerp(playPos[i].z, dbPos[i].z, t);
        }

        // Add float ripple (Zero-gravity retro drift)
        const floatFactor = Math.sin(elapsed * 1.5 + targetX * 0.03) * 2.5;

        voxel.position.x = THREE.MathUtils.lerp(voxel.position.x, targetX, 0.08);
        voxel.position.y = THREE.MathUtils.lerp(voxel.position.y, targetY + floatFactor, 0.08);
        voxel.position.z = THREE.MathUtils.lerp(voxel.position.z, targetZ, 0.08);

        // Update color dynamically in response to scroll
        const voxelMat = voxel.material as THREE.MeshBasicMaterial;
        voxelMat.color.copy(colorTarget);
      });

      // Slowly rotate character group
      voxelGroup.rotation.y = elapsed * 0.25 + mouseX * 0.6;
      voxelGroup.rotation.x = elapsed * 0.15 - mouseY * 0.6;

      // Translate character group on scroll to push it up/down
      voxelGroup.position.y = Math.sin(elapsed * 0.6) * 5 - (scrollProgress * 20);

      renderer.render(scene, camera);
    };

    animate();

    // 7. Handle resize
    const handleResize = () => {
      if (!container) return;
      width = container.clientWidth;
      height = container.clientHeight;

      camera.aspect = width / height;
      camera.updateProjectionMatrix();

      renderer.setSize(width, height);
    };

    window.addEventListener("resize", handleResize);

    // 8. Cleanup
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(animationFrameId);

      if (renderer && renderer.domElement && container) {
        container.removeChild(renderer.domElement);
      }

      voxelGeo.dispose();
      clayMat.dispose();
      sandMat.dispose();
      renderer.dispose();
    };
  }, []);

  return (
    <div 
      ref={mountRef} 
      className="fixed inset-0 -z-20 overflow-hidden w-full h-full pointer-events-none opacity-40 dark:opacity-30" 
    />
  );
}
