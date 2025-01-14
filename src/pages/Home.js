import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import Featured from '../components/Featured'
import Lists from '../components/Lists'
import axios from 'axios'
import Footer from '../components/Footer'

const Home = ({type}) => {
  const [lists, setLists] = useState([]);
    const [genre, setGenre] = useState(null);
  const getRandomLists = async () => {
    try {
      
      const res = await axios.get(`lists${type ? "?type=" + type : ""}${ genre ? "&genre=" + genre : ""}`, {
        headers: {
          Authorization:JSON.parse(localStorage.getItem("user")).token,
        },
      }
      );

      setLists(res.data);
      
      
    } catch (err) {
      console.log(err);
      
    }
  }; 
  useEffect(()=>{
    getRandomLists();
    
  },[type,genre])
  lists.map((lost)=>console.log(lost));
  return ( 
    <div className='home'>
        <Navbar/>
        <Featured type={type} setGenre={setGenre}/>
        {lists.map((list,i) => (
          <Lists  list={list}  key={i}/>
        ))}
        <Footer/>
    </div>
  )
}

export default Home