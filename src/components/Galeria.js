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
import {
  imgBaño,
  imgCocina,
  imgElevador,
  imgEstancias,
  imgFachadas,
  imgSpeciales,
  imgVestidor,
  imgloby,
} from "../assets/images/galeria/imgCarousel";
export default class Galeria extends Component {
  state = {
    show: false,
    img: [],
    titulo: "",
  };

  clickHandler = (img, titulo, e) => {
    this.setState({ show: true, img, titulo });
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
          <div className="galeria-right wrap">
            <Link
              className="link-galeria"
              onClick={this.clickHandler.bind(this, imgFachadas, "Fachadas")}
              to="#"
            >
              <img
                className="link-img"
                src={Verificacion}
                alt="fachadas"
                height="25px"
                width="25px"
              />
              Fachadas
            </Link>
            <Link
              className="link-galeria"
              onClick={this.clickHandler.bind(this, imgEstancias, "Estancias")}
              to="#"
            >
              <img
                className="link-img"
                src={Verificacion}
                alt="fachadas"
                height="25px"
                width="25px"
              />
              Estancias
            </Link>
            <Link
              className="link-galeria"
              onClick={this.clickHandler.bind(this, imgCocina, "Cocinas")}
              to="#"
            >
              <img
                className="link-img"
                src={Verificacion}
                alt="fachadas"
                height="25px"
                width="25px"
              />
              Cocinas
            </Link>
            <Link
              className="link-galeria"
              onClick={this.clickHandler.bind(this, imgBaño, "Baños")}
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

            <Link
              className="link-galeria"
              onClick={this.clickHandler.bind(this, imgElevador, "Elevadores")}
              to="#"
            >
              <img
                className="link-img"
                src={Verificacion}
                alt="fachadas"
                height="25px"
                width="25px"
              />
              Elevadores
            </Link>

            <Link
              className="link-galeria"
              onClick={this.clickHandler.bind(
                this,
                imgSpeciales,
                "Proyectos Especiales"
              )}
              to="#"
            >
              <img
                className="link-img"
                src={Verificacion}
                alt="fachadas"
                height="25px"
                width="25px"
              />
              Proyectos Especiales
            </Link>

            <Link
              className="link-galeria"
              onClick={this.clickHandler.bind(this, imgVestidor, "Vestidores")}
              to="#"
            >
              <img
                className="link-img"
                src={Verificacion}
                alt="fachadas"
                height="25px"
                width="25px"
              />
              Vestidores
            </Link>

            <Link
              className="link-galeria"
              onClick={this.clickHandler.bind(this, imgloby, "lobbies")}
              to="#"
            >
              <img
                className="link-img"
                src={Verificacion}
                alt="fachadas"
                height="25px"
                width="25px"
              />
              lobbies
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
            <Modal.Title>{this.state.titulo}</Modal.Title>
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
