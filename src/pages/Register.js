import axios from 'axios'
import React, { useRef, useState } from 'react'
import {Link, useNavigate} from 'react-router-dom'
import Loading from '../components/Loading'
function Register() {

    const [email,setEmail]=useState("")
    const [userName,setUsername]=useState("")
    const [password,setPassword]=useState("")
    const [hasError,setHasError]=useState(false)
    const [loading,setLoading]=useState(false)

    const navigate =useNavigate()
    const emailRef=useRef()
    const userNameRef=useRef()
    const passwordRef=useRef()
    
    const handleStart=()=>{
        setEmail(emailRef.current.value)
    }
    const handleFinish =async(e)=>{
        e.preventDefault();
        setUsername(userNameRef.current.value)
        setPassword(passwordRef.current.value)
        console.log(userName);

        setLoading(false)

        try{
          setLoading(true)
          const res=await axios.post("auth/register",{email,password,userName})
          navigate('/login')
          //console.log(res.data.user);
          console.log(hasError);
        }catch(err){
          setLoading(false)
          setHasError(true) 
          console.log(err.response.data);
          console.log(hasError);
        }
    }
    
  return (
    <div className="register">
    {loading&&(<Loading/>)}
      <div className="top">
        <div className="wrapper">
        
          {/* <img
            className="logo"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/2560px-Netflix_2015_logo.svg.png"
            alt=""
          /> */}
          <div className='logo'>
                        <h1>See</h1>
                    </div>
          <Link to="/login" className="loginButton">SignIn</Link>
        </div>
      </div> 
      <div className="container">
        <h1>Unlimited movies, TV shows, and more.</h1>
        <h2>Watch anywhere. Cancel anytime.</h2>
        <p>
          Ready to watch? Enter your email to create or restart your membership.
        </p>
        {!email ? (
          <div className="input">
            <input type="email" placeholder="email address" ref={emailRef} />
            <button className="registerButton" onClick={handleStart}>
              {'Go'}
            </button>
          </div>
        ) : (
          <form className="input">
            <input type="text" placeholder="uername" ref={userNameRef} />
            <input type="password" placeholder="password" ref={passwordRef} />
            <button className="registerButton" onClick={handleFinish}>
              Start
            </button>
          </form>
        )}
      </div>
    </div>
  )
}

export default Register