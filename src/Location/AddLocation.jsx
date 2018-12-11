import React, { Component } from 'react';
import AddLocationCard from './AddLocationCard';


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