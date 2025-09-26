import useDebug from '@hooks/use-debug'
import { GizmoHelper, GizmoViewport } from '@react-three/drei'
import { useControls } from 'leva'
import { Perf } from 'r3f-perf'

export default function Helpers() {
  const debug = useDebug()
  const { grid, axes, gizmo, perf } = useControls(
    'helpers',
    {
      grid: debug,
      axes: false,
      gizmo: debug,
      perf: debug,
    },
    { collapsed: true },
  )

  return (
    <>
      <axesHelper visible={axes} args={[20]} position-y={-0.001} />
      <gridHelper visible={grid} args={[10, 20, 'red', 'gray']} position-y={-0.002} />

      <GizmoHelper>
        <GizmoViewport visible={gizmo} labelColor="white" />
      </GizmoHelper>

      <Perf className={perf ? '' : 'hidden'} position="top-left" showGraph={false} />
    </>
  )
}
