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
        'absolute right-0 bottom-0 top-0 w-83 opacity-90 z-9999 overflow-scroll pointer-events-none *:pointer-events-auto',
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
