import React, { Component } from "react";
import "../assets/css/footer.css";
import Facebook from "../assets/images/facebook.png";
import Twitter from "../assets/images/twitter.png";
import Instagram from "../assets/images/instagram.png";
import Youtube from "../assets/images/youtube.png";

export default class Footer extends Component {
  render() {
    return (
      <section className="pie">
        <div className="aviso">
          <div className="children-aviso">
          <p>2015 Remcon Todos los derechos reservados</p>
          <a href="http://abcavisosprivacidad.ifai.org.mx/">Aviso de Privacidad</a>
          </div>
        </div>
        <div className="icon-social">
        <a className="text" href="https://www.facebook.com/remconconstructora" target="_blank">
            <img className="logo-facebook" src={Facebook} alt="Facebook" />
          </a>
          <a className="text" href="https://twitter.com/@RemconC" target="_blank">
            
            <img className="logo-twitter" src={Twitter} alt="Twitter" />
            
          </a>
          <a className="text" href="https://www.instagram.com/remconconstructora" target="_blank">
            <img className="logo-instagram" src={Instagram} alt="Instagram" />
          </a>
          <a className="text" href="https://www.youtube.com/channel/UChQAjC7FH9qZhqgeaSy8Icw" target="_blank">
            <img className="logo-youtube" src={Youtube} alt="Youtube" />
          </a>
        </div>
        <div className="correo">
          <div className="children-correo">
          <p>@hotmail.com </p>
          </div>
          
        </div>
      </section>
    );
  }
}
