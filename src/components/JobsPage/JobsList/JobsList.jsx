import { React } from 'react';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import JobItem from './JobItem/JobItem';
import './JobsList.css';

export default function JobsList({ selectedTag, search }) {
  const jobs = useSelector((store) => store.jobs);
  console.log("JOBS:", jobs);

  // Filter the jobs based on the selected tag and search input
  const filteredJobs = jobs.filter((job) => {
    // Apply the tag filter if a tag is selected
    if (selectedTag && job.position !== selectedTag) {
      return false;
    } else if (
        search && !(
          job.position.toLowerCase().includes(search.toLowerCase()) ||
          job.company.toLowerCase().includes(search.toLowerCase())
      )
      ) {
      return false;
    }
    return true;
  });

  return (
    <div className="job-posts-container ">
      {filteredJobs.map((job) => (
        <JobItem key={job.id} job={job} />
      ))}
    </div>
  );
}
