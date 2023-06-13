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

  const addJobs = (event) => {
    event.preventDefault();

    dispatch({ 
      type: 'SAGA/ADD_JOBS', 
      payload: jobsInput 
    });
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
            <div class="modal-drop">
              <select name="Tag">
                <option value="" disabled selected>Select your option</option>
                <option value="hurr">Durr</option>
              </select>
            </div>
            
            <div>
              <button
              onClick={event => {
                toggleModal;
                addJobs;
              }}>
                Add</button>
            </div>
            
          </div>
        </div>
      )}

      
    </div>
  );
}
