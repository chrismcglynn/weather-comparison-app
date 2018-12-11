import React from "react";
import { Card, Input, Fab } from "@material-ui/core";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import DeleteIcon from "@material-ui/icons/Delete";
import "./AddLocationCardStyles.css";

const styles = theme => ({
  fab: {
    margin: theme.spacing.unit
  },
  extendedIcon: {
    marginRight: theme.spacing.unit
  }
});

const AddLocationCard = ({ handleChange, handleSubmit, handleMouseEnter, handleMouseLeave, classes }) => {

  return (
    <div>
      <Card className="addLocationCard">
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
            color="secondary"
            aria-label="Add"
            className={classes.fab}
          >
            <DeleteIcon className={classes.extendedIcon} />
            Remove Location
          </Fab>
        </form>
      </Card>
    </div>
  );
};

AddLocationCard.propTypes = {
  classes: PropTypes.object.isRequired
};


export default withStyles(styles)(AddLocationCard);