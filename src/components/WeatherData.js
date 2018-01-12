import React from 'react';
import WeatherTemperature from './WeatherTemperature.js';
import WeatherExtraInfo from './WeatherExtraInfo.js';

const WeatherData = () => {
  return(
    <div>
      <p>WeatherData</p>
      <WeatherTemperature />
      <WeatherExtraInfo />
    </div>
  );
}

export default WeatherData;
