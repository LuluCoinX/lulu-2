import { Canvas } from '@react-three/fiber';
import { OrbitControls, PerspectiveCamera, Environment, Float } from '@react-three/drei';
import { Coin } from './Coin';
import { Suspense } from 'react';

export function Scene() {
  return (
    <div className="h-[400px] w-full">
      <Canvas>
        <Suspense fallback={null}>
          <PerspectiveCamera makeDefault position={[0, 0, 6]} />
          <OrbitControls
            enableZoom={false}
            enablePan={false}
            maxPolarAngle={Math.PI / 1.5}
            minPolarAngle={Math.PI / 3}
          />
          
          <Environment preset="sunset" />
          
          <ambientLight intensity={0.5} />
          <pointLight position={[10, 10, 10]} intensity={1} />
          <spotLight
            position={[5, 5, 5]}
            angle={0.3}
            penumbra={1}
            intensity={2}
            castShadow
          />

          <Float
            speed={1.5}
            rotationIntensity={0.5}
            floatIntensity={0.5}
          >
            <Coin />
          </Float>

          {/* Glowing background effect */}
          <mesh position={[0, 0, -2]} scale={[15, 15, 1]}>
            <planeGeometry />
            <meshBasicMaterial
              color="#4C1D95"
              transparent
              opacity={0.2}
            />
          </mesh>
        </Suspense>
      </Canvas>
    </div>
  );
}