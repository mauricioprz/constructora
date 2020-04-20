import React, { Component } from "react";

export default class Listado extends Component {
  render() {
    const { texto, img } = this.props;

    return (
      <div className="row-container">
        <div>
          <h5>Diseño</h5>
          <img className="imagen-left" src={img} alt="Imagen de Diseño"></img>
        </div>
        <ul>
          {texto.map((key) => (
            <li> {key} </li>
          ))}
        </ul>
      </div>
    );
  }
}
