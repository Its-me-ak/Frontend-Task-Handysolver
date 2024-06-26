import React, { useContext } from 'react'
import JobContext from '../context/JobContext';

const JobList = () => {
    const { jobs, selectedJobId, handleSelectJob, handleClickNewJob } = useContext(JobContext);
  return (
      <div className="lg:pl-4 pl-0">
          <button className="px-5 w-40 py-2 bg-green-500 text-white" onClick={handleClickNewJob}>New Job+</button>
          <ul>
              {jobs.map((job) => (
                  <li key={job.id} className={`w-40 p-2 ${selectedJobId === job.id ? 'bg-gray-400 text-white' : ' bg-white'}`} onClick={() => handleSelectJob(job.id)}>
                      <div className="flex justify-between items-center">
                          <span>{job.title}</span>
                      </div>
                  </li>
              ))}
          </ul>
      </div>
  )
}

export default JobList