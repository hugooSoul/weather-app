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
    console.log("handleSelectedLocation");
  }

  render() {
    return (
      <Grid fluid>
        <Row>
          <Col md={12}>12 md</Col>
        </Row>
      </Grid>
      /*<div className="App">
        <LocationList
          cities={cities}
          onSelectedLocation={this.handleSelectedLocation}
        />
      </div>*/
    );
  }
}

export default App;
