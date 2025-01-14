import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link, useLocation } from 'react-router-dom';
import MainList from './MainList';
const ListItems = ({movieID,index}) => {

  const [movie,setMovie]=useState()
  const location=useLocation()
  const getMovie = async () => {
    try {
      const res = await axios.get("/movies/find/" + movieID, {
        headers: {
          Authorization:JSON.parse(localStorage.getItem("user")).token,
        },
      }
      );
      setMovie(res.data);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(()=>{  
    getMovie();
  },[movieID])
  
  return (
    <Link to="/movie">
    {

      location.pathname==="/movie"?(<div className='list_related_movie'>
        <div className='related_movie'>
            <div className='movie_view'>
                <img src='https://th.bing.com/th/id/OIP.xOnM9cyJtKD23au9pP__iQHaK-?rs=1&pid=ImgDetMain' alt="movie"/>
            </div>
        </div>
        </div>):(
          <MainList index={index} movie={movie}/>

        )}
    </Link>
  ) 
}

export default ListItems