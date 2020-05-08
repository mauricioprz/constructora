import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./assets/css/App.css";

import Navegacion from "./components/Navegacion";
import Proyectos from "./components/Proyectos";
import Nosotros from "./components/Nosotros";
import Inicio from "./components/Inicio";
import Unidad from "./components/Unidad";
import Contacto from "./components/Contacto";
import Servicios from "./components/Servicios";
import Galeria from "./components/Galeria";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="principal">
      <Router>
        <Navegacion />

        <Route path="/" exact component={Inicio} />
        <Route path="/nosotros" component={Nosotros} />
        <Route path="/servicios" component={Servicios} />
        <Route path="/proyectos" component={Proyectos} />
        <Route path="/galeria" component={Galeria} />
        <Route path="/empresaunida" component={Unidad} />
        <Route path="/contacto" component={Contacto} />

        <Footer />
      </Router>
    </div>
  );
}

export default App;
