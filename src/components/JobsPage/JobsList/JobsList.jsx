import { React } from 'react';
import { useSelector } from 'react-redux';
import JobItem from './JobItem/JobItem';
import './JobsList.css';

export default function JobsList() {

  const jobs = useSelector((store) => store.jobs);

  return(
        <div className="job-posts-container">
          {
            jobs.map(job => {
              
                return (
                <JobItem key={job.id} job={job}/>
              )          
            })
          }
        </div>
  );
}