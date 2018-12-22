import React from 'react';
import LocationCard from './LocationCard';

// import './LocationsStyles';



const Locations = ({ locations, deleteLocation }) => {
  return (
    <LocationCard deleteLocation={deleteLocation} locations={locations} />
  )
}

export default Locations