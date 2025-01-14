import React, { useContext, useState } from "react";
import { AuthContext } from "../AuthContext/AuthContext";
//import { login } from "../AuthContext/apiCalls";
import { Link, useNavigate } from "react-router-dom";
import { loginFailure, loginStart, loginSuccess } from "../AuthContext/AuthReducer";
import axios from "axios"; 



const Login = () => {
  const [email,setEmail]=useState("")
  const [password,setPassword]=useState("")

  const {dispatch}=useContext(AuthContext)
  const navigator=useNavigate()
 

  // Functions
  const login = async (user, dispatch) => {
    dispatch(loginStart());
    try {
      const res = await axios.post("auth/login", user);
      dispatch(loginSuccess(res.data));
      console.log(res);
    } catch (err) {
      dispatch(loginFailure());
    } 
  };  

  const handleLogin=(e)=>{
    e.preventDefault();
    //l{ogin func and dispatch
    try{
      login({ email, password }, dispatch); // =>> dispatch from useReducer , user from 
      navigator("/")
    }catch(err){
      console.log(err);
    }
    
  }
  
  return (  
    <div className="login">
      <div className="top">
        <div className="wrapper">
          <img
            className="logo"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/2560px-Netflix_2015_logo.svg.png"
            alt=""
          />
        </div>
      </div> 
      <div className="container">
        <form>
          <h1>Sign In</h1>
          <input type="email" placeholder="Email or phone number" onChange={(e)=>{setEmail(e.target.value)}}/>
          <input type="password" placeholder="Password" onChange={(e)=>{setPassword(e.target.value)}}/>
          <button className="loginButton" onClick={handleLogin}>Sign In</button>
          <span>
            New to Netflix? <Link to="/register"><b>Sign up now.</b></Link>
          </span>
          <small>
            This page is protected by Google reCAPTCHA to ensure you're not a
            bot. <b>Learn more</b>.
          </small>
        </form>
      </div>
    </div>
  ); 
};

export default Login;
