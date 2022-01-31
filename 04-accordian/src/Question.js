import React, { useState } from 'react';
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';
const Question = ({id, title, info}) => {

  const [showInfo, setShowInfo] = useState(false);

  return (
    <section>
      <header>
        <h4>{title}</h4> 
        <button className='btn' onClick={() => setShowInfo(!showInfo)}>
          {showInfo ? '-' : '+'}
        </button>
      </header>
      <div>
        {showInfo && info}
      </div>
    </section>
  )

};

export default Question;
