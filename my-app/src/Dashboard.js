import React, { Component } from 'react';
import './App.css';

class Dashboard extends Component {
  constructor(props){
    super(props);
    console.log(props);
    this.state = {
    };
  }
  render() {
    console.log("dash render");
    return (
      <div className="dashboard">
        <h1>Dashboard</h1>
        <button className="strike" onClick={() => this.props.setValues += 1}>Strike</button>
        <button className="ball"onClick={() => this.state.balls += 1}>Ball</button>
        <button className="hit" onClick={() => this.setState({strikes: 0, balls:0})}>Hit</button>
        <button className="foul"onClick={() => this.setState({...this.state, foul: true})}>Foul</button>
      </div>
  )}; 
}

export default Dashboard;
