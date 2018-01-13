import React from 'react';
import WeatherTemperature from './WeatherTemperature.js';
import WeatherExtraInfo from './WeatherExtraInfo.js';

const WeatherData = () => {
  return(
    <div>
      <p>WeatherData goes here</p>
      <WeatherTemperature temperature={13} />
      <WeatherExtraInfo humidity={80} wind={"10m/s"} />
    </div>
  );
}

export default WeatherData;
