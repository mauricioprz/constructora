import React, { Component } from "react";
import "../assets/css/proyectos.css";
import "../assets/css/background.css";
import Foto1 from "../assets/images/antesydespues.jpg";
import { Modal } from "react-bootstrap";

export default class Proyectos extends Component {
  state = {
    show: false,
    Mtitle: "Mi casa",
    img: "",
  };

  clickHandler = (e, data) => {
    console.log(e);
    console.log(data);
    console.log("se hizo click");
    this.setState({ show: true, Mtitle: "Casa en Interlomas", img: data });
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
                onClick={this.clickHandler.bind(this, Foto1)}
                className="test"
                src={Foto1}
                alt="Foto de Antes y despues 1"
                id="click1"
              ></img>
            </div>
            <div className="imagen0">
              <img
                onClick={this.clickHandler.bind(this, Foto1)}
                className="test"
                src={Foto1}
                alt="Foto de Antes y despues 2"
                
              ></img>
            </div>
            <div className="imagen0">
            <img
                onClick={this.clickHandler.bind(this, Foto1)}
                className="test"
                src={Foto1}
                alt="Foto de Antes y despues 2"
              ></img>
            </div>
            <div className="imagen0">
              <img
                onClick={this.clickHandler.bind(this, Foto1)}
                className="test"
                src={Foto1}
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
            <Modal.Title >{this.state.Mtitle}</Modal.Title>
          </Modal.Header>
    <Modal.Body  ><img   style={{maxWidth: '100%'}} src={Foto1} alt="projects" /></Modal.Body>
          <Modal.Footer>
            
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
}
