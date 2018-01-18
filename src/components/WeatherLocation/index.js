import React, { Component } from 'react';
import Location from './Location.js';
import WeatherData from './WeatherData';
import './styles.css';
import {NIGHT_CLOUDY} from './../../constants/weathers';

const location = "Guadalajara,mx";
const api_key = "1774ef563dda9e9b0a54091fe568315e";
const api_weather = `http://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${api_key}`;

const data1 = {
  temperature: 17,
  weatherState: NIGHT_CLOUDY,
  humidity: 41,
  wind: "5 km/h",
};

class WeatherLocation extends Component {

  constructor() {
    super();
    this.state = {
      city: "Guadalajara, Jal.",
      data: data1,
    };
  }

  handleUpdateClick = () => {

    fetch(api_weather).then( data => {
      console.log(data);
      return data.json();
    }).then( weather_data => {
      console.log(weather_data);
      debugger;
    });

    /*this.setState({
      data: data2,
    });*/
  }

  render = () => {
    const { city, data } = this.state;
    return (
      <div className="WeatherLocationContent">
        <Location city={city} />
        <WeatherData data={data} />
        <button onClick={this.handleUpdateClick} >Update</button>
      </div>
    );
  };
}

export default WeatherLocation;
