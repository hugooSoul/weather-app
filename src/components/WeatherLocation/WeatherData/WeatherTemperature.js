import React from 'react';
import WeatherIcons from 'react-weathericons';
import { NIGHT_CLOUDY,
          CLOUD,
          CLOUDY,
          RAIN,
          WINDY,
          SNOW,
          SUNNY,
          THUNDER,
          DRIZZLE,
      } from './../../../constants/weathers';
import PropTypes from 'prop-types';
import './styles.css';

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
    case SNOW:
      return "day-snow";
    case SUNNY:
      return "day-sunny";
    case THUNDER:
      return "thunderstorm";
    case DRIZZLE:
      return "day-showers";
    default:
      return "day-sunny";
  }
};

const getWeatherIcon = weatherState => {
  return (<WeatherIcons className="wicon" name={stateToIconName(weatherState)} />); //size="4x"
};

const WeatherTemperature = ({temperature, weatherState}) => (
    <div className="WeatherTemperatureContent">
      {getWeatherIcon(weatherState)}
      <span className="temperature">{temperature}</span>
      <span className="temperatureType">ºC</span>
    </div>
);

WeatherTemperature.propTypes = {
  temperature: PropTypes.number.isRequired,
  weatherState: PropTypes.string,
};

export default WeatherTemperature;
