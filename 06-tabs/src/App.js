import React, { useState, useEffect } from 'react'
import { FaAngleDoubleRight } from 'react-icons/fa'
// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url = 'https://course-api.com/react-tabs-project'
function App() {

  const [loading, setLoading] = useState(true);
  const [jobs,  setJobs] = useState([]);
  const [value, setValue] = useState(0);

  const fetchJobs = async () => {
    // fetch the data from url asynchronously
    // asynchronous - dont execute everything at once. execute thigns
    // in order, get the result and send the response. 
    const response = await fetch(url);   
    const newJobs = await response.json();
    setJobs(newJobs);
    setLoading(false);
  }

  // called as soon as page renders
  useEffect(() => {
    fetchJobs();
  }, []);

  if (loading) {
    return (
      <h3> Loading ... </h3>
    )
  } 

  // returns one job, whichever is set to index.
  const { company, dates, duties, title } = jobs[value];
  return (
    <section className="section">
      <div className="title">
        <h2>Experience</h2>
        <div className="underline"></div>
        <div className="jobs-center">
          <div className="btn-container">
          {jobs.map((job, index) => {
            return (
              <button
                key={job.id}
                onClick={() => setValue(index)}
                className={`job-btn ${index === value && 'active-btn'}`}
              >
                {job.company}
              </button>
            )
          })}
          </div>
          <article className="job-info">
            <h3>{title}</h3>
            <h4>{company}</h4>
            <p>
              {duties.map((duty, index) => {
                return <div key={index} className="job-desc">
                  <FaAngleDoubleRight className="job-icon"></FaAngleDoubleRight>
                  {duty}
                </div>
              })
              }
            </p>
          </article>
        </div>
      </div>
    </section>

  )
}

export default App
