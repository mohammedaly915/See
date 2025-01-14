import React from 'react'
import video from "https://res.cloudinary.com/dswehdo2v/video/upload/v1736824649/WhatsApp_Video_2025-01-14_at_05.10.55_84c3cd94_ryeqw8.mp4"
import ArrowBackoutline from '@mui/icons-material/ArrowBackIosOutlined';
import { Link } from 'react-router-dom';
const Watch = () => {
  return (
    <div className='watch'>
    <Link to="/">
      <div className='back'>
      <ArrowBackoutline/>
        Home
      </div>
    </Link>
      <video src={video} className='video' autoPlay progress controls />
    </div>
  )
}

export default Watch