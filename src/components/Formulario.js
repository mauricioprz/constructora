import React, { Component } from 'react';
import firebaseConf from './Firebase';
import '../assets/css/formulario.css'

class Formulario extends Component {

  constructor(props) {
    super(props);
    this.state = {
      form: [],
      alert: false,
      alertData: {}
    };
  }

  showAlert(type, message) {
    this.setState({
      alert: true,
      alertData: { type, message }
    });
    setTimeout(() => {
      this.setState({ alert: false });
    }, 4000)
  }

  resetForm() {
    this.refs.contactForm.reset();
  }

  componentWillMount() {
    let formRef = firebaseConf.database().ref('form').orderByKey().limitToLast(6);
    formRef.on('child_added', snapshot => {
      const { name, email, city, phone, message } = snapshot.val();
      const data = { name, email, city, phone, message };
      this.setState({ form: [data].concat(this.state.form) });
    })
  }

  sendMessage(e) {
    e.preventDefault();
    const params = {
      name: this.inputName.value,
      email: this.inputEmail.value,
      phone: this.inputPhone.value,
      message: this.textAreaMessage.value
    };
    if (params.name && params.email && params.phone && params.message) {
      firebaseConf.database().ref('form').push(params).then(() => {
        this.showAlert('success', 'Mensaje Enviado');
      }).catch(() => {
        this.showAlert('danger', 'No se envio su mensaje');
      });
      this.resetForm();
    } else {
      this.showAlert('warning', 'Datos incompletos');
    };
  }

  render() {
    return (
      <div>
        {this.state.alert && <div className={`alert alert-${this.state.alertData.type}`} role='alert'>
          <div className='container'>
            {this.state.alertData.message}
          </div>
        </div>}
        <div  >
          <div >
            <div >
              
              <form onSubmit={this.sendMessage.bind(this)} ref='contactForm' >
                <div className='formato'>
                  
                  <input type='text' className='entrada' id='name' placeholder='Nombre' ref={name => this.inputName = name} />
                </div>
                <div className='formato'>
                  
                  <input type='email' className='entrada' id='email' placeholder='Correo electronico' ref={email => this.inputEmail = email} />
                </div>
                
                <div className='formato'>
                  
                  <input type='number' className='entrada' id='phone' placeholder='Celular (opcional)' ref={phone => this.inputPhone = phone} />
                </div>
                <div className='formato'>
                  
                  <textarea className='entrada' id='message' rows='2' placeholder='Mensaje' ref={message => this.textAreaMessage = message}></textarea>
                </div>
                <button type='submit' className='btn btn-primary'>Enviar</button>
              </form>
            </div>
            
          </div>
        </div>
        
      </div>
    );
  }
}

export default Formulario;