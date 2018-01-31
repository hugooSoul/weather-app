import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ForecastItem from './ForecastItem';
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
    // fetch
    const url_forecast = `${url}?q=${this.props.city}&appid=${api_key}`;

    fetch(url_forecast).then(
      data => ( data.json() )
    ).then(
      weather_data => {
        console.log(weather_data);
      }
    );
  }

  renderForecastItemDays() {
    return "Render Items";
    //return days.map( day => <ForecastItem weekDay={ day } hour={ 10 } data={data} />  );
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
          this.renderForecastItemDays() :
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
