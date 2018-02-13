import transformForecast from './../services/transformForecast';

export const SET_FORECAST_DATA = 'SET_FORECAST_DATA';
export const SET_CITY = 'SET_CITY';

const setCity = payload => ({ type: SET_CITY, payload });
const setForecastData = payload => ({ type: SET_FORECAST_DATA, payload});

const url = "http://api.openweathermap.org/data/2.5/forecast";
const api_key = "1774ef563dda9e9b0a54091fe568315e";

export const setSelectedCity = payload => {
  return distpatch => {

    const url_forecast = `${url}?q=${payload}&appid=${api_key}`;

    // active in state a search flag
    distpatch(setCity(payload));

    return fetch(url_forecast).then(
      data => ( data.json() )
    ).then(
      weather_data => {
        const forecastData = transformForecast(weather_data);

        // modify state with promise result (fetch)
        distpatch(setForecastData({city: payload, forecastData}));
      }
    );

  };
};
