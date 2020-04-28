import React, { Component } from "react";
import Imagen_background from "../assets/images/nosotros/nosotros-toma1.jpg";
import "../assets/css/nosotros.css";
import "../assets/css/inicio.css";
import Cascos from "./Cascos";

export default class Nosotros extends Component {
  render() {
    return (
      <div className="background nbackground">
        <img
          className="imagen_de_noche"
          src={Imagen_background}
          alt="Imagen de fondo"
        ></img>
        <div className="marco-nosotros">
          <Cascos />
        </div>
      </div>
    );
  }
}
