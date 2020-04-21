// import React, { Component } from "react";
// import { Link } from "react-router-dom";

// import "../assets/css/navegacion.css";
// import Logo from "../assets/images/remcon.png";

// export default class Navegacion extends Component {
//   render() {
//     return (
//       <nav class="navbar navbar-expand-lg navbar-light">
//               <Link to="/">
//         <img className=" nav-brand" src={Logo} alt="logo-remcon" height="120px" />
//         </Link>

//       <button
//          class="navbar-toggler"
//           type="button"
//          data-toggle="collapse"
//           data-target="#menu"
//           // aria-controls="navbarNav"
//           // aria-expanded="false"
//           // aria-label="Toggle navigation"
//         >
//           <span class="navbar-toggler-icon"></span>
//         </button>
//         <div class="collapse navbar-collapse justify-content-center " id="menu">
//           <ul class="navbar-nav ml-auto">
//             <li className="nav-item active">
//               <Link className="nav-link" to="/">
//                 Inicio
//               </Link>
//             </li>
//             <li className="nav-item active">
//               <Link className="nav-link" to="/nosotros">
//                 Nosotros
//               </Link>
//             </li>
//             <li className="nav-item active">
//               <Link className="nav-link" to="/servicios">
//                 Servicios
//               </Link>
//             </li>
//             <li className="nav-item active">
//               <Link className="nav-link" to="/proyectos">
//                 Proyectos
//               </Link>
//             </li>
//             <li className="nav-item active">
//               <Link className="nav-link" to="/galeria">
//                 Galeria
//               </Link>
//             </li>
//             <li className="nav-item active">
//               <Link className="nav-link" to="/empresaunida">
//                 Empresa Unida
//               </Link>
//             </li>
//             <li className="nav-item active">
//               <Link className="nav-link" to="/contacto">
//                 Contacto
//               </Link>
//             </li>
//           </ul>
//         </div>
//       </nav>
//     );
//   }
// }

import React, { Component } from "react";
import { Link } from "react-router-dom";


import "../assets/css/navegacion.css";
import Logo from "../assets/images/remcon3.png";
// import Inicio from "./Inicio";

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
       
          <Link className="logo-rem" to="/">
            <img
              className=" navbar-brand"
              src={Logo}
              alt="logo-remcon"
              height="120px"
            />
          </Link>
          


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
                <Link className="nav-link" to="/">
                  Inicio
                </Link>
              </li>
              <li className="nav-item active">
                <Link className="nav-link" to="/nosotros">
                  Nosotros
                </Link>
              </li>
              <li className="nav-item active">
                <Link className="nav-link" to="/servicios">
                  Servicios
                </Link>
              </li>
              <li className="nav-item active">
                <Link className="nav-link" to="/proyectos">
                  Proyectos
                </Link>
              </li>
              <li className="nav-item active">
                <Link className="nav-link" to="/galeria">
                  Galeria
                </Link>
              </li>
              <li className="nav-item active">
                <Link className="nav-link" to="/empresaunida">
                  Empresa unida
                </Link>
              </li>
              <li className="nav-item active">
                <Link className="nav-link navbar-text" to="/contacto">
                  Contacto
                </Link>
              </li>
            </ul>
            
          </div>
        
      </nav>
    );
  }
}
export default Nav;
