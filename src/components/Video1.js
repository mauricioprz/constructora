import React, { Component } from "react";
import videoinicio from "../assets/video/videoinicio.webm";
import "../assets/css/video.css";
import { Modal, Button } from "react-bootstrap";
export default class Video extends Component {

  state = {
    show: false,
    Mtitle: "Mi casa",
    img: "",
    autoPlay: "true"
  };

  clickHandler = (e, data) => {
     console.log(e);
     console.log(data);
     console.log("se hizo click");
    this.setState({ show: true, autoPlay: false  });
  };

  handleClose = () => {
    this.setState({ show: false });
    
  };

  render() {
    return (
      <div>

      
      <video onClick={this.clickHandler.bind(this, videoinicio)} loop  muted width="100%" height="100%" src={videoinicio}>
        </video>
        <Modal 
          size="lg"
          show={this.state.show}
          onHide={this.handleClose}
          animation={false}
          autoPlay={true}
          
          
        >
          <Modal.Header>
            <Modal.Title ></Modal.Title>
          </Modal.Header>
    <Modal.Body><video width="100%" height="100%" src={videoinicio} ></video> </Modal.Body>
          <Modal.Footer>
          <Button variant="secondary" onClick={this.handleClose}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
        </div>
    );
  }
}

