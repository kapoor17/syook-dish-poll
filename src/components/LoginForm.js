import React from "react"
import "../style.css"

function LoginForm(props){

  return(
    <div className="login-form">
        <div className="form">
          <form onSubmit={props.handleSubmit}>
            <h2 className="title">Sign In</h2>
            <div className="input-container">
              <label className="label">Username </label>
              <input type="text" name="username" required onChange={props.handleChange}/>
              {props.renderErrorMessage("username")}
            </div>
            <div className="input-container">
              <label className="label">Password </label>
              <input type="password" name="password" required onChange={props.handleChange}/>
              {props.renderErrorMessage("password")}
            </div>
            <div className="button-container">
              <input type="submit"/>
            </div>
          </form>
        </div>
    </div>
  )
}

export default LoginForm