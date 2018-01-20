import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Preloader } from 'react-materialize';
import Location from './Location.js';
import WeatherData from './WeatherData';
import transformWeather from './../../services/transformWeather';
import './styles.css';

const url = "http://api.openweathermap.org/data/2.5/weather";
const api_key = "1774ef563dda9e9b0a54091fe568315e";

class WeatherLocation extends Component {

  constructor({ city }) {
    super();
    this.state = {
      city,
      data: null,
    };
  }

  componentWillMount() {
    const { city } = this.state;
    const api_weather = `${url}?q=${city}&appid=${api_key}`;
    fetch(api_weather).then( data => {
      return data.json();
    }).then( weather_data => {
      const data = transformWeather(weather_data);
      this.setState({
        data
      });
    });
  }

  render = () => {
    const { onWeatherLocationClick } = this.props;
    const { city, data } = this.state;
    return (
      <div className="WeatherLocationContent" onClick={onWeatherLocationClick} >
        <Location city={city} />
        {data ? <WeatherData data={data} /> : <Preloader size='big'/> }
      </div>
    );
  };
}

WeatherLocation.propTypes = {
  city: PropTypes.string,
  onWeatherLocationClick: PropTypes.func,
}

//<button onClick={this.handleUpdateClick} >Update</button>
export default WeatherLocation;
