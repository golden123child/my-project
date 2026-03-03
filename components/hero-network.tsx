'use client';

import { useEffect, useRef } from 'react';
import * as THREE from 'three';

export function HeroNetwork() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!ref.current) return;
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, ref.current.clientWidth / 280, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(ref.current.clientWidth, 280);
    ref.current.appendChild(renderer.domElement);

    const geometry = new THREE.BufferGeometry();
    const vertices = new Float32Array(300);
    for (let i = 0; i < vertices.length; i++) vertices[i] = (Math.random() - 0.5) * 10;
    geometry.setAttribute('position', new THREE.BufferAttribute(vertices, 3));
    const points = new THREE.Points(
      geometry,
      new THREE.PointsMaterial({ color: 0x3182f6, size: 0.04 })
    );

    scene.add(points);
    camera.position.z = 4;

    const animate = () => {
      points.rotation.y += 0.002;
      points.rotation.x += 0.001;
      renderer.render(scene, camera);
      requestAnimationFrame(animate);
    };
    animate();

    return () => {
      renderer.dispose();
      ref.current?.removeChild(renderer.domElement);
    };
  }, []);

  return <div ref={ref} className="w-full overflow-hidden rounded-2xl border border-electric/30" />;
}
