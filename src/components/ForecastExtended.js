import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ForecastItem from './ForecastItem';
import './styles.css'

const days = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thurdsday",
  "Friday",
  "Saturday",
  "Sunday"
]

class ForecastExtended extends Component {

  renderForecastItemDays() {
    return days.map( day => <ForecastItem weekDay={ day } />  );
  }

  render() {
    const city = this.props.city;
    return(
      <div>
        <h2 className="forecast-title">{ city }</h2>
        { this.renderForecastItemDays() }
      </div>
    );
  }
}

ForecastExtended.propTypes = {
  city: PropTypes.string.isRequired,
}

export default ForecastExtended;
