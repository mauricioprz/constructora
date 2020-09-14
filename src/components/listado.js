import React, { Component } from "react";
import "../assets/css/listado.css";
import { isUndefined } from "lodash";

export default class Listado extends Component {
  render() {
    const { title, texto, img, classRow } = this.props;

    return (
      <div className={`row-container ${isUndefined(classRow) ? "" : classRow}`}>
        <div className="row-containerlistado">
          {title.map((key) => (
            <h5> {key} </h5>
          ))}
          <img className="imagen-left" src={img} alt="Imagenes"></img>
        </div>
        <div className="description">
          {texto.map((key) => (
            <p> {key} </p>
          ))}
        </div>
      </div>
    );
  }
}
