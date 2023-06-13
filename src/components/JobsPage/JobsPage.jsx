import './JobsPage.css';
import { React, useState } from 'react';
import { useDispatch } from 'react-redux';
import JobsList from './JobsList/JobsList';

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

  const [positionInput, setPositionInput] = useState('');
  const [companyInput, setCompanyInput] = useState('');
  const [linkInput, setLinkInput] = useState('');

  const addJobs = () => {
    const timestamp = new Date(); // Get the current timestamp

  //   console.log('Payload:', {
  //     position: positionInput,
  //     title: titleInput,
  //     link: linkInput,
  //     timestamp: timestamp.toISOString()
  // }); WORKS

    dispatch({ 
      type: 'POST_JOBS', 
      payload: {
        position: positionInput,
        company: companyInput,
        link: linkInput,
        timestamp: timestamp.toISOString()
      }
    });
  }

  const handleClick = () => {
    addJobs();
    toggleModal();
    // console.log('it;s working'); WORKS
  }

  return (
    <div>
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
              
              <div>Position</div>
                <select 
                  value={positionInput}
                  onChange={(event) => setPositionInput(event.target.value)}>
                  <option value="" disabled>Select your option</option>
                  <option value="Software Engineer">Software Engineer</option>
                </select>

              <div>Company</div>
                <input 
                  type="text"
                  value={companyInput}
                  onChange={event => setCompanyInput(event.target.value)} />

              <div>Link</div>
                <div className="modal-drop">
                  <input 
                  type="text"
                  value={linkInput}
                  onChange={event => setLinkInput(event.target.value)} />
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

          <script src="https://unpkg.com/tailwindcss-jit-cdn"></script>
      </div>

      <JobsList/>

    </div> 

  );
}