import React, { useEffect, useState } from 'react'
import { InfoOutlined, PlayArrow } from '@mui/icons-material'
import axios from 'axios'

const Featured = ({type , setGenre}) => {
    const [movie, setMovie]=useState([])
    // func to get random movie
    const getRandomMovie = async () => {
        try {
          const res = await axios.get(`/movies/random?type=${type}`
          , {
            headers: {
              Authorization:JSON.parse(localStorage.getItem("user")).token,
            },
          }
          );
          setMovie(res.data[0])

        } catch (err) {
          console.log(err);
        }
      };
// access func to get random element 
      useEffect(()=>{
        getRandomMovie()
      },[type])

  return (
    <div className='featured'>
    {type&&
        <div className='category'>
            <span>{type==="movie"?"Movies":"Series"}</span>

            <select name='genre' id='genre' onChange={(e)=>setGenre(e.target.value)}>
                <option >Genre</option>
                <option value='Drama'>Drama</option>
                <option value='Comedy'>Comedy</option>
                
            </select> 
        </div>
    }
        <img src={movie.img} className='landImg'   alt=""/>
        <div className='info'>
            <span className='title'>{movie.title}</span>
            <div className='specs'>
            <span className='duration'>{movie.duration}</span>
            <span className='genre'>{movie.genre}</span>
            </div>
            <div className='buttons'>
                <button className='play'>
                    <PlayArrow />
                    <span>play</span>
                </button>
                <button className='more'>
                    <InfoOutlined />
                    <span>info</span>
                </button>
            </div>
        </div>
    </div>
  )
}

export default Featured