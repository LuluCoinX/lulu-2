import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Mesh, MeshStandardMaterial } from 'three';

export function Coin() {
  const meshRef = useRef<Mesh>(null);
  const materialRef = useRef<MeshStandardMaterial>(null);

  useFrame((state, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.y += delta * 0.5;
      meshRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.5) * 0.1;
    }

    if (materialRef.current) {
      materialRef.current.emissiveIntensity = 0.5 + Math.sin(state.clock.elapsedTime) * 0.2;
    }
  });

  return (
    <group>
      {/* Main coin body */}
      <mesh ref={meshRef}>
        <cylinderGeometry args={[2, 2, 0.2, 64]} />
        <meshStandardMaterial
          ref={materialRef}
          color="#FFD700"
          metalness={0.9}
          roughness={0.1}
          emissive="#FF6B00"
          emissiveIntensity={0.5}
        />
      </mesh>

      {/* Decorative rim */}
      <mesh position={[0, 0, 0]}>
        <torusGeometry args={[2, 0.1, 16, 64]} />
        <meshStandardMaterial
          color="#FFC000"
          metalness={0.9}
          roughness={0.1}
        />
      </mesh>

      {/* Dog symbol on the coin */}
      <mesh position={[0, 0.11, 0]} rotation={[0, 0, 0]}>
        <torusKnotGeometry args={[0.8, 0.2, 128, 32]} />
        <meshStandardMaterial
          color="#FFA500"
          metalness={0.9}
          roughness={0.1}
          emissive="#FF4500"
        />
      </mesh>

      {/* Text "LULU" */}
      <mesh position={[0, 0.11, 0.5]} rotation={[0, 0, 0]}>
        <torusGeometry args={[0.4, 0.1, 16, 32]} />
        <meshStandardMaterial
          color="#FFD700"
          metalness={0.9}
          roughness={0.1}
          emissive="#FF4500"
        />
      </mesh>
    </group>
  );
}