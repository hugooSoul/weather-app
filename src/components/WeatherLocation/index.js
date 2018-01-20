import React, { Component } from 'react';
import { Preloader } from 'react-materialize';
import Location from './Location.js';
import WeatherData from './WeatherData';
import transformWeather from './../../services/transformWeather';
import './styles.css';

const location = "Guadalajara,mx";
const api_key = "1774ef563dda9e9b0a54091fe568315e";
const api_weather = `http://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${api_key}`;

class WeatherLocation extends Component {

  constructor() {
    super();
    this.state = {
      city: "Guadalajara, Jal.",
      data: null,
    };
  }

  handleUpdateClick = () => {
    fetch(api_weather).then( data => {
      return data.json();
    }).then( weather_data => {
      const data = transformWeather(weather_data);
      this.setState({
        data
      });
    });
  }

  componentWillMount() {
    this.handleUpdateClick();
  }

  render = () => {
    const { city, data } = this.state;
    return (
      <div className="WeatherLocationContent">
        <Location city={city} />
        {data ? <WeatherData data={data} /> : <Preloader size='big'/> }
      </div>
    );
  };
}
//<button onClick={this.handleUpdateClick} >Update</button>
export default WeatherLocation;
