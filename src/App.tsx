import { Leva, useControls } from "leva";
import Experience from "./Experience";

export default function App() {
  const { debug } = useControls({
    debug: import.meta.env.MODE === "development" || location.hash === "#debug",
  });

  return (
    <>
      <Leva theme={{ sizes: { rootWidth: "300px" } }} />

      <Experience debug={debug} />
    </>
  );
}
