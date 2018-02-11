export const SET_CITY = 'SET_CITY';
export const setCity = payload => ({ type: SET_CITY, payload });

const url = "http://api.openweathermap.org/data/2.5/forecast";
const api_key = "1774ef563dda9e9b0a54091fe568315e";

export const fetchForecast = payload => {
  return distpatch => {

    const url_forecast = `${url}?q=${city}&appid=${api_key}`;

    // active in state a search flag
    fetch(url_forecast).then(
      data => ( data.json() )
    ).then(
      weather_data => {
        const forecastData = transformForecast(weather_data);

        //modify state with promise result (fetch)
      }
    );

  };
};
