import React, { Component } from 'react';
import LocationList from './components/LocationList';
import './App.css';

const cities = [
  "Mexico City,MX",
  "New York,US",
  "Toronto,CA",
  "Italia,IT"
];

class App extends Component {

  handleSelectedLocation = city => {
    console.log("handleSelectedLocation");
  }

  render() {
    return (
      <div className="App">
        <LocationList
          cities={cities}
          onSelectedLocation={this.handleSelectedLocation}
        />
      </div>
    );
  }
}

export default App;
