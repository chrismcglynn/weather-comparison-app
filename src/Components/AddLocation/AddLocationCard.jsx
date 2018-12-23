import React from "react";
import { Button, Card, Input, withStyles } from "@material-ui/core";

const styles = theme => ({
  card: {
    padding: theme.spacing.unit * 2,
    color: theme.palette.text.secondary,
    textAlign: "center",
    margin: "36px auto",
    marginBottom: "24px",
  },
  container: {
    display: "flex",
    flexWrap: "wrap"
  },
  input: {
    margin: theme.spacing.unit
  }
});

const AddLocationCard = ({ handleChange, handleSubmit, classes }) => {
  return (
    <Card className={classes.card} elevation={4}>
      <form id="location-form" onSubmit={handleSubmit}>
        <div className={classes.container}>
          <Input
            className={classes.input}
            required
            fullWidth
            id="city"
            placeholder="City"
            onChange={handleChange}
          />
          <Input
            className={classes.input}
            required
            fullWidth
            id="state"
            placeholder="State"
            onChange={handleChange}
          />
        </div>
        <Button type="submit" size="small" color="primary">
          Add Location
        </Button>
      </form>
    </Card>
  );
};

export default withStyles(styles)(AddLocationCard);
