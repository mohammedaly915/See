import React, { useContext, useState } from 'react'
import image from '../image/photo_2023-10-27_23-47-23.jpg'
import { ArrowDropDown, Notifications, Search } from '@mui/icons-material'
import { Link } from 'react-router-dom'
import { AuthContext } from '../AuthContext/AuthContext'
import { logout } from '../AuthContext/AuthReducer'
const Navbar = () => {
    const [isScrolled,setIsScrolled]=useState(false)
    const {dispatch}=useContext(AuthContext)
    window.onscroll=()=>{
        setIsScrolled(window.pageYOffset===0?false:true)
        return ()=>{ window.onscroll=null}
    }
  return (
        <div className={isScrolled?"scroll navBar":"navBar"}>
            <div className='container'>
                <div className='left'>

                    {/* <img src={image} alt="" /> */}
                    <div className='logo'>
                        <h1>SEE</h1>
                    </div>

                    <Link to="/" className='link'>
                    <span>HomePage</span>
                    </Link>
                    <Link to="/series" className='link'>
                        <span>Series</span>
                    </Link>
                    <Link to="/movies" className='link'>
                        <span>Movies</span>
                    </Link>
                    <span>My list</span>
                </div>
                
                <div className='right'>
                
                    <Search className="icon" />
                    <span > KID </span>
                    <Notifications className="icon" />
                    <img src={image} alt=''/>
                    <div className='profile'>
                    <ArrowDropDown className="icon" />
                    <div className='option'>
                        <span>Settings</span>
                        <span onClick={()=>dispatch(logout())}>logout</span> 
                    </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar