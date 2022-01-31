import React, { useState } from 'react';
import data from './data';
import SingleQuestion from './Question';
function App() {
  const [questions, setQuestions] = useState(data);

  return <main>
      <section className="container">
        <div className="title">
          Questions And Answers About Login
        </div>
        <div>
          {questions.map((question) => {
                const {id, title, info} = question;
                return (
                  <SingleQuestion key={id} title={title} info={info} />
                )
              }
              )
          }
        </div>
      </section>
    </main>
}

export default App;

