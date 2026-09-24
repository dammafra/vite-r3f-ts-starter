import { CameraControls } from '@react-three/drei'
import { Physics } from '@react-three/rapier'
import { PCFShadowMap } from 'three'

import { Canvas, Helpers } from '@components/helpers'
import { usePhysicsControls } from '@utils'

import { Environment } from './Environment'
import { World } from './World'

export function Experience() {
  const physicsControls = usePhysicsControls()

  return (
    <Canvas
      shadows={{ type: PCFShadowMap }}
      camera={{
        fov: 45,
        near: 0.1,
        far: 100,
        position: [2, 4, 6],
      }}
    >
      <Environment />
      <CameraControls makeDefault />

      <Physics {...physicsControls}>
        <World />
        <Helpers />
      </Physics>
    </Canvas>
  )
}
