import React, { Component } from "react";
import AddLocation from "./Components/AddLocation/AddLocation";
import Navbar from "./Components/Header/Navbar";
import Locations from './Components/Location/Locations';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import "./App.css";

const styles = theme => ({
  root: {
    flexGrow: 1,
  },
});

class App extends Component {
  state = {
    locations: [
      {
        id: 1,
        city: "Charlotte",
        state: "North Carolina",
        temperature: 50,
        condition: 'Partly Cloudy'
      },
      {
        id: 2,
        city: "Loveland",
        state: "Colorado",
        temperature: 60,
        condition: 'Clear Sky'
      },
      { 
        id: 3, 
        city: "San Francisco", 
        state: "California",
        temperature: 75,
        condition: 'Rainy'
      }
    ]
  };

  addLocation = location => {
    location.id = Math.floor(Math.random() * 1000 + 1);
    let locations = [...this.state.locations, location];
    this.setState({
      locations
    });
  };

  deleteLocation = id => {
    let locations = this.state.locations.filter(location => location.id !== id);
    this.setState({
      locations
    });
  };

  render() {
    return (
      <div className="App">
        <Navbar />
        <div className='classes.root'>
          <Grid container>
            <Grid item xs={12}>
              <AddLocation addLocation={this.addLocation} />
            </Grid>
            <Grid container>
              <Locations locations={this.state.locations} deleteLocation={this.deleteLocation} />
            </Grid>
          </Grid>
        </div>
    </div>
    );
  }
}

export default withStyles(styles)(App)
