import React, { Component } from 'react';
import Location from './Location.js';
import WeatherData from './WeatherData';
import './styles.css';
import {NIGHT_CLOUDY, WINDY} from './../../constants/weathers';

const data1 = {
  temperature: 17,
  weatherState: NIGHT_CLOUDY,
  humidity: 41,
  wind: "5 km/h",
};

const data2 = {
  temperature: 6,
  weatherState: WINDY,
  humidity: 20,
  wind: "5 km/h",
};

class WeatherLocation extends Component {

  constructor() {
    super();
    this.state = {
      city: "Guadalajara, Jal.",
      data: data1,
    };
  }

  handleUpdateClick = () => {
    this.setState({
      data: data2,
    });
    console.log("Actualizado");
  }

  render = () => {
    const { city, data } = this.state;
    return (
      <div className="WeatherLocationContent">
        <Location city={city} />
        <WeatherData data={data} />
        <button onClick={this.handleUpdateClick} >Update</button>
      </div>
    );
  };
}

export default WeatherLocation;
