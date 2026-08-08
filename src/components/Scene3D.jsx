import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, Sparkles } from '@react-three/drei';

function WireOrb({ radius, color, opacity, speedY, speedX, detail = 1 }) {
  const ref = useRef(null);
  useFrame((state, delta) => {
    if (!ref.current) return;
    ref.current.rotation.y += delta * speedY;
    ref.current.rotation.x += delta * speedX;
    const { pointer } = state;
    ref.current.rotation.y += pointer.x * 0.0008;
    ref.current.rotation.x += pointer.y * 0.0008;
  });

  return (
    <mesh ref={ref}>
      <icosahedronGeometry args={[radius, detail]} />
      <meshBasicMaterial color={color} wireframe transparent opacity={opacity} />
    </mesh>
  );
}

function NeuralCore() {
  return (
    <Float speed={1.6} rotationIntensity={0.4} floatIntensity={0.8}>
      <WireOrb radius={1.5} color="#00f2fe" opacity={0.45} speedY={0.22} speedX={0.08} detail={1} />
      <WireOrb radius={1.15} color="#9b51e0" opacity={0.35} speedY={-0.16} speedX={0.12} detail={0} />
      <WireOrb radius={0.55} color="#fbbf24" opacity={0.5} speedY={0.3} speedX={-0.2} detail={0} />
    </Float>
  );
}

export default function Scene3D() {
  return (
    <Canvas
      camera={{ position: [0, 0, 5], fov: 42 }}
      gl={{ alpha: true, antialias: true }}
      dpr={[1, 1.5]}
      style={{ pointerEvents: 'none' }}
    >
      <NeuralCore />
      <Sparkles count={50} scale={[5.5, 5.5, 5.5]} size={2} speed={0.35} color="#fbbf24" opacity={0.6} />
    </Canvas>
  );
}
