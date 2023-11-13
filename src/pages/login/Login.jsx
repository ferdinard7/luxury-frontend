import React from "react";
import "./login.css";


function Login() {
  return (
    <div className="login-container">
      <div className="login-wrapper">
        <div className="l-login-wrapper" >
          <img className="login-logo" src="/images/logo.png" alt="logo" />
          <h3> Welcome to Luxury Prime </h3>
          <form>
            <p>Email: </p>
            <input type="text" placeholder="Enter your email" />
            <p> Password:</p>
            <input type="password" placeholder="password" />

            <button className="login-button"> Login </button>

          </form>
          <p className="login-paragraph">Don't have an account? <a href="/#"> Register here</a></p>


        </div>


      </div>
    </div>
  )
}


export default Login;