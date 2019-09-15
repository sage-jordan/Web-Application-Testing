import React, { Component } from 'react';
import './App.css';

class Dashboard extends Component (){
  constructor(props){
    super(props);
    console.log(props);
    this.state = {
    };
    const values = props.values[0][0];
    console.log(values);
    return [values, props.setValues];
  }

  componentDidUpdate(values) {
    if (values.strikes == 3 || values.balls === 4) {
      this.setState({
        strikes: 0,
        balls: 0,
        foul: false
      })
    }
    if(values.foul && values.strikes <= 2){
      this.state.strikes += 1;
    }
  }

  render(values, props) {
    console.log("dash render");
    return (
      <div className="dashboard">
        <h1>Dashboard</h1>
        <button className="strike" onClick={() => values.strikes += 1}>Strike</button>
        <button className="ball"onClick={() => values.balls += 1}>Ball</button>
        <button className="hit" onClick={() => props.setValues({strikes: 0, balls:0})}>Hit</button>
        <button className="foul"onClick={() => props.setValues({...this.state, foul: true})}>Foul</button>
      </div>
  )}; 
}

export default Dashboard;
