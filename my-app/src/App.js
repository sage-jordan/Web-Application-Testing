import React, { useState } from 'react';
import './App.css';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      strikes: 0,
      balls: 0
    };
    console.log("constructor");
  }

  componentDidMount() {
    const hit = document.querySelector('.hit');
    const foul = document.querySelector('.foul');
    console.log("component did mount", hit, foul);
  };

  render() {
    console.log("app render");
    return (
      <div className="App">
        <div className="balls">
          <h1>Balls</h1>
          <span className="box">{this.state.balls}</span>
        </div>
        <div className="strikes"> 
          <h1>Strikes</h1>
          <span className="box">{this.state.strikes}</span>
        </div>
        <button className="hit">Hit</button>
        <button className="foul">Foul</button>
      </div>
  )}; 
}

export default App;
