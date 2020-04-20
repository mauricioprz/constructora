import React, { Component } from 'react'
import '../assets/css/galeria.css'
import ImagesConstrucciones from "../assets/images/antesydespues.jpg";
import Video from './Video2';
import '../assets/css/video.css';





export default class Galeria extends Component {
     render() {
          return (
               <div className="background">
                    <div className="marco">
                         <div className="galeria-left">
                              <div className="video2">
                         <Video/>
                              </div>
                         </div>
                         <div className="galeria-right">
                              <div className="row-galeria">
                                   <h5>Construcciones</h5>
                                   <img className="imagen-galeria" src={ImagesConstrucciones} alt="Video Remcon"></img>
                              </div>
                              <div className="row-galeria">
                                   <h5>Proyectos Especiales</h5>
                                   <img className="imagen-galeria" src={ImagesConstrucciones} alt="Video Remcon"></img>
                              </div>
                              <div className="row-galeria">
                                   <h5>Remodelaciones</h5>
                                   <img className="imagen-galeria" src={ImagesConstrucciones} alt="Video Remcon"></img>
                              </div>

                         </div>
                    </div>
               </div>
          )
     }
}
