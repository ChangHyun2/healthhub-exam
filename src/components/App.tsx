import React from 'react';
import './App.scss';
import Mole from "./Mole";
import History from "./History";

function App() {
    const onHit = () => {};     // TODO
    return (
        <>
            <h1>React-A-Mole</h1>
            <p>score: 0</p>    {/* TODO */}
            <div id="hh-newbie-exam">
                <Mole onHit={onHit}/>
            </div>
        </>
    );
}

export default App;
