import { useControls } from 'leva'

import { useDebug } from '@hooks'

export function useHelpersControls() {
  const debug = useDebug()

  return useControls(
    '🛠️ helpers',
    {
      axes: false,
      grid: false,
      gizmo: debug,
      perf: debug,
    },
    { order: 0, collapsed: true },
  )
}

export function useEnvironmentControls() {
  return useControls(
    '☀️ environment',
    {
      helpers: false,
      ambientLightIntensity: {
        value: 1.5,
        min: 0,
        max: 20,
        step: 0.01,
        label: 'ambient intensity',
      },
      directionalLightIntensity: {
        value: 4.5,
        min: 0,
        max: 20,
        step: 0.01,
        label: 'directional intensity',
      },
      directionalLightPosition: {
        value: [4, 4, 1],
        min: 0,
        max: 20,
        step: 0.01,
        label: 'directional position',
      },
    },
    { order: 1, collapsed: true },
  )
}

export function usePhysicsControls() {
  return useControls('⚛️ physics', { debug: false, paused: false }, { order: 2, collapsed: true })
}
