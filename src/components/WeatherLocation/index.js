import React from 'react';
import Location from './Location.js';
import WeatherData from './WeatherData';
import './styles.css';
import {NIGHT_CLOUDY} from './../../constants/weathers';

const data = {
  temperature: 12,
  weatherState: NIGHT_CLOUDY,
  humidity: 10,
  wind: "10 m/s",
};

const WeatherLocation = () => (
    <div className="WeatherLocationContent">
      <Location city={"Guadalajara, Jal."} />
      <WeatherData data={data} />
    </div>
);

export default WeatherLocation;
