import React, { Component } from "react";
import remconvideo from "../assets/video/remconvideo.mp4";
import "../assets/css/video.css";

export default class Video extends Component {
  render() {
    return (
      <video
        id="videog"
        className="video-size"
        typeof="video/mp4"
        controls
        autoPlay
      >
        <source src={remconvideo} />
      </video>
    );
  }
}
