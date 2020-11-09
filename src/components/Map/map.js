import React from "react";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";

const MapContainer = (props) => {
  const [selectedBusiness, setSelectedBusiness] = React.useState(null);
  const mapStyles = {
    height: "65vh",
    width: "75%",
  };

  const defaultCenter = {
    lat: props.lat,
    lng: props.lng,
  };

  const API_KEY = "AIzaSyCjEw8l0mmrJFaG6WyJt1-KIdXR6ztO_TY";
  return (
    <LoadScript googleMapsApiKey={API_KEY}>
      <GoogleMap mapContainerStyle={mapStyles} zoom={15} center={defaultCenter}>
        <Marker
          position={{
            lat: props.lat,
            lng: props.lng,
          }}
          onClick={() => {
            setSelectedBusiness(selectedBusiness);
          }}
        />
      </GoogleMap>
    </LoadScript>
  );
};

export default MapContainer;