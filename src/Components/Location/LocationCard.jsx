import React from "react";
import {
  Button,
  Card,
  CardContent,
  Grid,
  Typography,
  withStyles
} from "@material-ui/core";

const styles = {
  card: {
    margin: '36px auto',
    marginBottom: '24px',
    width: '90%',
    padding: '14px',
  },
  deleteButton: {
    float: 'right'
  },
};

const LocationCard = ({ deleteLocation, locations, classes }) => {
  const locationList = locations.map(location => {
    return (
      <Grid item xs={12} sm={6} key={location.id}>
        <Card className={classes.card} elevation={4}>
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              {location.city}
            </Typography>
            <Typography component="p">
              {location.state}
            </Typography>
            <Typography gutterBottom variant="h5" component="h2">
              {location.temperature + String.fromCharCode(176)}
            </Typography>
            <Typography gutterBottom variant="h5" component="h2">
              {location.condition.charAt(0).toUpperCase() + location.condition.slice(1)}
            </Typography>
            <Button
              className={classes.deleteButton}
              size="small"
              color="secondary"
              onClick={() => {deleteLocation(location.id)}}
            >
              Remove Location
            </Button>
          </CardContent>
        </Card>
      </Grid>
    );
  });

  return <>{locationList}</>;
};

export default withStyles(styles)(LocationCard)
