import React, { Component } from 'react'
import CascoIzquierdo from '../assets/images/casco1.png'
import CascoCentral from '../assets/images/nuevo2.png'
import CascoDerecho from '../assets/images/casco3.png'
import "../assets/css/nosotros.css";


export default class Cascos extends Component {
     render() {
          return (
               <div className="cascostest">
                    <div className="marco-casco">

                   <img className="tamaño" src={CascoIzquierdo} alt="Imagen de casco"/> 
                   
                    <div className="casco-txt">

                   <h5 className="title-casco">MISION</h5>
                   <p className="comentarios">Construir y edificar el patrimonio de las familias mexicanascon pasión y dedicación. Utilizando todos los medios, ideas y materiales innovadores siendo responsables con el medio ambiente.</p>
                    </div>
                   
                    </div>
                    <div className="marco-casco2">

                   <img className="tamaño2" src={CascoCentral} alt="Imagen de casco"/>
                   <div className="casco-txt">

                   <h5 className="title-casco2">VISION</h5>
                   <p className="comentarios2">Ser empresa líder de la construcción, buscando soluciones efectivas para conservar, renovar y aumentar el patrimonio de las familias mexicanas.</p>
                    </div>
                    </div>
                    <div className="marco-casco">

                   <img className="tamaño" src={CascoDerecho} alt="Imagen de casco"/>
                   <div className="casco-txt">

                   <h5 className="title-casco3">VALORES</h5>
                   <ul className="comentarios3">
                        <li>Liderazgo</li>
                        <li>Voluntad</li>
                        <li>Solidaridad</li>
                        <li>Honestidad</li>
                        <li>Responsabilidad</li>
                        <li>Puntualidad</li>
                        <li>Inovacion</li>
                        <li>Trabajo en Equipo</li>
                   </ul>
                    </div>
                    </div>
               </div>
          )
     }
}
