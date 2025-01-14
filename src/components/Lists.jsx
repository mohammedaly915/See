import React, { useRef, useState } from 'react'
import ListItems from './ListItems'
import { ArrowBack } from '@mui/icons-material';
import { ArrowForward } from '@mui/icons-material';

const Lists = ({list}) => {
  const [isMoved,setIsMoved]=useState(false)
  const [slideNum,setSlideNumber]=useState(0)
  const [clickLimit, setClickLimit] = useState(window.innerWidth /250 );

  const listRef=useRef();
  
  const  handleSlideBtn=(direction)=>{
    console.log(clickLimit);
    console.log(listRef.current.getBoundingClientRect());
      setIsMoved(true)
      let distance = listRef.current.getBoundingClientRect().x - 50;
      if(direction === 'left' && slideNum>0){
        setSlideNumber(slideNum-1)
        listRef.current.style.transform=`translateX(${250+distance}px)`

      } 
      if(direction ==='right' && slideNum<(list.content.length+1)-clickLimit) {
        setSlideNumber(slideNum+1);
        listRef.current.style.transform=`translateX(${-250+distance}px)`
      }
       
    }
  return (
    <div className='list'>
         <span className='listTitle'>{list.title}</span>
         <div className='wrapper'>
            <ArrowBack className='sliderArrow left'  onClick={()=>{handleSlideBtn("left")}} style={{display:!isMoved&&"none"}} />
            <div className='contaiiner' ref={listRef}>
                {list.content.map((content,i)=>(
                  <ListItems movieID={content}  index={i} key={i}/>))}  
            </div>
            <ArrowForward className='sliderArrow right' onClick={()=>{handleSlideBtn("right")}}/>
         </div>  
         
    </div>
  )
}

export default Lists