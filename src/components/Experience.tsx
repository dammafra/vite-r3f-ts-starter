import useDebug from '@hooks/use-debug'
import { OrbitControls } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import { Physics } from '@react-three/rapier'
import { useControls } from 'leva'
import Environment from './Environment'
import Helpers from './Helpers'
import World from './World'

export default function Experience() {
  const debug = useDebug()
  const physicsControls = useControls('physics', { debug, paused: false }, { collapsed: true })

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
      <Physics {...physicsControls}>
        <World />
      </Physics>

      <Environment />
      <OrbitControls makeDefault />

      <Helpers />
    </Canvas>
  )
}
