import { GizmoHelper, GizmoViewport } from '@react-three/drei'
import { PerfMonitor } from 'r3f-monitor'

import { useHelpersControls } from '@utils'

export function Helpers() {
  const { axes, grid, gizmo, perf } = useHelpersControls()

  return (
    <>
      {axes && <axesHelper args={[20]} position-y={-0.001} />}
      {grid && <gridHelper args={[10, 10, 'red', 'gray']} position-y={-0.002} />}

      {gizmo && (
        <GizmoHelper>
          <GizmoViewport labelColor="white" />
        </GizmoHelper>
      )}

      {perf && <PerfMonitor showGraph={false} displayType="classic" />}
    </>
  )
}
