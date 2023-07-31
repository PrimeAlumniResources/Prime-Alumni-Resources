/**
* This file displays the individual Jobs that will be added in JobsList"
* @author https://github.com/YuhBoh
* @version 6/28/2023
*/

import { React } from 'react';
import { useDispatch } from 'react-redux';
import './JobItem.css';
import building from './images/building.png';

export default function JobItem({ job }) {
  const dispatch = useDispatch();

  const company = job.company;
  const link = job.link;
  const position = job.position;
  const timestamp = new Date(job.created_at); // Convert to Date object

  const formattedDate = `${timestamp.getMonth() + 1}-${timestamp.getDate()}-${timestamp.getFullYear()}`; // Format the date

  return (
    <div className="job-post-container ">

      {/* IMG FOR BUILDING/COMPANY LOGO */}
      <div className='job-post-left'>
        <img className='w-20 mt-5 ml-5' src={building} alt="" />
      </div>

      <div className='job-post-mid'>

        {/* POSITION TITLE W/ LINK */}
        <div className='font-bold hover:underline text-blue-600'>
          <a href={link}>{position}</a>
        </div>

        {/* COMPANY TITLE */}
        <div>
          {company}
        </div>

        <div className='timestamp-title'>
          Posted on:
        </div>

        {/* WHEN JOB IS POSTED */}
        <div className='timestamp'>
          {formattedDate}
        </div>

      </div>

     {/* FUTURE FEATURE: SAVE BTN / T HUMBS UP THUMBS DOWN??? / DELETE JOBS? */}
      <div className='job-post-right'>
      </div>

    </div>
  );
}

/**
* This file acts as the component for individual jobs 
* @author Yuh-Boh Feng
*  7/30/2023
*/
