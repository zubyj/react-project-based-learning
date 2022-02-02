import React, { useState } from 'react'
import SingleColor from './SingleColor'
import Values from 'values.js'


function App() {

  const [color, setColor] = useState('');
  const [error, setError] = useState(false);
  const [list, setList] = useState(new Values('#f15025').all(10));

  const handleSubmit = (e) => {
    e.preventDefault();
    let colors = new Values(color).all(10);
    setList(colors);
    console.log(colors);
    console.log('you clicked submit');
  }

    return (
      // code fragment to add multiple sections.
      <>
      <section className="container">
        <h1>Lubna's Color Generator</h1>
        <form onSubmit={handleSubmit}>
          <label name="color">
            Enter color (hex) :
          </label>
          <input type="text" placeholder="#f15025" onChange={(e) => setColor(e.target.value)} />
          <button type="submit">
            Submit
          </button>
        </form>
        <div className="container">
          {color}
        </div>
      </section>
      <section className="colors">
        {list.map((color, index) => {
          console.log(color);
          return <SingleColor key={index} {...color} index={index}/>
        })}
      </section>
      </>
    ); 
}


export default App;
