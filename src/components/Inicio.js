import React, { Component } from "react";
import "../assets/css/inicio.css";
import '../assets/css/background.css';
//import Foto1 from "../assets/images/inicio/FOTOS CON GOTA DE AGUA.jpg";
import Foto2 from "../assets/images/antesydespues.jpg";
import VideoInicio from "./Video1";



export default class Inicio extends Component {
  // $(function () {
  //   $("#mdb-lightbox-ui").load("mdb-addons/mdb-lightbox-ui.html");
  //   });

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
              <br/>
              <br/>
              Empresa con más de 8 años de experiencia formada por un grupo de ingenieros y arquitectos comprometidos ética y profesionalmente satisfaciendo las necesidades de nuestros clientes.
            </h3>
            </div>
          </div>
          <div className="link">
          <img className="imagen-left" src={Foto2} alt="Foto de antes y despues"></img>
          </div>
        </div>
        
        {/* <div class="row">
  <div class="col-md-12">
    <div id="mdb-lightbox-ui"></div>
    <div class="mdb-lightbox no-margin">
      <figure class="col-md-4">
        <a href="https://mdbootstrap.com/img/Photos/Horizontal/Nature/12-col/img%20(117).jpg" data-size="1600x1067">
          <img src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(117).jpg" class="img-fluid">
        </a>
      </figure> 
    </div>
  </div>
</div> */}

        
        </div>
        
      </div>
    );
  }
}
