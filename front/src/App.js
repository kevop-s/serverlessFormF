import React, {Component} from 'react';
import './App.css';
import axios from 'axios';
// import 'bootstrap/dist/css/bootstrap.css'

class Contact extends Component {

  state = {
      name: '',
      message: '',
      email: '',
      sent: false,
      buttonText: 'Send Message',
      backHost: process.env.REACT_APP_BACK_URL
  }

  headers = {
    "Access-Control-Allow-Origin": "*"
  }

  render() {
      return(
        <form onSubmit={ (e) => this.formSubmit(e)}>
          <div class="form-group">
            <label for="exampleInputEmail1">Email address</label>
            <input type="email" class="form-control" aria-describedby="emailHelp" placeholder="Enter email" onChange={(e) => this.setState({ email: e.target.value})}></input>
            <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
          </div>
          <div class="form-group">
            <label for="exampleInputPassword1">Name</label>
            <input type="text" class="form-control" placeholder="Whats your name?" onChange={e => this.setState({ name: e.target.value})}></input>
          </div>
          <div class="form-group">
            <label for="exampleInputPassword1">Message</label>
            <textarea type="password" class="form-control" placeholder="Write your message here" onChange={e => this.setState({ message: e.target.value})}></textarea>
          </div>
          <button type="submit" class="btn btn-primary">{this.state.buttonText}</button>
        </form>
      );
  }

  formSubmit = (e) => {
    e.preventDefault()
  
    this.setState({
        buttonText: '...sending'
    })
  
    let data = {
        name: this.state.name,
        email: this.state.email,
        message: this.state.message
    }
    
    axios.post(this.state.backHost, data,{headers: this.headers})
    .then( res => {
        this.setState({ sent: true }, this.resetForm())
    })
    .catch( () => {
      console.log("BackHost: %s",process.env.REACT_APP_BACK_URL)
      console.log('Message not sent')
    })
  }

  resetForm = () => {
    this.setState({
      name: '',
      message: '',
      email: '',
      buttonText: 'Message Sent'
    })
  }

}

export default Contact;