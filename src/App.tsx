import Experience from '@components/Experience'
import useDebug from '@hooks/use-debug'
import { Leva } from 'leva'
import { StrictMode } from 'react'

export default function App() {
  const debug = useDebug()

  return (
    <>
      <Leva hidden={!debug} theme={{ sizes: { rootWidth: '350px' } }} />

      <StrictMode>
        <Experience />
      </StrictMode>
    </>
  )
}
