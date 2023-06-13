import './JobsPage.css';
import { React, useState } from 'react';
import { useDispatch } from 'react-redux';

export default function JobsPage() {
  // MODAL
  const [modal, setModal] = useState(false);

  const toggleModal = () => {
    setModal(!modal)
  }

  if(modal) {
    document.body.classList.add('active-modal')
  } else {
    document.body.classList.remove('active-modal')
  }

  // ADD JOBS
  const dispatch = useDispatch();

  const [jobsTitleInput, setJobsTitleInput] = useState('');
  const [jobsDescriptionInput, setJobsDescriptionInput] = useState('');
  const [jobTagInput, setJobTabInput] = useState('');

  const addJobs = () => {
    dispatch({ 
      type: 'SAGA/ADD_JOBS', 
      payload: {
        title: jobsTitleInput,
        description: jobsDescriptionInput,
        tag: jobTagInput
      }
    });
  }

  const handleClick = () => {
    addJobs();
    toggleModal();
    console.log('it;s working');
  }

  return (
    <div className='flex'>
      <div className='text-5xl'>Job Postings</div>

      <button 
      onClick={toggleModal}
      className="btn-modal">
        Add Jobs
      </button>

            {modal && (
        <div className="modal">
          <div onClick={toggleModal} className="overlay"></div>

          <div className="modal-content">
            <div className='modal-title'>Add Job</div>

            <button className="close-modal" onClick={toggleModal}>
              X
            </button>
            
            <div>Title</div>
            <input 
              type="text"
              value={jobsTitleInput}
              onChange={event => setJobsTitleInput(event.target.value)} />

            <div>Description</div>
            <textarea 
              className="modal-textarea" 
              name="subject" 
              placeholder="Company, Location, Pay, Description, etc..."
              value={jobsDescriptionInput}
              onChange={event => setJobsDescriptionInput(event.target.value)}/>

            <div>Tag</div>
            <div className="modal-drop">
              <select 
                value={jobTagInput}
                onChange={(event) => setJobTabInput(event.target.value)}>
                <option value="" disabled>Select your option</option>
                <option value="hurr">Durr</option>
              </select>
            </div>
            
            <div>
              <button
              onClick={handleClick}>
                Add
              </button>
            </div>
            
          </div>
        </div>
      )}

      
    </div>
  );
}
