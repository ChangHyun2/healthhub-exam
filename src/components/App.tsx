import React, { useCallback } from "react";
import "./App.scss";
import Mole from "./Mole";
import History from "./History";

function App() {
  const [score, setScore] = React.useState(0);
  const [hitTime, setHitTime] = React.useState<Array<Array<number>>>(
    Array(16)
      .fill(0)
      .map((_) => [])
  );

  const onHit = useCallback(
    (id: number) => {
      setScore((prev) => prev + 1);

      hitTime[id - 1].push(Date.now());
      setHitTime(hitTime.slice());
    },
    [hitTime]
  ); // TODO

  return (
    <>
      <h1>React-A-Mole</h1>
      <p>`score: ${score}`</p> {/* TODO */}
      <History hitTime={hitTime} />
      <div id="hh-newbie-exam">
        {Array(16)
          .fill(0)
          .map((_, id) => (
            <Mole key={id} onHit={onHit} id={id + 1} />
          ))}
      </div>
    </>
  );
}

export default App;
