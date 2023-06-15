import './JobsPage.css';
import { React, useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import JobsList from './JobsList/JobsList';

export default function JobsPage() {
  useEffect(() => {
    dispatch({ type: 'GET_JOBS' });
  }, []);

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
    // NOW GO TO SAGA
  }

  const handleClick = () => {
    addJobs();
    toggleModal();
    // console.log('it;s working'); WORKS
  }

  return (
    <div className='job-page-container'>
      <div>
        <div className='flex'>

          <div className='top-container fixed flex'>
            <div className='top-title text-2l mb-3 mt-3'>Job Postings</div>

            <button 
            onClick={toggleModal}
            className='top-btn'
            >
              Add Jobs
            </button>
          </div>
          

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
                    <option value="Software Engineer">Full Stack Engineer</option>
                    <option value="Front End Developer">Front End Developer</option>
                    <option value="Back End Developer">Back End Developer</option>
                    <option value="Data Engineer">Data Engineer</option>
                    <option value="Security Engineer">Security Engineer</option>
                    <option value="QA Engineer">QA Engineer</option>
                    <option value="DevOps Engineer">DevOps Engineer</option>
                    <option value="Cloud Architect">Cloud Architect</option>
                    <option value="Other">Other</option>
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

        <div className='flex'>

          <JobsList/>

          <div className='tag-container fixed'>
            <div className='mt-3 mb-3 font-bold'>Tags</div>

            <div className='mb-4'>
              <button className='filter-options'>Javascript</button>
            </div>
            <div className='mb-4'>
              <button className='filter-options'>Java</button>
            </div>
            <div className='mb-4'>
              <button className='filter-options'>PHP</button>
            </div>
            <div className='mb-4'>
              <button className='filter-options'>C#</button>
            </div>
            <div className='mb-4'>
              <button className='filter-options'>Python</button>
            </div>
            <div className='mb-4'>
              <button className='filter-options'>Typescript</button>
            </div>
            <div className='mb-4'>
              <button className='filter-options'>C</button>
            </div>
            <div className='mb-4'>
              <button className='filter-options'>Ruby</button>
            </div>
            <div className='mb-4'>
              <button className='filter-options'>MongoDB</button>
            </div>
          </div>

        </div>
        
      </div>

      

    </div> 

  );
}
