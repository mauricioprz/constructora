import React, { Component } from "react";
import "../assets/css/contacto.css";
import MyMapComponent from "./Map";
import Formulario from "./Formulario";
//import credentials from './credentials'

const mapURL = "https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key="
export default class Contacto extends Component {
  render() {
    return (
      <div className="background xbackground" >
        <div className="marco-contacto">
          <div className="contac-left">
            <MyMapComponent
              isMarkerShown
              googleMapURL= {mapURL}
              loadingElement={<div style={{ height: `100%` }} />}
              containerElement={<div style={{ height: `100%` }} />}
              mapElement={<div style={{ height: `100%` }} />}
            />
          </div>
          <div className="contac-right">
            <div className="title-contact">

          <h5>Remcon Oficinas Centrales </h5>
            </div>
            <div className="contact">
            
              <div className="direction">
                <p className="direction-p">
                  Fuente de Trevi #20 Int 1,
                   Lomas de Tecamachalco 53950, Naucalpan de Juarez, Edo.
                 de México.
                </p>
              </div>
              <div className="direction">
                <p className="direction-p">
                  Horario Lunes a Viernes
                  de 10:00 am a 18:00 pm 
                  Tel. +52 (55) 55962058
                </p>
              </div>
            </div>
            <div className="dia">
              
              <Formulario />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
