import React, { Component } from 'react';
import axios from 'axios';
import AddLocationCard from './AddLocationCard';


class AddLocation extends Component {

  state = {
    city: null,
    state: null,
  }

  componentDidMount() {
    const api_key = process.env.REACT_APP_OPEN_WEATHER_API_KEY;
    axios
      .get(
        `api.openweathermap.org/data/2.5/weather?q=Charlotte&appid=${api_key}`
      )
      .then(res => {
        console.log(res);
      });
  }

  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value
    });
  }

  handleSubmit = (e) => {
    e.preventDefault();
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