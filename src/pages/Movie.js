import React from 'react'
import Navbar from '../components/Navbar'
import Featured from '../components/Featured'
import Footer from '../components/Footer'
import Details from '../components/Details'

const Movie = () => {
  return (
    <div className='movie'>
        <Navbar/>
        <Featured />
        <Details/>
        <Footer/>
    </div>
  )
}

export default Movie