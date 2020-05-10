import React, { Component } from "react";
import "../assets/css/background.css";
import "../assets/css/servicios.css";
import Imagen_Planeacion from "../assets/images/servicios/servicios1.jpg";
import Imagen_Proyecto from "../assets/images/servicios/servicios2.jpg";
import Imagen_Arquitectura from "../assets/images/servicios/servicios3.JPG";
import Imagen_Construccion from "../assets/images/servicios/servicios4.jpg";
import Listado from "./listado";

export default class Servicios extends Component {
  state = {
    data1: {
      title: ["Construccion"],
      text: [
        "Proceso en el que usamos las mejores tecnicas para armar cualquier tipo de estructura. Utilizando a los mejores expertos sobre la materia y materiales de la mas alta calidad.",
      ],
      img: Imagen_Construccion,
    },
    data2: {
      title: ["Planeacion"],
      text: [
        "Elaboramos las mejores estrategias para alcanzar de manera eficiente las metas, cumpliendo con los estandares y normas vigentes.",
      ],
      img: Imagen_Planeacion,
    },

    data3: {
      title: ["Arquitectura"],
      text: [
        "Proyectamos y diseñamos con ciertas caracteristicas de acuerdo a las necesidades de nuestros clientes.",
      ],
      img: Imagen_Arquitectura,
    },
    data4: {
      title: ["Proyecto Ejecutivo"],
      text: [
        "Reunimos un conjunto de documentos, planos y memorias donde se establece a detalle la construccion que se llevara acabo.",
      ],
      img: Imagen_Proyecto,
    },
  };

  render() {
    const { data1, data2, data3, data4 } = this.state;
    return (
      <div className="background">
        <div className="marco-row">
          <div className="row-up">
            <Listado title={data2.title} texto={data2.text} img={data2.img} />
            <Listado title={data3.title} texto={data3.text} img={data3.img} />
          </div>

          <div className="row-down">
            <Listado
              title={data4.title}
              classRow="reverse"
              texto={data4.text}
              img={data4.img}
            />

            <Listado
              title={data1.title}
              classRow="reverse"
              texto={data1.text}
              img={data1.img}
            />
          </div>
        </div>
      </div>
    );
  }
}
