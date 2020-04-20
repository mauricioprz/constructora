import React, { Component } from "react";
//import Fotoservicios from "../assets/images/concreto.jpg";
import '../assets/css/tarjetas.css';


export default class Tarjetas extends Component {
  render() {
    return (
      <div>
        <img className="imagen-left" src={Fotoservicios}></img>
      </div>



      // <div className="tarjetas1">
      //   <div >
      //     <h3>Diseño</h3>
      //     <img className="servicios" src={Fotoservicios} alt="imagen-servicios"/>
      //   </div>
      //   <div>
      //     <ul className="funciones">
      //       <li>– Edificación horizontal</li>
      //       <li>– Naves industriales</li>
      //       <li>– Centros de distribución</li>
      //       <li>– Centros comerciales</li>
      //       <li>– Obra civil de gran tamaño</li>
      //       <li>– Hospitales</li>
      //     </ul>
      //   </div>
      // </div>
        
    );
  }
}
