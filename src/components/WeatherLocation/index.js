import React from 'react';
import PropTypes from 'prop-types';
import { Preloader } from 'react-materialize';
import Location from './Location.js';
import WeatherData from './WeatherData';
import './styles.css';

const WeatherLocation = ({ onWeatherLocationClick, city, data }) => (

  <div className="WeatherLocationContent" onClick={onWeatherLocationClick} >
    <Location city={city} />
    {data ? <WeatherData data={data} /> : <Preloader size='big'/> }
  </div>

);

WeatherLocation.propTypes = {
  city: PropTypes.string,
  onWeatherLocationClick: PropTypes.func,
  data: PropTypes.shape({
    temperature: PropTypes.number.isRequired,
    weatherState: PropTypes.string.isRequired,
    humidity: PropTypes.number.isRequired,
    wind: PropTypes.string.isRequired,
  }),
}

//<button onClick={this.handleUpdateClick} >Update</button>
export default WeatherLocation;
