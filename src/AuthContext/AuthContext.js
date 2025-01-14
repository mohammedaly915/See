import React, { createContext, useEffect, useReducer } from 'react'
import AuthReducer from './AuthReducer'
const intialState={
    user:  JSON.parse(localStorage.getItem("user")) || null, 
    isFetching: false, 
    error: false
  }


export const AuthContext=createContext(intialState)

//func that provide context to childrn ((App.js))
const AuthContextProvider = ({children}) => {
   const [state,dispatch]=useReducer(AuthReducer,intialState)//==>payload==res.data.user
   
  //use effect to set user in localstorage 
    useEffect(()=>{
        localStorage.setItem("user",JSON.stringify(state.user))
    },[state.user])

  return ( 
    <AuthContext.Provider value={{  user: state.user,  isFetching: state.isFetching,  error: state.error,  dispatch  }}>
      {children}
    </AuthContext.Provider>
  )
}

export default AuthContextProvider