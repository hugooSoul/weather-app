import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { setSelectedCity, setWeather } from './../actions';
import { getWeatherCities, getCity } from './../reducers';
import LocationList from './../components/LocationList';

class LocationListContainer extends Component {

  componentDidMount() {
    const { setWeather, setCity, cities, city } = this.props;
    setWeather(cities);

    setCity(city);
  }

  handleSelectedLocation = city => {
    this.props.setSelectedCity(city);
  }

  render(){
    return (
      <LocationList
        cities={this.props.citiesWeather}
        onSelectedLocation={this.handleSelectedLocation}
      />
    );
  }

}

LocationListContainer.propTypes = {
  setCity: PropTypes.func.isRequired,
  setSelectedCity: PropTypes.func.isRequired,
  //setWeather: PropTypes.func.isRequired,
  cities: PropTypes.array.isRequired,
  citiesWeather: PropTypes.array,
  city: PropTypes.string.isRequired,
}

const mapDispatchToProps = dispatch => ({
  setCity: value => dispatch(setSelectedCity(value)),
  setSelectedCity: value => dispatch(setSelectedCity(value)),
  setWeather: cities => dispatch(setWeather(cities))
});

const mapStateToProps = state => ({
  citiesWeather: getWeatherCities(state),
  city: getCity(state)
});

export default connect(mapStateToProps, mapDispatchToProps)(LocationListContainer);
