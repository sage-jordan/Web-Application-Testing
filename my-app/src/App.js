import React, { useEffect } from 'react';
import './App.css';
import Dashboard from './Dashboard';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      strikes: 0,
      balls: 0,
      foul: false
    };
    console.log("constructor");
  };

  componentDidMount() {
    const [values, setValues] = useLocalStorage(key, this.state || {});
  }

  componentDidUpdate() {
    if (this.state.strikes == 3 || this.state.balls === 4) {
      this.setState({
        strikes: 0,
        balls: 0,
        foul: false
      })
    }
    if(foul && strikes <= 2){
      this.state.strikes += 1;
    }
  }

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
        <Dashboard values={values} setValues={setValues}/>
      </div>
  )}; 
};

export default App;
