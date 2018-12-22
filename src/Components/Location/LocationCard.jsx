import React from "react";
import { Card, Fab, Grid } from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";
import "weather-icons/css/weather-icons.css";
//import "./LocationCardStyles.css";

const LocationCard = ({ deleteLocation, locations }) => {
  const locationList = locations.map(location => {
    return (
    <Grid item xs={12} sm={6} key={location.id}>
      <Card className="location-card" elevation={4}>
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
    </Grid>
    );
  });

  return (
    <>
      {locationList}
    </>
  )
};

export default LocationCard;
