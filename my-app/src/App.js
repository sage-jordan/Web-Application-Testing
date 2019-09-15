import React from 'react';
import './App.css';
import { useState } from 'react';
import Dashboard from './Dashboard';
import { useLocalStorage } from './useLocalStorage';

function App () {
  const state = useState({
    strikes: 0,
    balls: 0,
    foul: false
  });
  const [values, setValues] = useState(useLocalStorage(1, state || {}));

  
  return (
    <div className="App">
      <div className="balls">
        <h1>Balls</h1>
        <span className="box">{values.balls}</span>
      </div>
      <div className="strikes"> 
        <h1>Strikes</h1>
        <span className="box">{values.strikes}</span>
      </div>
      <Dashboard values={values} setValues={setValues}/>
    </div>
  ); 
};

export default App;
