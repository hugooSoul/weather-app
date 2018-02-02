import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ForecastItem from './ForecastItem';
import transformForecast from './../services/transformForecast';
import './styles.css'

/*const days = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thurdsday",
  "Friday",
  "Saturday",
  "Sunday"
];

const data = {
  temperature: 10,
  humidity: 10,
  weatherState: "normal",
  wind: "normal",
};*/

const url = "http://api.openweathermap.org/data/2.5/forecast";
const api_key = "1774ef563dda9e9b0a54091fe568315e";

class ForecastExtended extends Component {

  constructor() {
    super();
    this.state = { forecastData: null }
  }

  componentDidMount() {
    this.updateCity(this.props.city);
  }

  componentWillReceiveProps(nextProps) {
    if(nextProps.city !== this.props.city) {
      this.updateCity(nextProps.city);
    }
  }

  updateCity = city => {
    const url_forecast = `${url}?q=${city}&appid=${api_key}`;

    fetch(url_forecast).then(
      data => ( data.json() )
    ).then(
      weather_data => {
        const forecastData = transformForecast(weather_data);
        this.setState({ forecastData }); //forecastData: forecastData
      }
    );
  }

  renderForecastItemDays(forecastData) {
    return forecastData.map( forecast => (
      <ForecastItem
        key={`${forecast.weekDay}${forecast.hour}`}
        weekDay={ forecast.weekDay }
        hour={ forecast.hour }
        data={ forecast.data } />
    ));
  }

  renderProgress()  {
    return(<h4>Loading data...</h4>);
  }

  render() {
    const city = this.props.city;
    const { forecastData } = this.state;
    return(
      <div>
        <h2 className="forecast-title">{ city }</h2>
        { forecastData ?
          this.renderForecastItemDays(forecastData) :
          this.renderProgress()
        }
      </div>
    );
  }
}

ForecastExtended.propTypes = {
  city: PropTypes.string.isRequired,
}

export default ForecastExtended;
