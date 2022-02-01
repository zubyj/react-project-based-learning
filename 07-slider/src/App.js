import React, { useState, useEffect } from 'react';
import { FiChevronRight, FiChevronLeft } from 'react-icons/fi';
import { FaQuoteRight } from 'react-icons/fa';
import data from './data';
function App() {

  const [index, setIndex] = useState(0);
  const [reviews, setReviews] = useState(data);
  const {id, image, name, title, quote} = reviews[index];

  // checks if review index is in valid range (0 < index < reviews.length)
  const updateIndex = (newIndex) => {
    const size = reviews.length-1;
    // user clicks right arrow on last item. takes user to first item.
    if (newIndex > size) {
      newIndex = 0;
    }
    // user clicks left arrow on first item. takes user to last item.
    if (newIndex < 0) {
      newIndex = size; 
    }

    setIndex(newIndex);
  }

  return (<section>
      <button onClick={() => updateIndex(index-1)}>Left Arrow</button>
      <button onClick={() => updateIndex(index+1)}>Right Arrow</button>
      <h2 className="title">Reviews</h2>;
      <img src={image} alt={name} className="person-img"/> 
      <h2>{name}</h2>
      <h2>{title}</h2>
      <p>{quote}</p>
    </section>)
}

export default App;
