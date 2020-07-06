import React, { Component } from "react";
import Collage from "../assets/images/empresa_comprometida/collage2020.jpg";
import "../assets/css/empresa.css";
export default class Unidad extends Component {
  render() {
    return (
      <div className="background nbackground">
        <div className="image-collage">
          <img width="100%" height="100%" src={Collage} alt="Collage" />
        </div>
      </div>
    );
  }
}
