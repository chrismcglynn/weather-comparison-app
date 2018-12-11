import React from "react";
import { Card, Input, Fab } from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import "./AddLocationCardStyles.css";

const AddLocationCard = ({ handleChange, handleSubmit }) => {
 
  return (
    <div>
      <Card className="addLocationCard" elevation={24}>
        <h2>Please Enter your City and State:</h2>
        <form
          id="location-form"
          onSubmit={handleSubmit}>
          <div className="input-group">
            <Input
              required
              fullWidth
              id="city"
              placeholder="City"
              onChange={handleChange} />
          </div>
          <div className="input-group">
            <Input
              required
              fullWidth
              id="state"
              placeholder="State"
              onChange={handleChange} />
          </div>
          <Fab
            type="submit"
            variant="extended"
            color="primary"
            aria-label="Add"
            id="fab"
          >
            <AddIcon id="extended-icon" />
            Add Location
          </Fab>
        </form>
      </Card>
    </div>
  );
};

export default AddLocationCard