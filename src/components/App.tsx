import React from "react";
import "./App.scss";
import Mole from "./Mole";
import History from "./History";

function App() {
  const [score, setScore] = React.useState(0);

  const onHit = () => {
    setScore((prev) => prev + 1);
  }; // TODO

  return (
    <>
      <h1>React-A-Mole</h1>
      <p>`score: ${score}`</p> {/* TODO */}
      <div id="hh-newbie-exam">
        <Mole onHit={onHit} />
      </div>
    </>
  );
}

export default App;
