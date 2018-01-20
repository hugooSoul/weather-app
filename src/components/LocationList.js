import React from 'react';
import WeatherLocation from './WeatherLocation';

const LocationList = () => {
  return (
    <div>
      <WeatherLocation city={"Guadalajara,MX"} />
      <WeatherLocation city={"Mexico City,MX"} />
      <WeatherLocation city={"New York,US"} />
      <WeatherLocation city={"Toronto,CA"} />
    </div>
  );
};

export default LocationList;
