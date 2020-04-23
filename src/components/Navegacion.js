import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import "../assets/css/navegacion.css";
import Logo from "../assets/images/logo.png";

class Nav extends Component {
  constructor(props) {
    super(props);
    this.toggleNavbar = this.toggleNavbar.bind(this);
    this.state = {
      collapsed: true,
    };
  }
  toggleNavbar() {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  }
  render() {
    const collapsed = this.state.collapsed;
    const classOne = collapsed
      ? "collapse navbar-collapse"
      : "collapse navbar-collapse show";
    const classTwo = collapsed
      ? "navbar-toggler navbar-toggler-right collapsed"
      : "navbar-toggler navbar-toggler-right";
    return (
     

      <nav className="navbar navbar-expand-lg navbar-light" >
       
          <NavLink className="logo-rem" to="/">
            <img
              className=" navbar-brand"
              src={Logo}
              alt="logo-remcon"
              height="120px"
            />
          </NavLink>
          


          <button
            onClick={this.toggleNavbar}
            className={`${classTwo}`}
            type="button"
            data-toggle="collapse"
            data-target="#navbarResponsive"
            aria-controls="navbarResponsive"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className={`${classOne}`} id="navbarResponsive">

            <ul className="navbar-nav ml-auto">
              <li className="nav-item active">
                <NavLink activeClassName="nav-link" exact to="/">
                  Inicio
                </NavLink>
              </li>
              <li className="nav-item active">
                <NavLink activeClassName="nav-link" to="/nosotros">
                  Nosotros
                </NavLink>
              </li>
              <li className="nav-item active">
                <NavLink activeClassName="nav-link" to="/servicios">
                  Servicios
                </NavLink>
              </li>
              <li className="nav-item active">
                <NavLink activeClassName="nav-link" to="/proyectos">
                  Proyectos
                </NavLink>
              </li>
              <li className="nav-item active">
                <NavLink activeClassName="nav-link" to="/galeria">
                  Galeria
                </NavLink>
              </li>
              <li className="nav-item active">
                <NavLink activeClassName="nav-link" to="/empresaunida">
                  Empresa unida
                </NavLink>
              </li>
              <li className="nav-item active">
                <NavLink activeClassName="nav-link" to="/contacto">
                  Contacto
                </NavLink>
              </li>
            </ul>
            
          </div>
        
      </nav>
    );
  }
}
export default Nav;
