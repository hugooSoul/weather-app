import React from 'react';
import WeatherTemperature from './WeatherTemperature.js';
import WeatherExtraInfo from './WeatherExtraInfo.js';
import PropTypes from 'prop-types';
import './styles.css';

const WeatherData = ({data}) => {
  const { temperature, weatherState, humidity, wind } = data;
  return(
    <div className="weatherDataContent">
      <WeatherTemperature temperature={temperature} weatherState={weatherState} />
      <WeatherExtraInfo humidity={humidity} wind={wind} />
    </div>
  );
}

WeatherData.propTypes = {
  data: PropTypes.shape({
    temperature: PropTypes.number.isRequired,
    weatherState: PropTypes.string.isRequired,
    humidity: PropTypes.string.isRequired,
    wind: PropTypes.string.isRequired,
  }),
};

export default WeatherData;
