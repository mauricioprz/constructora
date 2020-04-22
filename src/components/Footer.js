import React, { Component } from "react";
import "../assets/css/footer.css";
import Facebook from "../assets/images/facebook.png";
import Twitter from "../assets/images/twitter.png";
import Instagram from "../assets/images/instagram.png";
import Youtube from "../assets/images/youtube.png";
import { Modal } from "react-bootstrap";
import {Link} from "react-router-dom";

export default class Footer extends Component {
  state = {
    show: false,
    Mtitle: "Aviso",
    img: "",
  };

  clickHandler = () => {
    this.setState({ show: true, Mtitle: "Aviso de Privacidad" });
  };

  handleClose = () => {
    this.setState({ show: false });
  };

  render() {

    return (
      <section className="pie">
        <div className="aviso">
          <div className="children-aviso">
          <p>2015 Remcon Todos los derechos reservados</p>
          <Link onClick={this.clickHandler.bind(this, )} >Aviso de Privacidad</Link>
          </div>
        </div>
        <div className="icon-social">
        <a className="text" href="https://www.facebook.com/remconconstructora" target="blank">
            <img className="logo-facebook" src={Facebook} alt="Facebook" />
          </a>
          <a className="text" href="https://twitter.com/@RemconC" target="blank">
            
            <img className="logo-twitter" src={Twitter} alt="Twitter" />
            
          </a>
          <a className="text" href="https://www.instagram.com/remconconstructora" target="blank">
            <img className="logo-instagram" src={Instagram} alt="Instagram" />
          </a>
          <a className="text" href="https://www.youtube.com/channel/UChQAjC7FH9qZhqgeaSy8Icw" target="blank">
            <img className="logo-youtube" src={Youtube} alt="Youtube" />
          </a>
        </div>
        <div className="correo">
          <div className="children-correo">
          <p>@hotmail.com </p>
          </div>
          

          <Modal 
          size="xl"
          show={this.state.show}
          onHide={this.handleClose}
          animation={false}
          
        >
          <Modal.Header closeButton>
            <Modal.Title >{this.state.Mtitle}</Modal.Title>
          </Modal.Header>
    <Modal.Body><p className="aviso_privacidad">
    De conformidad con lo previsto en la Ley Federal de Protección de Datos Personales en
Posesión de los Particulares (en lo sucesivo denominada como "la Ley"), nos permitimos
solicitarle leer cuidadosamente los Términos y Condiciones contenidos en este documento,
ya que la simple aportación que haga de sus datos Personales o Datos Sensibles constituye
la aceptación de estos Términos y Condiciones: <br></br><br></br>
1. REMCON Constructora será responsable de los datos personales de conformidad a lo dispuesto por
la fracción I del artículo 16 de la Ley, con domicilio Fuente de Trevi #20 Lomas de Tecamachalco, Naulcalpan de Juarez, es
responsable de recabar sus datos personales, del uso que se le dé a los mismos y de su
protección <br></br>
2. Los términos "Datos Personales" y "Datos Sensibles" tendrán el significado que se les
atribuye en el artículo 3 de la Ley. <br></br>
3. Los Datos Personales y/o Datos Sensibles que usted pueda proporcionar al Responsable
tendrán el uso que en forma enunciativa pero no limitativa se describe a continuación: <br></br>
• - Su información personal será utilizada para proveer los servicios y productos que
ha solicitado, así como informarle sobre cambios en los mismos
del servicio que le brindamos. Para la finalidad antes mencionada, requerimos
obtener los siguientes datos personales: Nombre, correo electronico ,
teléfono (opcional) y mensaje.
      </p> </Modal.Body>
          <Modal.Footer>
            
          </Modal.Footer>
        </Modal>
        </div>
      </section>
    );
  }
}
