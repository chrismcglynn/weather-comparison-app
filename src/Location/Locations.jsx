import React from 'react';
import LocationCard from './LocationCard';
// import './LocationsStyles';

const Locations = ({ locations, deleteLocation }) => {

  return (
    <div className='location-list'>
      <LocationCard deleteLocation={deleteLocation} locations={locations} />
    </div>
    )
}

export default Locations