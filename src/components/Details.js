import React, { useState } from 'react'
import ListItems from './ListItems'

const Details = () => {
  const [Related,setRelated] = useState(true)
  const [More,setMore]=useState(false);
  

  return (
    <div className='details'>
        <div className='selector'>
            <span onClick={()=>
            {setMore(false);
             setRelated(true)
            }} className={Related? "active":""}>Related</span>
            <span onClick={()=>
            {setMore(true);
             setRelated(false)
            }}  className={More ? "active":""}>More</span>
        </div>
    {Related&&
      <div className='list_related_movie'>
          <ListItems/>
          <ListItems/>
          <ListItems/>
          <ListItems/>
          <ListItems/>
          <ListItems/>
          </div>}
    {
      More&&
      <div>
        <h1>About</h1>
        <div>
          <span>Season 1  </span>
          <span> * Drama</span>
        </div>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
      </div>
    }
        
        
    </div>
  )
}

export default Details