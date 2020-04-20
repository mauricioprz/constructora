import React, { Component } from "react";
// import videoinicio from "../assets/video/videoinicio.webm";
import "../assets/css/video.css";

export default class Video extends Component {
  render() {
    return (
      <video loop autoPlay muted width="100%" height="100%" loop autoPlay>
        {/* <source src={videoinicio} /> */}
      </video>
    );
  }
}
