import React from 'react';
import Location from './Location.js';
import WeatherData from './WeatherData.js';

const WeatherLocation = () => (
    <div>
      <Location city={"Guadalajara, Jal."} />
      <WeatherData />
    </div>
);

export default WeatherLocation;
