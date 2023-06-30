/**
* This file displays the list of Jobs added. Includes JobItem component"
* @author https://github.com/YuhBoh
* @version 6/28/2023
*/
import { React } from 'react';
import { useSelector } from 'react-redux';
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
