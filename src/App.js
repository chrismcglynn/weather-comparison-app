import React, { Component } from "react";
import Locations from "./Location/Locations";
import AddLocation from "./Location/AddLocation";
import Navbar from "./Header/Navbar";
import LocationCard from "./Location/LocationCard";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { faCheckSquare, faCoffee } from "@fortawesome/free-solid-svg-icons";

import "./App.css";

library.add(fab, faCheckSquare, faCoffee);

class App extends Component {
  state = {
    locations: [
      { city: "Charlotte", state: "North Carolina", id: 1 },
      { city: "Loveland", state: "Colorado", id: 2 },
      { city: "San Fransisco", state: "California", id: 3 }
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
        <h2>Please Enter your City and State:</h2>
        <AddLocation addLocation={this.addLocation} />
        <LocationCard />
        <Locations
          deleteLocation={this.deleteLocation}
          locations={this.state.locations}
        />
      </div>
    );
  }
}

export default App;
