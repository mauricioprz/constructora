import React, { Component } from "react";
//import Tarjetas from './Tarjetas';
import '../assets/css/background.css';
import "../assets/css/servicios.css";
import Fotoservicios from "../assets/images/concreto.jpg";

export default class Servicios extends Component {
  render() {
    return (
      <div className="background">
        <div className="marco-row">
          <div className="row-up">
            <div className="row-container">
              <div>
              <h5>Diseño</h5>
              <img className="imagen-left" src={Fotoservicios} alt="Imagen de Diseño"></img>
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
              <img className="imagen-left" src={Fotoservicios} alt="Imagen de Planeacion"></img>
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
              <img className="imagen-left" src={Fotoservicios} alt="Imagen de Construccion"></img>
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
            <div className="row-container inv">
              <div>
        <h5>Arquitectura</h5>
              <img className="imagen-left" src={Fotoservicios} alt="Imagen de Arquitectura"></img>
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
        </div>
      </div>
    );
  }
}
