import React from 'react'
import '../assets/css/formato.css'

class Formulario extends React.Component {

     constructor(args){
          super(args)
          this.state = {
               
               name: '',
               email: '',
               phone: '',
               about: ''
          }
     }

     onChange(e){
          this.setState({
               [e.target.name]: e.target.value
          })
     }

     submitForm = ()=> {
          console.log(this.state)

     }

     render() {
          return (
               <form className="style-form" action="">
                    
                   <input 
                   value={this.state.name} 
                   placeholder="Nombre" 
                   onChange={this.onChange.bind(this)}
                    name="name" id="name" type="text"/> 
                    
                    
                   <input 
                   value={this.state.email} 
                   placeholder="E-mail" 
                   onChange={this.onChange.bind(this)}
                    name="email" id="email" type="text"/> 
                    
                    
                   <input 
                   value={this.state.phone} 
                   placeholder="Celular (opcional)" 
                   onChange={this.onChange.bind(this)}
                    name="phone" id="phone" type="number"/> 

                    

                    
                    <textarea value={this.state.about} placeholder="Tu mensaje" onChange={this.onChange.bind(this)} name="about" id="about" cols="30" type="about" rows="4"></textarea>         

                    <input 
                    type="submit" 
                    value="Enviar"
                    onClick={ this.submitForm } />
      

{/* <div>

                    <p>{JSON.stringify(this.state)}</p>
</div> */}
</form>
          )
     }
}

export default Formulario