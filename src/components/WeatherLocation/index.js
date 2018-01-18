import React, { Component } from 'react';
import Location from './Location.js';
import WeatherData from './WeatherData';
import './styles.css';
import {NIGHT_CLOUDY} from './../../constants/weathers';

const data = {
  temperature: 17,
  weatherState: NIGHT_CLOUDY,
  humidity: 41,
  wind: "5 km/h",
};

class WeatherLocation extends Component {
  render = () => (
    <div className="WeatherLocationContent">
      <Location city={"Guadalajara, Jal."} />
      <WeatherData data={data} />
    </div>
  );
}

export default WeatherLocation;
