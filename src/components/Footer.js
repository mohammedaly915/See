import React from 'react'
import { Link } from 'react-router-dom'
import { Facebook, Instagram, Twitter, YouTube, YoutubeSearchedFor } from '@mui/icons-material';

const Footer = () => {
  return (
    <div className='footer'>
        <div className='icon_wrraper'>
            <Link className='link twitter'><Twitter className='icon'/></Link>
            <Link className='link facebook'><Facebook className='icon'/></Link>
            <Link className='link instgram'><Instagram className='icon'/></Link>
            <Link className='link youtube'><YouTube className='icon'/></Link>
        </div>
        <div className='bottom_menu_wrraper'>
            <div className='link_menu'>
                <Link className='link '>Home</Link>
                <Link className='link service'>Service</Link>
                <Link className='link contact'>Contact Us</Link>
                <Link className='link privacy'>Privacy</Link>
            </div>
            <div className='logo'><Link className='link'>Logo</Link></div>
        </div>
    </div>
  )
}

export default Footer