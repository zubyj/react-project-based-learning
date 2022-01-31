import React, { useState } from 'react';
import data from './data';
import List from './List';
function App() {
  // grabs people objects from data.js
  const [people, setPeople] = useState(data)
  const [showPeople, setShowPeople] = useState(false)

  return <main>
    <section className="container">
    <h3>{people.length} birthdays today</h3>
    <List people={showPeople ? people : []} />
    <button onClick={() => setShowPeople(!showPeople)}>
        {showPeople ? 'Collapse ' : 'Show'} Birthdays
    </button>
    </section>
  </main>
}

export default App;
