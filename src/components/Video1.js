import React, { Component } from "react";
import videoInicio from "../assets/video/videoinicio.mp4";
import "../assets/css/video.css";
//import { Modal, Button } from "react-bootstrap";
export default class Video extends Component {
  
  render() {
    return (
      <div>
        <video
          muted
          controls
          autoPlay
          loop
          width="100%"
          height="100%"
          typeof="video/mp4"
          src={videoInicio}
          
        ></video>

       
      </div>
    );
  }
}
