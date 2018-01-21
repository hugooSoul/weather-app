import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';
import { Navbar, Card } from 'react-materialize';
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
          <Col xs={12}>
            <Navbar brand="Weather App" right></Navbar>
          </Col>
        </Row>
        <Row>
          <Col xs={12} md={6}>
            <LocationList
              cities={cities}
              onSelectedLocation={this.handleSelectedLocation}
            />
          </Col>
          <Col xs={12} md={6}>
            <Card>
              <div className="detail"></div>
            </Card>
          </Col>
        </Row>
      </Grid>
    );
  }
}

export default App;
