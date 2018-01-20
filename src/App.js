import React, { Component } from 'react';
import './App.css';
import WeatherLocation from './components/WeatherLocation';

class App extends Component {
  render() {
    console.log("debugger");
    return (
      <div className="App">
        <WeatherLocation />
      </div>
    );
  }
}

export default App;
