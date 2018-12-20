import React, { Component } from "react";
import AddLocation from "./Location/AddLocation";
import Navbar from "./Header/Navbar";
import LocationCard from "./Location/LocationCard";

import "./App.css";

class App extends Component {
  state = {
    locations: [
      { city: "Charlotte", state: "North Carolina", id: 1 },
      { city: "Loveland", state: "Colorado", id: 2 },
      { city: "San Francisco", state: "California", id: 3 }
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
        <AddLocation addLocation={this.addLocation} />
        <LocationCard deleteLocation={this.deleteLocation} locations={this.state.locations} />
      </div>
    );
  }
}

export default App;
