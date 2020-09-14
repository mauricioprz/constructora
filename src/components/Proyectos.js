import React, { Component } from "react";
import "../assets/css/proyectos.css";
import "../assets/css/background.css";
import Antesydespues2 from "../assets/images/proyectos/antesydespues2.jpg";
import Antesydespues3 from "../assets/images/proyectos/antesydespues3.jpg";
import Antesydespues4 from "../assets/images/proyectos/antesydespues4.jpg";
import Antesydespues5 from "../assets/images/proyectos/antesydespues5.jpg";
import { Modal } from "react-bootstrap";

export default class Proyectos extends Component {
  state = {
    show: false,
    Mtitle: "Mi casa",
    img: "",
  };

  clickHandler = (e, data) => {
    this.setState({ show: true, Mtitle: e.title, img: e.img });
  };

  handleClose = () => {
    this.setState({ show: false });
  };

  render() {
    return (
      <div className="background">
        <div className="marco-project">
          <div className="images-project">
            <div className="imagen0">
              <img
                onClick={this.clickHandler.bind(this, {
                  img: Antesydespues2,
                  title: "Edificio Fuente del Rey",
                })}
                className="test"
                src={Antesydespues2}
                alt="Foto de Antes y despues 1"
                id="click1"
              ></img>
            </div>
            <div className="imagen0">
              <img
                onClick={this.clickHandler.bind(this, {
                  img: Antesydespues3,
                  title: "Edificio Simon Bolivar",
                })}
                className="test"
                src={Antesydespues3}
                alt="Foto de Antes y despues 2"
              ></img>
            </div>
            <div className="imagen0">
              <img
                onClick={this.clickHandler.bind(this, {
                  img: Antesydespues4,
                  title: "Casa Fuente de acueducto",
                })}
                className="test"
                src={Antesydespues4}
                alt="Foto de Antes y despues 2"
              ></img>
            </div>
            <div className="imagen0">
              <img
                onClick={this.clickHandler.bind(this, {
                  img: Antesydespues5,
                  title: "Casa Fuente de Prometeo",
                })}
                className="test"
                src={Antesydespues5}
                alt="Foto de Antes y despues 2"
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
            <Modal.Title>{this.state.Mtitle}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <img
              style={{ maxWidth: "100%" }}
              src={this.state.img}
              alt="projects"
            />
          </Modal.Body>
          <Modal.Footer></Modal.Footer>
        </Modal>
      </div>
    );
  }
}
