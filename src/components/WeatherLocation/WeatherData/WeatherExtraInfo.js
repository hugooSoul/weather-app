import React from 'react';
import PropTypes from 'prop-types';
import './styles.css';

const WeatherExtraInfo = ({humidity, wind}) => (
    <div className="WeatherExtraInfoContent">
      <span className="extraInfoText">{`humidity: ${humidity}%`}</span>
      <span className="extraInfoText">{`wind: ${wind}`}</span>
    </div>
);

WeatherExtraInfo.propTypes = {
  humidity: PropTypes.number.isRequired,
  wind: PropTypes.string.isRequired
};

export default WeatherExtraInfo;
