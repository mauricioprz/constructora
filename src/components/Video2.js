import React, { Component } from "react";
import remconvideo from "../assets/video/remconvideo.webm";
import "../assets/css/video.css";

export default class Video extends Component {
  render() {
    return (
      <video loop muted autoPlay controls width="100%" height="100%">
        <source src={remconvideo} />
      </video>
    );
  }
}
