import React, { Component } from "react";
import "./Class.css"

export class ClassForm extends Component {
     state = {login: "", password: ""}

     setLogin = (event) =>{
      this.setState({login:event.target.value})
     }
     setPassword = (event) =>{
      this.setState({password:event.target.value})
     }
     onSubmit = (event) =>{
      event.preventDefault()
    
      alert("Yep")
     }

  render(){
  return (
    <form onSubmit={this.onSubmit}>
     
      <label htmlFor="login">Login</label>
      <input
        onChange={this.setLogin}
        id="login"
        name="login"
        type="text"
      />
      <label htmlFor="password">Password</label>
      <input onChange={this.setPassword}
        id="login"
        name="password"
        type="password"
      />
      <button type="submit">Log in</button>
    </form>
  )
}
}