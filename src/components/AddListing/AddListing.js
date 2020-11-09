import React, { useState, useEffect, useRef } from "react";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";
import Geocode from "react-geocode";

import {
  Container,
  TextField,
  Button,
  Typography,
  Box,
  Grid,
  Paper,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { Clear } from "@material-ui/icons";

const useStyles = makeStyles((theme) => ({
  body: {
    marginTop: 60,
  },
}));

const AddListing = (props) => {
  const classes = useStyles();

  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [hours, setHours] = useState("");
  const [description, setDescription] = useState("");
  const [lat, setLat] = useState("");
  const [lng, setLng] = useState("");
  const [selectedBusiness, setSelectedBusiness] = React.useState(null);
  const stateAddressLength = props.businesses.length;

  const newAddress = {
    id: stateAddressLength + 1,
    name: name,
    description: description,
    address: address,
    hours: hours,
    coordsLat: lat,
    coordsLng: lng,
  };

  Geocode.setApiKey("AIzaSyCjEw8l0mmrJFaG6WyJt1-KIdXR6ztO_TY");
  Geocode.setApiKey("AIzaSyCjEw8l0mmrJFaG6WyJt1-KIdXR6ztO_TY");
  console.log("AIzaSyCjEw8l0mmrJFaG6WyJt1-KIdXR6ztO_TY");

  Geocode.fromAddress(address).then(
    (response) => {
      const { lat, lng } = response.results[0].geometry.location;
      console.log(lat, lng);
      setLat(lat);
      setLng(lng);
    },
    (error) => {
      console.error(error);
    }
  );

  useEffect(() => {
    console.log(Clear);
    console.log(props.businesses);
  });

  const handleTextChange = (evt) => {
    if (evt.target.name === "name") {
      setName(evt.target.value);
    }
    if (evt.target.name === "address") {
      setAddress(evt.target.value);
    }
    if (evt.target.name === "hours") {
      setHours(evt.target.value);
    }
    if (evt.target.name === "description") {
      setDescription(evt.target.value);
    }
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();
    props.addBusiness(newAddress);
  };
 
  // Map Styling
  const mapStyles = {
    height: "60vh",
    width: "100%",
  };

  const defaultCenter = {
    lat: Number(lat),
    lng: Number(lng),
  };

  // Cleared input fields.
  // Assigned variables in textfields.
  let textInput1 = useRef(null);
  let textInput2 = useRef(null);
  let textInput3 = useRef(null);
  let textInput4 = useRef(null);

  return (
    <Container mx="auto">
      <Paper className={classes.body} elevation={3}>
        <Grid container spacing={3}>
          <Grid item xs={6}>
            <Box p={4} display="flex" flexDirection="column">
              <Typography variant="h6" style={{ paddingLeft: 15 }}>
                Add A New Business:
              </Typography>
              <form onSubmit={handleSubmit}>
                <TextField
                  required
                  name="name"
                  onChange={handleTextChange}
                  style={{ margin: 6 }}
                  placeholder="Name"
                  fullWidth
                  inputRef={textInput1}
                />
                <TextField
                  required
                  name="address"
                  onChange={handleTextChange}
                  style={{ margin: 6 }}
                  placeholder="Address"
                  fullWidth
                  inputRef={textInput2}
                />
                <TextField
                  required
                  name="hours"
                  onChange={handleTextChange}
                  style={{ margin: 6 }}
                  placeholder="Hours (Example: 8am-9pm)"
                  fullWidth
                  inputRef={textInput3}
                />
                <TextField
                  required
                  name="description"
                  onChange={handleTextChange}
                  style={{ margin: 6 }}
                  placeholder="Description"
                  fullWidth
                  inputRef={textInput4}
                />
                <Button
                  type="submit"
                  variant="contained"
                  color="primary"
                  style={{
                    marginTop: 25,
                    width: "50%",
                    left: "25%",
                  }}
                  onClick={() => {
                    setTimeout(() => {
                      textInput1.current.value = "";
                      textInput2.current.value = "";
                      textInput3.current.value = "";
                      textInput4.current.value = "";
                    }, 100);
                  }}
                >
                  Add Listing
                </Button>
              </form>
            </Box>
          </Grid>
          <Grid item xs={6}>
            <Box
              m={4}
              display="flex"
              flexDirection="column"
              border={1}
              borderColor="grey.500"
              borderRadius="borderRadius"
            >
              <LoadScript googleMapsApiKey="AIzaSyCjEw8l0mmrJFaG6WyJt1-KIdXR6ztO_TY">
                <GoogleMap
                  mapContainerStyle={mapStyles}
                  zoom={15}
                  center={defaultCenter}
                >
                  <Marker
                    position={{
                      lat: Number(lat),
                      lng: Number(lng),
                    }}
                    onClick={() => {
                      setSelectedBusiness(selectedBusiness);
                    }}
                  />
                </GoogleMap>
              </LoadScript>
            </Box>
          </Grid>
        </Grid>
      </Paper>
    </Container>
  );
};

export default AddListing;
