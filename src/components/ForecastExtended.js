import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ForecastExtended extends Component {
  render() {
    const city = this.props.city;
    return(
      <div>
        <h2>{ city }</h2>
      </div>
    );
  }
}

ForecastExtended.propTypes = {
  city: PropTypes.string.isRequired,
}

export default ForecastExtended;