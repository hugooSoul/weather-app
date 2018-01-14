import React from 'react';
import WeatherTemperature from './WeatherTemperature.js';
import WeatherExtraInfo from './WeatherExtraInfo.js';
import {CLOUDY} from './../../../constants/weathers';
import './styles.css';

const WeatherData = () => {
  return(
    <div className="weatherDataContent">
      <WeatherTemperature temperature={13} weatherState={CLOUDY} />
      <WeatherExtraInfo humidity={80} wind={"10m/s"} />
    </div>
  );
}

export default WeatherData;
