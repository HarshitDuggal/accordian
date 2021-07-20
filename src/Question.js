import React, { useState } from 'react';
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';
const Question = ({title,info}) => {
  const [showinfo, setshowinfo] = useState(false);
  const show = () => {
    setshowinfo(!showinfo)
  }
  return (
    <article className='question'>
      <header>
        <h4>{title}</h4>
        <button onClick={show} className = 'btn'>{showinfo ? <AiOutlineMinus/> : <AiOutlinePlus/>}</button>
      </header>
      {showinfo && <p>{info}</p>}
    </article>
  )
};

export default Question;
