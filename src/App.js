import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';
import { Navbar, Card } from 'react-materialize';
import LocationListContainer from './containers/LocationListContainer';
import ForecastExtended from './components/ForecastExtended';
import './App.css';

const cities = [
  "Mexico City,MX",
  "New York,US",
  "Toronto,CA",
  "Italia,IT"
];

class App extends Component {

  constructor() {
    super();
    this.state = { city: null };
  }

  render() {
    const { city } = this.state;
    return (
      <Grid>
        <Row>
          <Col xs={12}>
            <Navbar brand="Weather App" right></Navbar>
          </Col>
        </Row>
        <Row>
          <Col xs={12} md={6}>
            <LocationListContainer
              cities={cities} />
          </Col>
          <Col xs={12} md={6}>
            <Card>
              <div className="detail">
              {
                city &&
                  <ForecastExtended city={city} />
              }
              </div>
            </Card>
          </Col>
        </Row>
      </Grid>
    );
  }
}
//export default App;

export default App;
