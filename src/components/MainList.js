import { AddRounded, PlayArrow, ThumbDownAltRounded, ThumbUpAltRounded } from '@mui/icons-material'
import React, { useState } from 'react'


const MainList = ({index,movie}) => {
    const [isHovered,setIsHovered]=useState(false)
    const trailer = "https://res.cloudinary.com/dswehdo2v/video/upload/v1736824649/WhatsApp_Video_2025-01-14_at_05.10.55_84c3cd94_ryeqw8.mp4"


  return ( 
        <>
            <div 
    className='listItems' 
    style={{left: isHovered && index * 250 - 50 +index * 2.5}}
    onMouseEnter={()=>setIsHovered(true)} 
    onMouseLeave={()=>setIsHovered(false)}
    >
      <img src="https://th.bing.com/th/id/OIP.xOnM9cyJtKD23au9pP__iQHaK-?rs=1&pid=ImgDetMain" alt=""/>
      {
        isHovered &&( 
      <>
      <video src={trailer} autoPlay={true} loop/>
      <div className='itemInfo'>
          <div className='icons'>
            <PlayArrow className='play icon'/>
            <AddRounded className='add icon'/>
            <ThumbUpAltRounded className='like icon'/>
            <ThumbDownAltRounded className='dis icon'/>
            <span className='type'>{movie.isSeries?"Series":"Movie"}</span>
          </div>
          <div className='itemInfoTop'>
              <span className='title'>{movie.title} | </span>
              <span>{movie.duration} | </span>
              <span className='limit'>+{movie.limit}</span>
              <span>{movie.year}</span>
          </div>
          <div className='desc'>
          {movie.desc.slice(0,50)}...
          </div>
          <div className='genre'>{movie.genre}</div>
      </div>
      </>
      )}
    </div>
        </>
    )
}

export default MainList