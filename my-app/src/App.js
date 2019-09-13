import React, { useState } from 'react';
import './App.css';

function App() {
  const strikes = useState(0);
  const balls = useState(0);

  return (
    <div className="App">
      <div className="balls">
        <h1>Balls</h1>
        <span className="box">{balls}</span>
      </div>
      <div className="strikes"> 
        <h1>Strikes</h1>
        <span className="box">{strikes}</span>
      </div>
      <button className="hit">Hit</button>
      <button className="foul">Foul</button>
    </div>
  );
}

export default App;
