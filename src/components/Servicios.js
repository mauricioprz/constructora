import React, { Component } from "react";
import "../assets/css/background.css";
import "../assets/css/servicios.css";
//import Imagen_Remodelacion from "../assets/images/servicios/servicios1.jpg";
import Imagen_Diseño from "../assets/images/servicios/servicios2.jpg";
import Imagen_Planeacion from "../assets/images/servicios/servicios3.jpg";
import Imagen_Construccion from "../assets/images/servicios/servicios4.jpg";
import Listado from "./listado";
export default class Servicios extends Component {
  state = {
    data1: {
      text: [
        "Edificación horizontal",
        "Naves industriales",
        "Centros de distribución",
      ],
      img: Imagen_Construccion,
    },
  };

  render() {
    const { data1 } = this.state;
    return (
      <div className="background">
        <div className="marco-row">
          <div className="row-up">
            <div className="row-container">
              <div>
                <h5>Diseño</h5>
                <img
                  className="imagen-left"
                  src={Imagen_Diseño}
                  alt="Imagen de Diseño"
                ></img>
              </div>
              <ul>
                <li>Edificación horizontal</li>
                <li>Naves industriales</li>
                <li>Centros de distribución</li>
                <li>Centros comerciales</li>
                <li>Obra civil de gran tamaño</li>
                <li>Hospitales</li>
              </ul>
            </div>
            <div className="row-container">
              <div>
                <h5>Planeacion</h5>
                <img
                  className="imagen-left"
                  src={Imagen_Planeacion}
                  alt="Imagen de Planeacion"
                ></img>
              </div>
              <ul>
                <li>Edificación horizontal</li>
                <li>Naves industriales</li>
                <li>Centros de distribución</li>
                <li>Centros comerciales</li>
                <li>Obra civil de gran tamaño</li>
                <li>Hospitales</li>
              </ul>
            </div>
          </div>
          <div className="row-down">
            <div className="row-container inv">
              <div>
                <h5>Construccion</h5>
                <img
                  className="imagen-left"
                  src={Imagen_Construccion}
                  alt="Imagen de Construccion"
                ></img>
              </div>
              <ul>
                <li>Edificación horizontal</li>
                <li>Naves industriales</li>
                <li>Centros de distribución</li>
                <li>Centros comerciales</li>
                <li>Obra civil de gran tamaño</li>
                <li>Hospitales</li>
              </ul>
            </div>
            <Listado texto={data1.text} img={data1.img} />
          </div>
        </div>
      </div>
    );
  }
}
