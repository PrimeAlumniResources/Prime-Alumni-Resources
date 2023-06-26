import { React, useState } from 'react';
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

      <div className='job-post-left'>
        <img className='w-20 mt-5 ml-5' src={building} alt="" />
      </div>

      <div className='job-post-mid'>

        <div className='font-bold hover:underline text-blue-600'>
          <a href={link}>{position}</a>
        </div>

        <div>
          {company}
        </div>

        <div className='timestamp-title'>
          Posted on:
        </div>

        <div className='timestamp'>
          {formattedDate}
        </div>

      </div>

      <div className='job-post-right'>
      </div>

    </div>
  );
}
