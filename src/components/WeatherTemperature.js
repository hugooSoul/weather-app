import React from 'react';
import WeatherIcons from 'react-weathericons';
import {NIGHT_CLOUDY, CLOUD, CLOUDY, RAIN, WINDY} from './../constants/weathers'

const stateToIconName = weatherState => {
  switch (weatherState) {
    case NIGHT_CLOUDY:
      return "night-alt-cloudy";
    case CLOUD:
      return "cloud";
    case CLOUDY:
      return "cloudy";
    case RAIN:
      return "rain";
    case WINDY:
      return "windy";
    default:
      return "day-sunny";
  }
};

const getWeatherIcon = weatherState => {
  return (<WeatherIcons name={stateToIconName(weatherState)} size="2x" />);
};

const WeatherTemperature = ({temperature, weatherState}) => (
    <div>
      {getWeatherIcon(weatherState)}
      <span>{temperature} ºC</span>
    </div>
);

export default WeatherTemperature;
