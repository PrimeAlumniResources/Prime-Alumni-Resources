import { React, useState } from 'react';
import { useDispatch } from 'react-redux';
import './JobItem.css';

export default function JobItem({ job }) {
  const dispatch = useDispatch();

  const company = job.company;
  const link = job.link;
  const position = job.position;
  const timestamp = new Date(job.created_at); // Convert to Date object

  const formattedDate = `${timestamp.getMonth() + 1}-${timestamp.getDate()}-${timestamp.getFullYear()}`; // Format the date

  console.log('company:', company);

  return (
    <div className="job-post-container">

      <div className='job-post-left'>
        (Company Picture Here?)
      </div>

      <div className='job-post-mid'>

        <div className='font-bold'>
          {position}
        </div>

        <div>
          {company}
        </div>

        <div className='hover:underline'>
          <a href={link} target="_blank">{link}</a>
        </div>

        <div className='timestamp-title'>
          Posted on:
        </div>

        <div className='timestamp'>
          {formattedDate}
        </div>

      </div>

      <div className='job-post-right'>
        (Save Icon?)
      </div>

    </div>
  );
}
