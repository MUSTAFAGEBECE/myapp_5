import React, { useState } from 'react';
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';
const Question = ({title,info}) => {
  const[showınfo,setShowınfo]=useState(false)
  return (
    
        
     <article className='question' >
        <header>
          <h4>{title}</h4>
          <button className='btn' onClick={()=>setShowınfo(!showınfo)}  >
            {showınfo? <AiOutlineMinus/>:<AiOutlinePlus/> }
          </button>
        </header>
        {showınfo && <p>{info}</p>}
      </article>
        

    
  );
}

export default Question;