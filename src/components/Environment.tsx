import { useEffect, useRef } from 'react'
import type { DirectionalLight } from 'three'

import { useShadowHelper } from '@hooks'
import { useEnvironmentControls } from '@utils'

export function Environment() {
  const { helpers, ambientLightIntensity, directionalLightIntensity, directionalLightPosition } =
    useEnvironmentControls()

  const lightRef = useRef<DirectionalLight>(null!)
  const helperRef = useShadowHelper(lightRef)

  useEffect(() => {
    if (!helperRef.current) return
    helperRef.current.visible = helpers
  }, [helpers, helperRef])

  return (
    <>
      <ambientLight intensity={ambientLightIntensity} />
      <directionalLight
        ref={lightRef}
        castShadow
        position={directionalLightPosition}
        intensity={directionalLightIntensity}
        shadow-mapSize={[512, 512]}
        shadow-radius={5}
        shadow-camera-near={1}
        shadow-camera-far={10}
        shadow-camera-top={5}
        shadow-camera-right={5}
        shadow-camera-bottom={-5}
        shadow-camera-left={-5}
      />
    </>
  )
}
