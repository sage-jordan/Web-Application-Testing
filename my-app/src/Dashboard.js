import React from 'react';
import './App.css';

class Dashboard extends React.Component {
  constructor(props){
    super(props);
    this.state = {

    };
  }
  render() {
    console.log("dash render");
    return (
      <div className="dashboard">
          <h1>Dashboard</h1>
        <button className="hit">Hit</button>
        <button className="foul">Foul</button>
      </div>
  )}; 
}

export default Dashboard;
