import React from "react";
import { Card, Fab } from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";
import "weather-icons/css/weather-icons.css";
import "./LocationCardStyles.css";

const AddLocationCard = () => {
  return (
    <div>
      <Card className="location-card" elevation={24}>
        <div className="location-header-wrapper">
          <div className="location-info">
            <span>
              <p className="city-header">Charlotte</p>
            </span>
            <span>
              <p className="state-header">North Carolina</p>
            </span>
          </div>
          <div className="weather-icon-wrapper">
            <i className="wi wi-day-lightning" />
          </div>
        </div>
        <div className="card-content">
        </div>
        <Fab
          type="submit"
          variant="extended"
          color="secondary"
          aria-label="Add"
          id="fab"
        >
          <DeleteIcon id="extended-icon" />
          Remove Location
        </Fab>
      </Card>
    </div>
  );
};

export default AddLocationCard
