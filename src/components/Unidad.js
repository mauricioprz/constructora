import React, { Component } from "react";
import Collage from "../assets/images/empresa_comprometida/collagehorizontal.jpg";
import Collage2 from "../assets/images/empresa_comprometida/collagevertical.jpg";
import "../assets/css/empresa.css";
import "../assets/css/background.css"
export default class Unidad extends Component {
  render() {
    return (
      <div className="background backgroundc">
        <div className="image-collage">
          <div className="collageh">
          <img width="100%" height="100%" src={Collage} alt="Collage" />
          </div>
          <div className="collagev">
          <img width="100%" height="100%" src={Collage2} alt="Collage2" />
          </div>
        </div>
      </div>
    );
  }
}
