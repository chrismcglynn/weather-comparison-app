import React from "react";

const Locations = ({ locations, deleteLocation }) => {
  const locationList = locations.map(location => {
    return (
      <div className="location" key={location.id}>
        <div>City: {location.city}</div>
        <div>State: {location.state}</div>
        <button
          onClick={() => {
            deleteLocation(location.id);
          }}
        >
          Delete Location
        </button>
      </div>
    );
  });

  return (
    <div className="location-list">
      {locationList}
    </div>
  );
};

export default Locations;
