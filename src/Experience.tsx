import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Physics, RigidBody } from "@react-three/rapier";

interface ExperienceProps {
  debug: boolean;
}

export default function Experience({ debug }: ExperienceProps) {
  return (
    <Canvas
      shadows
      camera={{
        fov: 45,
        near: 0.1,
        far: 200,
        position: [2, 4, 6],
      }}
    >
      <Physics debug={debug}>
        <RigidBody position={[0, 1, 0]}>
          <mesh castShadow>
            <boxGeometry />
            <meshStandardMaterial color="orange" />
          </mesh>
        </RigidBody>

        <RigidBody type="fixed">
          <mesh receiveShadow scale={[5, 0.1, 5]}>
            <boxGeometry />
            <meshStandardMaterial color="limegreen" />
          </mesh>
        </RigidBody>
      </Physics>

      <directionalLight castShadow position={[4, 4, 1]} intensity={4.5} />
      <ambientLight intensity={1.5} />

      <OrbitControls />

      {debug && <gridHelper args={[10, 20, "red", "gray"]} />}
      {debug && <axesHelper args={[5]} position={[-6, 0, -6]} />}
    </Canvas>
  );
}
