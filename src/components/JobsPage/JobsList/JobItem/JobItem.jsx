import {React, useState } from 'react';
import { useDispatch }from 'react-redux';
import './JobItem.css';

export default function JobItem({job}) {
  const dispatch = useDispatch();

  console.log('JOB:', job);

  return (
    <div className="poo">

      
    </div>
  );
}