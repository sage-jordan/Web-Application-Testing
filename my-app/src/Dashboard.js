import React, { Component } from 'react';
import './App.css';

class Dashboard extends Component (){

    // Constructor receives props
    constructor(props){
        super(props);
        console.log(props);
        // State will be used later to reset stats
        this.state = {
        };  
        // Honestly not sure if this is the corect way or if it will mess it up
        const values = props.values[0][0];
        console.log(values);
        return [values, props.setValues];
    }

    // Passing in Values, tese reset when strikes = 3 or balls = 4, and add strikes with a foul
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
     
    // Renders buttons for Strike, Ball, Hit, and Foul, with respective onClicks
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
