import React from "react";
import "./register.css";

function Register() {
  return (
    <div className="register-container">
      <div className="register-wrapper">
        <div className="r-register-wrapper" >
          <img className="register-logo" src="/images/logo.png" alt="logo" />
          <h3> Welcome to Luxury Prime </h3>
          <form>
            <p>Name: </p>
            <input type="text" placeholder="Enter your username" />
            <p>Email: </p>
            <input type="text" placeholder="Enter your email" />
            <p> Tel No:</p>
            <input type="text" placeholder="phone number" />
            <p> Password:</p>
            <input type="password" placeholder="password" />

            <button className="register-button"> Register </button>

          </form>
          <p className="register-paragraph">Already have an account? <a href="/#">Login here </a></p>


        </div>


      </div>
    </div>
  )
}

export default Register;