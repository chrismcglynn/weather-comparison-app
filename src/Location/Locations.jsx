import React from 'react';
import LocationCard from './LocationCard';
import './LocationsStyles';

const Locations = ({ locations }) => {
  
  const locationList = locations.map(location => {
    return (
      <div className='location' key={location.id}>
        <LocationCard />
      </div>
    )
  })

  state = {
    city: null,
    state: null,
  }

  return (
    <div className='location-list'>
        {locationList}
    </div>
    )
}

export default Locations