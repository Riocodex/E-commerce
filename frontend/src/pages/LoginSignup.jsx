import React, { useState } from 'react'
import './CSS/LoginSignup.css'

const LoginSignup = () => {

  const [state, setState ] = useState("Login")
  const [ formData, setFormData ] = useState({
    username:"",
    password:"",
    email:""
  })

  const changeHandler = (e)=>{
    setFormData({...formData,[e.target.name]:e.target.value})
  }

  const login = async ()=>{
      console.log("login")
  }

  const signup = async ()=>{
    console.log("signup")
  }

  return (
    <div className='loginsignup'>
        <div className="loginsignup-container">
          <h1>{state}</h1>
          <div className="loginsignup-fields">
            {state ==="Sign Up"?<input name='username' value={formData.username} onChange={changeHandler} type="text" placeholder='Your Name'/>:<></>}
            <input name='email' value={formData.email} type="email" placeholder='Email Address'/>
            <input type="password" placeholder='Password'/>
          </div>
          <button onClick={()=>{state==="Login"?login():signup()}}>Continue</button>
          {state === "Sign Up"?<p className="loginsignuplogin">
            Already have an account? <span className='changer' onClick={()=>{setState("Login")}}>Login</span>
          </p>: <p className="loginsignuplogin">
            Create an account? <span className='changer' onClick={()=>{setState("Sign Up")}}>Click here</span>
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