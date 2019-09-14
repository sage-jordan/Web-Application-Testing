import React, { useEffect } from 'react';
import './App.css';
import Dashboard from './Dashboard';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      strikes: 0,
      balls: 0
    };
    console.log("constructor");
  };

  useEffect(() => {
    if(strikes === 0){
      setState({
        strikes: 0,
        balls: 0
      });
    };
  }, [strikes]);

  // componentDidMount() {
  //   const hit = document.querySelector('.hit');
  //   const foul = document.querySelector('.foul');
  //   console.log("component did mount", hit, foul);

  //   hit.addEventListener(() => {
  //     this.state.
  //   })
  // };

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
        <Dashboard />
      </div>
  )}; 
};

export default App;
