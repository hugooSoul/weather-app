import convert from 'convert-units';
import { CLOUDY,
          RAIN,
          SNOW,
          SUNNY,
          THUNDER,
          DRIZZLE,
      } from './../constants/weathers';

const getWeatherState = weather => {
  const { id } = weather[0];

  if(id < 300) {
    return THUNDER;
  } else if (id < 400) {
    return DRIZZLE;
  } else if(id < 600) {
    return RAIN;
  } else if(id < 700) {
    return SNOW;
  } else if(id === 800) {
    return SUNNY;
  } else {
    return CLOUDY;
  }

}

const getTemp = kelvin => {
  return convert(kelvin).from('K').to('C').toFixed(1); //toFixed(2)
}

const transformWeather = weather_data => {
  const { weather } = weather_data;
  const { humidity, temp } = weather_data.main;
  const { speed } = weather_data.wind;
  const weatherState = getWeatherState(weather);
  const temperature = parseInt(getTemp(temp), 10);

  const data = {
    humidity,
    temperature,
    weatherState,
    wind: `${speed} m/s`,
  }

  return data;
}

export default transformWeather;
