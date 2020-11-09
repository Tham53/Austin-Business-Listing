import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Typography, Box } from "@material-ui/core";
import MapContainer from "../Map";

const useStyles = makeStyles((theme) => ({
  body: {
    width: "80%",
    marginLeft: "30%",
    marginRight: "30%",
    marginTop: 30,
  },
}));

const Details = ({ businesses, match }) => {
  const classes = useStyles();
  const id = parseInt(match.params.id);
  const business = businesses.find((entry) => entry.id === id);

  return (
    <Box display="flex" flexDirection="column" className={classes.body}>
      <h3>{business.name}</h3>
      <Typography>{business.address}</Typography>
      <Typography>Open Hours: {business.hours}</Typography>
      <Typography>{business.description}</Typography>
      <br></br>
      <div>
        <MapContainer
          lat={business.coordsLat}
          lng={business.coordsLng}
          business={business}
        />
      </div>
    </Box>
  );
};

export default Details;