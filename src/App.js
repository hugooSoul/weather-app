import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';
import LocationList from './components/LocationList';
import './App.css';

const cities = [
  "Mexico City,MX",
  "New York,US",
  "Toronto,CA",
  "Italia,IT"
];

class App extends Component {

  handleSelectedLocation = city => {

  }

  render() {
    return (
      <Grid>
        <Row>
          <h2>TITULO</h2>
        </Row>
        <Row>
          <Col xs={12} md={6}>
            <LocationList
              cities={cities}
              onSelectedLocation={this.handleSelectedLocation}
            />
          </Col>
        </Row>
      </Grid>
    );
  }
}

export default App;
