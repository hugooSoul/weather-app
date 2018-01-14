import React from 'react';
import Location from './Location.js';
import WeatherData from './WeatherData';
import './styles.css';

const WeatherLocation = () => (
    <div className="WeatherLocationContent">
      <Location city={"Guadalajara, Jal."} />
      <WeatherData />
    </div>
);

export default WeatherLocation;
