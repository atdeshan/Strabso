import { useRef, useEffect, useState, useCallback } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Environment, useGLTF } from '@react-three/drei';
import * as THREE from 'three';

// Import the model URL
import modelUrl from '../assets/strabso.logo.glb?url';

interface MousePosition {
  x: number;
  y: number;
}

function CustomModel({ mouse }: { mouse: MousePosition }) {
  const { scene } = useGLTF(modelUrl);
  const ref = useRef<THREE.Group>(null);

  // Current rotation values for smooth interpolation
  const currentRotation = useRef({ x: 0, y: 0 });

  useFrame((_, delta) => {
    if (ref.current) {
      // Target rotation based on mouse position
      const targetY = mouse.x * 0.1; // Horizontal: left/right tilt
      const targetX = mouse.y * 0.01; // Vertical: up/down tilt

      // Smooth damping interpolation
      const smoothing = 1 - Math.pow(0.001, delta);

      currentRotation.current.x +=
        (targetX - currentRotation.current.x) * smoothing * 1.1;
      currentRotation.current.y +=
        (targetY - currentRotation.current.y) * smoothing * 1.1;

      // Apply rotation
      ref.current.rotation.x = currentRotation.current.x;
      ref.current.rotation.z = currentRotation.current.y;
    }
  });

  return <primitive ref={ref} object={scene} scale={1.1} />;
}

// Preload the model for better performance
useGLTF.preload(modelUrl);

export default function Model3D() {
  const [mouse, setMouse] = useState<MousePosition>({ x: 0, y: 0 });
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  // Check for reduced motion preference
  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(mediaQuery.matches);

    const handleChange = (e: MediaQueryListEvent) => {
      setPrefersReducedMotion(e.matches);
    };

    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  const handleMouseMove = useCallback((event: MouseEvent) => {
    // Normalize mouse position to -1 to 1 range
    const x = (event.clientX / window.innerWidth) * 2 - 1;
    const y = (event.clientY / window.innerHeight) * 2 - 1;
    setMouse({ x, y });
  }, []);

  const handleMouseLeave = useCallback(() => {
    setMouse({ x: 0, y: 0 });
  }, []);

  useEffect(() => {
    // Don't add mouse listeners if user prefers reduced motion
    if (prefersReducedMotion) return;

    window.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [handleMouseMove, handleMouseLeave, prefersReducedMotion]);

  return (
    <div
      className="model-container"
      style={{ background: 'transparent', width: '100%', height: '100%' }}
      role="img"
      aria-label="Interactive 3D Strabso logo"
    >
      <Canvas
        camera={{ position: [10, 0, 2], fov: 45 }}
        style={{ background: 'transparent' }}
        gl={{
          alpha: true,
          antialias: true,
          preserveDrawingBuffer: true,
          powerPreference: 'high-performance',
        }}
        dpr={[1, 2]} // Responsive pixel ratio for performance
      >
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 5]} intensity={1} />
        <pointLight position={[-10, -10, -5]} color="#ec4899" intensity={0.5} />
        <pointLight position={[10, -10, 5]} color="#3b82f6" intensity={0.5} />

        <CustomModel mouse={prefersReducedMotion ? { x: 0, y: 0 } : mouse} />

        <Environment preset="city" background={false} />
      </Canvas>
    </div>
  );
}