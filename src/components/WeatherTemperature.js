import React from 'react';
import WeatherIcons from 'react-weathericons';

const getWeatherIcon = weatherState => {
  switch (weatherState) {
    case "night-alt-cloudy":
      return (<WeatherIcons name="night-alt-cloudy" size="2x" />);
    default:
      return (<WeatherIcons name="day-sunny" size="2x" />);
  }
};

const WeatherTemperature = ({temperature, weatherState}) => (
    <div>
      {getWeatherIcon(weatherState)}
      <span>{temperature} ºC</span>
    </div>
);

export default WeatherTemperature;
