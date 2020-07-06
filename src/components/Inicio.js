import React, { Component } from "react";
import "../assets/css/inicio.css";
import "../assets/css/background.css";
import Imagen_antesydespues1 from "../assets/images/inicio/antesydespues1.jpg";
import VideoInicio from "./Video1";
import { Link } from "react-router-dom";

export default class Inicio extends Component {
  state = {
    dclass: "background",
  };

  render() {
    return (
      <div className={this.state.dclass}>
        <div className="marco">
          <div className="start-left">
            <div className="video1">
              <VideoInicio video="videoIn" />
            </div>
          </div>
          <div className="start-right">
            <div className="bienvenidos">
              <div className="bienvenidos-title">
                <h1>Remcon Constructora</h1>
              </div>
              <div className="bienvenidos-text">
                <h3>
                  Quienes somos?
                  <br />
                  <br />
                  Empresa con más de 8 años de experiencia formada por un grupo
                  de ingenieros y arquitectos comprometidos ética y
                  profesionalmente satisfaciendo las necesidades de nuestros
                  clientes.
                </h3>
              </div>
            </div>
            <div className="link">
              <Link to="/Proyectos">
                <img
                  className="imagen-left"
                  src={Imagen_antesydespues1}
                  alt="a proyectos"
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
