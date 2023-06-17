import { React } from 'react';
import { useSelector } from 'react-redux';
import JobItem from './JobItem/JobItem';
import './JobsList.css';

export default function JobsList({selectedTag}) {

  const jobs = useSelector((store) => store.jobs);
  // Filter the jobs based on the selected tag
  const filteredJobs = selectedTag
    ? jobs.filter((job) => job.position === selectedTag)
    : jobs;

  return(
        <div className="job-posts-container">
          {
            filteredJobs.map((job) => (
              <JobItem key={job.id} job={job}/>      
            ))
          }
        </div>
  );
}