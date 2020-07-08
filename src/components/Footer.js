import React, { Component } from "react";
import "../assets/css/footer.css";
import Facebook from "../assets/images/facebook.png";
import Twitter from "../assets/images/twitter.png";
import Instagram from "../assets/images/instagram.png";
import Youtube from "../assets/images/youtube.png";
import { Modal } from "react-bootstrap";
import { Link } from "react-router-dom";
import Logo from "../assets/images/logo.png";

export default class Footer extends Component {
  state = {
    show: false,
    Mtitle: "Aviso",
    img: "",
  };

  clickHandler = () => {
    this.setState({ show: true, Mtitle: "", img: "" });
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
            <Link onClick={this.clickHandler.bind(this)} to="#">
              Aviso de Privacidad
            </Link>
          </div>
        </div>
        <div className="icon-social">
          <a
            className="text"
            href="https://www.facebook.com/remconconstructora"
            target="blank"
          >
            <img className="logo-facebook" src={Facebook} alt="Facebook" />
          </a>
          <a
            className="text"
            href="https://twitter.com/@RemconC"
            target="blank"
          >
            <img className="logo-twitter" src={Twitter} alt="Twitter" />
          </a>
          <a
            className="text"
            href="https://www.instagram.com/remconconstructora"
            target="blank"
          >
            <img className="logo-instagram" src={Instagram} alt="Instagram" />
          </a>
          <a
            className="text"
            href="https://www.youtube.com/channel/UChQAjC7FH9qZhqgeaSy8Icw"
            target="blank"
          >
            <img className="logo-youtube" src={Youtube} alt="Youtube" />
          </a>
        </div>
        <div className="correo">
          <div className="children-correo">

            <p>remcon07@hotmail.com </p>
            <p>+52(55) 55962058</p>
          </div>

          <Modal
            size="xl"
            show={this.state.show}
            onHide={this.handleClose}
            animation={false}
          >
            <Modal.Header closeButton>
              <Modal.Title>{this.state.Mtitle}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
           <img className="logo-footer" fon src={Logo} alt="logo-remcon"
            height="120px"/>
              <p  className="aviso_privacidad">
              <p  align="center">
               <strong >AVISO DE PRIVACIDAD</strong>  
               </p>
                <br/>
De conformidad con lo establecido en la Ley Federal de Protección de Datos Personales en Posesión de los Particulares,       <strong>Remconmex Constructora S,A de C.V </strong>pone a su disposición el siguiente aviso de privacidad.
<br/><br/>
<strong>Remconmex Constructora S,A de C.V,</strong> es responsable del uso y protección de sus datos personales, en este sentido y atendiendo las obligaciones legales establecidas en la Ley Federal de Protección de Datos Personales en Posesión de los Particulares, a través de este instrumento se informa a los titulares de los datos, la información que de ellos se recaba y los fines que se le darán a dicha información.
<br/><br/>
Además de lo anterior, informamos a usted que <strong>Remconmex Constructora S,A de C.V,</strong>tiene su domicilio ubicado en:
<br/><br/>
<strong>Fuente de Trevi #20 Int, Lomas de Tecamachalco, Naucalpan de Juaréz, Estado de México, C.P 53950</strong>
<br/><br/>
Los datos personales que recabamos de usted serán utilizados para las siguientes finalidades, las cuales son necesarias para concretar nuestra relación con usted, así como atender los servicios y/o pedidos que solicite:
<br/><br/>
<strong>Cotizar y brindar información, corridas financieras y presupuestos para la realización de algún proyecto.</strong>
Para llevar a cabo las finalidades descritas en el presente aviso de privacidad, utilizaremos los siguientes datos personales:
<br/><br/>
<strong>Nombre, Teléfono, Email y WhatsApp (Opcional)</strong>
Por otra parte, informamos a usted, que sus datos personales no serán compartidos con ninguna autoridad, empresa, organización o persona distintas a nosotros y serán utilizados exclusivamente para los fines señalados.
<br/><br/>
Usted tiene en todo momento el derecho a conocer qué datos personales tenemos de usted, para qué los utilizamos y las condiciones del uso que les damos (Acceso). Asimismo, es su derecho solicitar la corrección de su información personal en caso de que esté desactualizada, sea inexacta o incompleta (Rectificación); de igual manera, tiene derecho a que su información se elimine de nuestros registros o bases de datos cuando considere que la misma no está siendo utilizada adecuadamente (Cancelación); así como también a oponerse al uso de sus datos personales para fines específicos (Oposición). Estos derechos se conocen como derechos ARCO.
<br/><br/>
Para el ejercicio de cualquiera de los derechos ARCO, se deberá presentar la solicitud respectiva a través del siguiente correo electrónico:
<br/><br/>
<strong>remcon07@hotmail.com</strong> 
<br/><br/>
Lo anterior también servirá para conocer el procedimiento y requisitos para el ejercicio de los derechos ARCO, no obstante, la solicitud de ejercicio de estos derechos debe contener la siguiente información:
<br/><br/>
<strong>Nombre, Teléfono, Asunto y Explicación</strong> 
<br/><br/>
La respuesta a la solicitud se dará en 1 semana y se comunicará de la siguiente manera:
<br/><br/>
<strong>A través de correo eléctronico.</strong> 
<br/><br/>
Los datos de contacto de la persona o departamento de datos personales, que está a cargo de dar trámite a las solicitudes de derechos ARCO, son los siguientes:
<br/><br/>
a) Nombre del responsable: José Antonio Martínez Cecin
<br/><br/>
b) Domicilio: Fuente de Trevi #21 Int 1, Lomas de Tecamachalco, Naucalpan de Juaréz, Estado de México, C.P 53950
<br/><br/>
c) Teléfono: 5555962058
<br/><br/>
d) Otro medio de contacto: www.remcon.com.mx.
<br/><br/>
Cabe mencionar, que en cualquier momento usted puede revocar su consentimiento para el uso de sus datos personales. Del mismo modo, usted puede revocar el consentimiento que, en su caso, nos haya otorgado para el tratamiento de sus datos personales. Sin embargo, es importante que tenga en cuenta que no en todos los casos podremos atender su solicitud o concluir el uso de forma inmediata, ya que es posible que por alguna obligación legal se requiera seguir tratando sus datos personales. Asimismo, usted deberá considerar que para ciertos fines, la revocación de su consentimiento implicará que no podamos seguir prestando el servicio que nos solicitó, o la conclusión de su relación con nosotros.
<br/><br/>
Para revocar el consentimiento que usted otorga en este acto o para limitar su divulgación, se deberá presentar la solicitud respectiva a través del siguiente correo electrónico:
<br/><br/>
<strong>remcon07@hotmail.com</strong> 
<br/><br/>
Del mismo modo, podrá solicitar la información para conocer el procedimiento y requisitos para la revocación del consentimiento, así como limitar el uso y divulgación de su información personal, sin embargo, estas solicitudes deberán contener la siguiente información:
<br/><br/>
<strong>Nombre, Teléfono, Email, WhatsApp (Opcional)</strong> 
<br/><br/>
En cualquier caso, la respuesta a las peticiones se dará a conocer en un plazo de 1 Semana.
<br/><br/>
El presente aviso de privacidad puede sufrir modificaciones, cambios o actualizaciones derivadas de nuevos requerimientos legales; de nuestras propias necesidades por los productos o servicios que ofrecemos; de nuestras prácticas de privacidad; de cambios en nuestro modelo de negocio, o por otras causas, por lo cual, nos comprometemos a mantenerlo informado sobre los cambios que pueda sufrir el presente aviso de privacidad, sin embargo, usted puede solicitar información sobre si el mismo ha sufrido algún cambio mediante el envío de una carta o solicitud en formato libre a la siguiente dirección:
<br/><br/>
<strong>Fuente de Trevi #20 Int 1, Lomas de Tecamachalco, Naucalpan de Juaréz, Estado de México, C.P 53950</strong> 
<br/><br/> 
<p align="right">
Última actualización:
</p>
<p align="right">
25/05/2020
</p>

              </p>{" "}
            </Modal.Body>
            <Modal.Footer></Modal.Footer>
          </Modal>
        </div>
      </section>
    );
  }
}
