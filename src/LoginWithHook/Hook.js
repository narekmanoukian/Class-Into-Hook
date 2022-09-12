import React, {useState} from "react";
import "./Hook.css"

export const Hook  = () => {
     const [login,setLogin] = useState("")
     const [password,setPassword] = useState("")

     
    const onSubmit = (event) =>{
      event.preventDefault()
    
      alert("Yep")
     

  
  return (
    <form onSubmit={onSubmit}>
     
      <label htmlFor="login">Login</label>
      <input
        onChange={(event) => setLogin(event.target.value)}
        id="login"
        name="login"
        type="text"
      />
      <label htmlFor="password">Password</label>
      <input onChange={(event) => setPassword(event.target.value)}
        id="login"
        name="password"
        type="password"
      />
      <button type="submit">Log in</button>
    </form>
  )}}