import React, { Component } from "react";
import "../assets/css/galeria.css";
//import { NavLink } from "react-router-dom";
//import ImagesConstrucciones from "../assets/images/galeria/imagen-galeria1.jpg";
//import ImagesProyectosEspeciales from "../assets/images/galeria/imagen-galeria2.jpg";
//import ImagesRemodelaciones from "../assets/images/galeria/imagen-galeria3.jpg";
import Verificacion from "../assets/images/galeria/palomita.png";
import { Link } from "react-router-dom";

import Video from "./Video2";
import "../assets/css/video.css";
import { Modal } from "react-bootstrap";
import Carrousel from "./carousel";
import { settingsCarousel_sistemas } from "./controlCarrousel";
import { imgBaño } from "../assets/images/galeria/baños/baños";
export default class Galeria extends Component {
  state = {
    show: false,
    img: [],
  };

  clickHandler = (img, e) => {
    this.setState({ show: true, img });
  };

  handleClose = () => {
    this.setState({ show: false });
  };

  img = () => {};

  render() {
    return (
      <div className="background gback">
        <div className="marco gmarco">
          <div className="galeria-left">
            <div className="video2">
              <Video />
            </div>
          </div>
          <div className="galeria-right">
            <Link
              className="link-galeria"
              onClick={this.clickHandler.bind(this, imgBaño)}
              to="#"
            >
              <img
                className="link-img"
                src={Verificacion}
                alt="fachadas"
                height="25px"
                width="25px"
              />
              Baños
            </Link>
          </div>
        </div>
        <Modal
        modal-sm
          show={this.state.show}
          onHide={this.handleClose}
          animation={true}
          className="modalLarge"
        >
          <Modal.Header closeButton>
            <Modal.Title>{this.state.Mtitle}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Carrousel
              element="galeria-modal"
              option={settingsCarousel_sistemas}
              controls={true}
              img={this.state.img}
            >
              {this.state.img.map((img, index) => {
                return (
                  <li key="index">
                    <div>
                      <img src={img} alt="" />
                    </div>
                  </li>
                );
              })}
            </Carrousel>
          </Modal.Body>
          <Modal.Footer></Modal.Footer>
        </Modal>
      </div>
    );
  }
}
