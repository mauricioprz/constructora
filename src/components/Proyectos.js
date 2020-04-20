import React, { Component } from 'react'
import '../assets/css/proyectos.css'
import '../assets/css/background.css'
import Foto1 from "../assets/images/antesydespues.jpg";



export default class Proyectos extends Component {


     clickHandler =() => {
         console.log('se hizo click');
     }

     render(){
          

          return (
               
               <div className="background">
                    <div className="marco-project">
                         <div className ="images-project">
                         <div className="imagen0">

                         <a href='#' onClick={this.clickHandler} ><img  className="test" src={Foto1} ></img></a>
                             
                         </div>
                         <div className="imagen0">
                         <img  className="test" src={Foto1} alt="Foto de Antes y despues 2"></img>
                         </div>
                         <div className="imagen0">
                         <img className="test" src={Foto1} alt="Foto de Antes y despues 3"></img>
                         </div>
                         <div className="imagen0">
                         <img className="test" src={Foto1} alt="Foto de Antes y despues 4"></img>

                         </div>
                       
                      
                     
        
                       </div>
                    </div>
                    </div>
                    
          )
     }

}
