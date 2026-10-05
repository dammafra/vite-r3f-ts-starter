import clsx from 'clsx'
import { Leva } from 'leva'

import { useDebug } from '@hooks'
import { useHelpersControls } from '@utils'

export function GUI() {
  const debug = useDebug()
  const { perf } = useHelpersControls()

  return (
    <div
      className={clsx(
        'pointer-events-none absolute top-0 right-0 bottom-0 z-9999 w-83 overflow-scroll opacity-90 *:pointer-events-auto',
        { hidden: !debug, 'top-15': perf },
      )}
    >
      {/* See https://github.com/pmndrs/leva/issues/552 */}
      <Leva
        hidden={!debug}
        fill
        flat
        titleBar={{ drag: false }}
        theme={{ colors: { elevation2: '#242424' } }}
      />
    </div>
  )
}
