import React, { Component } from "react";
import Collage0 from "../assets/images/empresa_comprometida/collagehorizontal0.jpg";
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
          <img className="contenedor-marco" width="50%" height="100%" src={Collage} alt="Collage" />
          <img className="contenedor-marco" width="50%" height="100%" src={Collage0} alt="Collage" />
          </div>
          <div className="collagev">
          <img width="100%" height="100%" src={Collage2} alt="Collage2" />
          </div>
        </div>
      </div>
    );
  }
}
