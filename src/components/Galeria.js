import React, { Component } from "react";
import "../assets/css/galeria.css";
import ImagesConstrucciones from "../assets/images/antesydespues.jpg";
import ImagesProyectosEspeciales from "../assets/images/edificio.jpg";
import ImagesRemodelaciones from "../assets/images/concreto.jpg";

import Video from "./Video2";
import "../assets/css/video.css";
import { Modal } from "react-bootstrap";
export default class Galeria extends Component {
     state = {
          show: false,
          Mtitle: "Casa",
          img: "",
        };

        clickHandler = () => {
          this.setState({ show: true, Mtitle: true });
          
        };

        handleClose = () => {
          this.setState({ show: false });
        };

  render() {
    return (
      <div className="background">
        <div className="marco">
          <div className="galeria-left">
            <div className="video2">
              <Video />
            </div>
          </div>
          <div className="galeria-right">
            <div className="row-galeria">
              <h5>Construcciones</h5>
              <img
              onClick={this.clickHandler.bind(this, ImagesConstrucciones)}
                className="imagen-galeria"
                src={ImagesConstrucciones}
                alt="Video Remcon"
                id={1}
              ></img>
            </div>
            <div className="row-galeria">
              <h5>Proyectos Especiales</h5>
              <img
              onClick={this.clickHandler.bind(this, ImagesConstrucciones)}
                className="imagen-galeria"
                src={ImagesProyectosEspeciales}
                alt="Video Remcon"
                id={2}
              ></img>
            </div>
            <div className="row-galeria">
              <h5>Remodelaciones</h5>
              <img
              onClick={this.clickHandler.bind(this, ImagesConstrucciones)}
                className="imagen-galeria"
                src={ImagesRemodelaciones}
                alt="Video Remcon"
                id={3}
              ></img>
            </div>
          </div>
        </div>
        <Modal 
          size="lg"
          show={this.state.show}
          onHide={this.handleClose}
          animation={false}
          
        >
          <Modal.Header closeButton>
            <Modal.Title >{this.state.Mtitle}</Modal.Title>
          </Modal.Header>
    <Modal.Body  ><img   style={{maxWidth: '100%'}} src={ImagesConstrucciones} alt="projects" /></Modal.Body>
          <Modal.Footer>
            
          </Modal.Footer>
        </Modal>
      
      </div>
    );
  }
}
