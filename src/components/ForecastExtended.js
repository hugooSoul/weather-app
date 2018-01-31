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

class ForecastExtended extends Component {

  constructor() {
    super();
    this.state = { forecastData: null }
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
