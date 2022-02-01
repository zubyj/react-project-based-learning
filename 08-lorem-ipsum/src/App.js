import React, { useState } from 'react';
import data from './data';
function App() {
  
  const [text, setText] = useState([]);
  const [count, setCount] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(typeof count);
    if (count <= 0 || count > data.length-1) {
      console.log('gotcha')
      setCount(0);
      setText(['Please enter a valid paragraph length betwen 0 and ' + (data.length-1).toString()] )
      return;
    }
    console.log('the count is ' + count);
    setText(data.slice(0, count));
  }
  
  return (
      <section className="section">
        <h2 >Tired of Boring Lorem Ipsum</h2>
        <form onSubmit={handleSubmit}>
          <label>
            Paragraphs
          </label>
          <input type="number" onChange={(e) => setCount(parseInt(e.target.value))}/>
          <button type="submit">GENERATE</button>
        </form>
        {text.map((paragraph, index) => {
            return <p key={index}>{paragraph}</p>
          })
        }
      </section>
      )
   }

  export default App;
