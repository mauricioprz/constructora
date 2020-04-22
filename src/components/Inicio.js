import React, { Component } from "react";
import "../assets/css/inicio.css";
import "../assets/css/background.css";
//import Foto1 from "../assets/images/inicio/FOTOS CON GOTA DE AGUA.jpg";
import Foto2 from "../assets/images/antesydespues.jpg";
import VideoInicio from "./Video1";
import { Link } from "react-router-dom";

export default class Inicio extends Component {
  render() {
    return (
      <div className="background">
        <div className="marco">
          <div className="start-left">
            <div className="video2">
              <VideoInicio/>
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



            <Link  to="/Proyectos">
            <img className="imagen-left"
              
              src={Foto2}
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
