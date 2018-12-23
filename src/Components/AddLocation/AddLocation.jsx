import React, { Component } from 'react';
import AddLocationCard from './AddLocationCard';
import axios from 'axios';


class AddLocation extends Component {

  state = {
    city: null,
    state: null,
  }

  getLocation = () => {
    const api_url = process.env.REACT_APP_DEV_API_URL;
    const api_key = process.env.REACT_APP_OPEN_WEATHER_API_KEY;
    const cityInput = document.getElementById('city').value;
    console.log(cityInput);
    axios
      .get(
        api_url + `${cityInput}&units=imperial` + api_key
      )
      .then(res => {
        console.log(res.data)
        console.log(Math.round(res.data.main.temp));
        console.log(res.data.weather[0].description);
      });
    this.props.addLocation(this.state);
  }

  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value
    });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.getLocation();
    document.getElementById('location-form').reset();
  }

  render() {
    return (
      <AddLocationCard
        handleChange={this.handleChange}
        handleSubmit={this.handleSubmit}
      />
    )
  }
}

export default AddLocation