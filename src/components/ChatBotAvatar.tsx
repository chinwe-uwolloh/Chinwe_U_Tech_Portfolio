import { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Text3D, Center, Float, MeshTransmissionMaterial } from "@react-three/drei";
import * as THREE from "three";

function Avatar3D() {
  const groupRef = useRef<THREE.Group>(null);

  useFrame(({ clock }) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = Math.sin(clock.getElapsedTime() * 0.3) * 0.2;
    }
  });

  return (
    <group ref={groupRef}>
      <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
        {/* Head */}
        <mesh position={[0, 0.3, 0]}>
          <sphereGeometry args={[0.5, 32, 32]} />
          <meshStandardMaterial color="#FFD700" metalness={0.3} roughness={0.4} />
        </mesh>
        
        {/* Glasses */}
        <group position={[0, 0.4, 0.45]}>
          <mesh position={[-0.2, 0, 0]}>
            <torusGeometry args={[0.15, 0.02, 16, 32]} />
            <meshStandardMaterial color="#000000" metalness={1} roughness={0.2} />
          </mesh>
          <mesh position={[0.2, 0, 0]}>
            <torusGeometry args={[0.15, 0.02, 16, 32]} />
            <meshStandardMaterial color="#000000" metalness={1} roughness={0.2} />
          </mesh>
          <mesh position={[0, 0, 0]}>
            <cylinderGeometry args={[0.02, 0.02, 0.3, 8]} />
            <meshStandardMaterial color="#000000" metalness={1} roughness={0.2} />
          </mesh>
        </group>

        {/* Laptop */}
        <mesh position={[0, -0.3, 0.3]} rotation={[-0.3, 0, 0]}>
          <boxGeometry args={[0.6, 0.4, 0.02]} />
          <MeshTransmissionMaterial
            color="#00ffff"
            transmission={0.9}
            thickness={0.5}
            roughness={0.1}
          />
        </mesh>
      </Float>

      {/* Spotlight effect */}
      <pointLight position={[0, 2, 2]} intensity={2} color="#00ffff" />
      <pointLight position={[0, -2, -2]} intensity={1} color="#ff00ff" />
    </group>
  );
}

export const ChatBotAvatar = () => {
  return (
    <div className="w-32 h-32 mx-auto">
      <Canvas camera={{ position: [0, 0, 3], fov: 50 }}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[5, 5, 5]} intensity={1} />
        <Avatar3D />
      </Canvas>
    </div>
  );
};
