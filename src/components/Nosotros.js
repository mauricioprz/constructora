import React, { Component } from "react";
import Fotonosotros from "../assets/images/nosotros/de_noche.jpg";
import "../assets/css/nosotros.css";
import "../assets/css/inicio.css";
import Cascos from './Cascos'

export default class Nosotros extends Component {
  render() {
    return (
      <div className="background">
        
        <img className="fondo-blur" src={Fotonosotros} alt="Foto de nosotros"></img>
          <div className="marco-nosotros">
            
            <Cascos/>
          </div>
      </div>   
    );
  }
}
