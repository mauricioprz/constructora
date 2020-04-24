import React, { Component } from "react";
import videoinicio from "../assets/video/videoinicio.webm";
import "../assets/css/video.css";
import { Modal, Button } from "react-bootstrap";
export default class Video extends Component {
  state = {
    show: false,
    Mtitle: "Mi casa",
    img: "",
    autoPlay: true,
  };

  clickHandler = (e, data) => {
    data.currentTarget.pause();
    this.setState({ show: true, autoPlay: true });
  };

  handleClose = (e) => {
    document.getElementById(this.props.video).play();
    this.setState({ show: false });
  };

  render() {
    return (
      <div>
        <video
          onClick={this.clickHandler.bind(this, videoinicio)}
          loop
          autoPlay
          muted
          width="100%"
          height="100%"
          src={videoinicio}
          type="video/webm"
          id={this.props.video}
        ></video>

        <Modal
          size="xl"
          show={this.state.show}
          onHide={this.handleClose}
          animation={false}
        >
          <Modal.Body>
            <video
              width="100%"
              height="100%"
              autoPlay
              muted
              src={videoinicio}
            ></video>
          </Modal.Body>
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
