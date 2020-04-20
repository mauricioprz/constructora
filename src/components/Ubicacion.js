import React from "react";
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps";
//import './ubicacion.css'; 


const MyMapComponent = withScriptjs(withGoogleMap((props) =>
  <GoogleMap
    defaultZoom={15}
    defaultCenter={{ lat: 19.427490, lng: -99.226841}}
  >
    {props.isMarkerShown && <Marker position={{ lat: 19.427490, lng: -99.226841 }} />}
  </GoogleMap>
))

//19.427490, -99.226841

export default MyMapComponent;
