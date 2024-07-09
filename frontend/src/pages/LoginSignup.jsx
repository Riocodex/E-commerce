import React, { useState } from 'react'
import './CSS/LoginSignup.css'

const LoginSignup = () => {

  const [state, setState ] = useState("Login")

  return (
    <div className='loginsignup'>
        <div className="loginsignup-container">
          <h1>{state}</h1>
          <div className="loginsignup-fields">
            {state ==="Sign up"?<input type="text" placeholder='Your Name'/>:<></>}
            <input type="email" placeholder='Email Address'/>
            <input type="password" placeholder='Password'/>
          </div>
          <button>Continue</button>
          {state === "Sign Up"?<p className="loginsignuplogin">
            Already have an account? <span>Login</span>
          </p>: <p className="loginsignuplogin">
            Create an account? <span>Click here</span>
          </p>}
          
         
          <div className="loginsignup-agree">
            <input type="checkbox" name='' id='' />
            <p>By continuing, I agree to the terms of use & privacy policy</p>
          </div>
        </div>
    </div>
  )
}

export default LoginSignup