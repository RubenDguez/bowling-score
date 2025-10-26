import { useState } from "react";
import Frame from "./components/Frame"

const initialGame: Array<IFrame> = Array.from({ length: 10 }).map((_, index) => ({ frame: index + 1, firstScore: 0, secondScore: 0, totalScore: 0 }));

function App() {
  const [state, setState] = useState<Array<IFrame>>(initialGame);
  return (
    <>
      <h1>10 Pin Bowlin Score Keeping</h1>
      <div style={{ display: 'flex', gap: '4px' }}>
        {state.map((m) => (
          <Frame frame={m.frame} firstScore={m.firstScore} secondScore={m.secondScore} totalScore={m.totalScore} />
        ))}
      </div>
    </>
  )
}

export default App
