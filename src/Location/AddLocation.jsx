import React, { Component } from 'react';
import AddLocationCard from './AddLocationCard';
import axios from 'axios';


class AddLocation extends Component {

  state = {
    city: null,
    state: null,
  }
  
  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value
    });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const api_url = process.env.REACT_APP_DEV_API_URL;
    const api_key = process.env.REACT_APP_OPEN_WEATHER_API_KEY;
    const cityInput = document.getElementById('city').value;
    console.log(cityInput);
    axios
      .get(
        api_url + `${cityInput}` + api_key
      )
      .then(res => {
        console.log(res.data);
      });
    this.props.addLocation(this.state);
    document.getElementById('location-form').reset();
  }

  render() {
    return (
      <div>
        <AddLocationCard
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
        />
      </div>
    )
  }
}

export default AddLocation