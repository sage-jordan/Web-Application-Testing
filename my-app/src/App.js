import React from 'react';
import './App.css';
import { useState } from 'react';
import Dashboard from './Dashboard';
import { useLocalStorage } from './useLocalStorage';

function App () {

  // Using State for data
  const state = useState({
    strikes: 0,
    balls: 0,
    foul: false
  });

  // Values passes state to local storage and assigns a value
  const [values, setValues] = useState(useLocalStorage("key", state || {}));
  
  return (
    <div className="App">
      {/* Balls Display */}
      <div className="balls">
        <h1>Balls</h1>
        <span className="box">{values.balls}</span> 
      </div>
      {/* Strikes Display */}
      <div className="strikes"> 
        <h1>Strikes</h1>
        <span className="box">{values.strikes}</span>
      </div>
      {/* Passing Props to Dashboard to manipulate  */}
      <Dashboard values={values} setValues={setValues}/>
    </div>
  ); 
};

export default App;
