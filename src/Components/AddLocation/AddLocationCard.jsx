import React from "react";
import { Card, Input, Fab } from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import "./AddLocationCardStyles.css";
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  card: {
    padding: theme.spacing.unit * 2,
    color: theme.palette.text.secondary,
    textAlign: 'center',
    margin: '36px auto',
    marginBottom: '24px',
    width: '90%',
  },
});

const AddLocationCard = ({ handleChange, handleSubmit, classes }) => {
  return (
    <Card className={classes.card} elevation={4}>
      <form id="location-form" onSubmit={handleSubmit}>
        <div className="input-group">
          <Input
            required
            fullWidth
            id="city"
            placeholder="City"
            onChange={handleChange}
          />
        </div>
        <div className="input-group">
          <Input
            required
            fullWidth
            id="state"
            placeholder="State"
            onChange={handleChange}
          />
        </div>
        <Fab
          type="submit"
          variant="extended"
          color="primary"
          aria-label="Add"
          id="fab"
        >
          <AddIcon id="extendedIcon" />
          Add Location
        </Fab>
      </form>
    </Card>
  );
};

export default withStyles(styles)(AddLocationCard);