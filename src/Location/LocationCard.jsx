import React from "react";
import { Card, Fab } from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";
import "weather-icons/css/weather-icons.css";
import "./LocationCardStyles.css";

const AddLocationCard = ({ deleteLocation, locations }) => {
  const locationList = locations.map(location => {
    return (
      <div className="location-list" key={location.id}>
        < Card className="location-card" elevation={24}>
          <div className="location-header-wrapper">
            <div className="location-info">
              <span>
                <p className="city-header">{location.city}</p>
              </span>
              <span>
                  <p className="state-header">{location.state}</p>
              </span>
            </div>
            <div className="weather-icon-wrapper">
              <i className="wi wi-day-lightning" />
            </div>
          </div>
          <div className="card-content" />
          <Fab
            type="submit"
            variant="extended"
            color="secondary"
            aria-label="Add"
            id="fab"
            onClick={() => {
              deleteLocation(location.id);
            }}
          >
            <DeleteIcon id="extended-icon" />
            Remove Location
        </Fab>
        </Card>
      </div>
    );
  });

  return (
    <div>
      {locationList}
    </div>
  );
};

export default AddLocationCard;
