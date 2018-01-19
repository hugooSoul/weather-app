import convert from 'convert-units';
import {NIGHT_CLOUDY} from './../constants/weathers';

const getWeatherState = weather => {
  return NIGHT_CLOUDY;
}

const getTemp = kelvin => {
  return convert(kelvin).from('K').to('C'); //toFixed(2)
}

const transformWeather = weather_data => {
  const { humidity, temp } = weather_data.main;
  const { speed } = weather_data.wind;
  const weatherState = getWeatherState(this.weather);
  const temperature = getTemp(temp);

  const data = {
    humidity,
    temperature,
    weatherState,
    wind: `${speed} m/s`,
  }

  return data;
}

export default transformWeather;
