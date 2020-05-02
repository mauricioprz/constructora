import React from "react";
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker,
} from "react-google-maps";

const MyMapComponent = withScriptjs(
  withGoogleMap((props) => (
    <GoogleMap
      defaultZoom={17}
      defaultCenter={{ lat: 19.42749, lng: -99.226841 }}
    >
      {props.isMarkerShown && (
        <Marker position={{ lat: 19.42749, lng: -99.226841 }} />
      )}
    </GoogleMap>
  ))
);

//19.427490, -99.226841

export default MyMapComponent;
