import './JobsPage.css';
import { React, useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import JobsList from './JobsList/JobsList';

export default function JobsPage() {
  useEffect(() => {
    dispatch({ type: 'GET_JOBS' });
  }, []);

  // SEARCH
  const [search, setSearch] = useState('');
  // console.log(search);

  // FILTER
  const [selectedTag, setSelectedTag] = useState('');

  // MODAL
  const [modal, setModal] = useState(false);

  const toggleModal = () => {
    setModal(!modal);
    document.body.classList.toggle('overlay');
  }

  if(modal) {
    document.body.classList.add('active-modal')
  } else {
    document.body.classList.remove('active-modal')
  }

  // ADD JOBS
  const dispatch = useDispatch();

  const [positionInput, setPositionInput] = useState('');
  const [positionInput2, setPositionInput2] = useState('');
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
        position: positionInput || positionInput2,
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
    <div className='job-page-container bg-gray-50'>
      <div>
        <div className='flex'>

          <div className='top-container fixed '>

            <input 
              value={search}
              onChange={e => setSearch(e.target.value)}
              className="search-bar" 
              type="text" 
              placeholder="Search"/>


            <button 
            onClick={toggleModal}
            className='add-btn pb-1 pt-1 pl-2 pr-2 rounded-md hover:bg-gray-200'
            >
              Add Jobs +
            </button>

          </div>
          

          {modal && (
            <div className="modal">
              <div onClick={toggleModal} className="overlay"></div>

              <div className="modal-content pb-5">
                <h3 className='modal-title leading-6 font-semibold text-gray-900'>Add Job</h3>

                {/* <button className="close-modal hover:underline" onClick={toggleModal}>
                  X
                </button> */}
                
                <div>Position</div>
                  <select 
                    className='select-container focus:outline-none border w-44 pl-1 h-7 rounded-md'
                    value={positionInput}
                    onChange={(event) => setPositionInput(event.target.value)}>
                    <option value="" disabled>Select your option</option>
                    <option value="Software Engineer">Software Engineer</option>
                    <option value="Full Stack Engineer">Full Stack Engineer</option>
                    <option value="Front End Developer">Front End Developer</option>
                    <option value="Back End Developer">Back End Developer</option>
                    <option value="Data Engineer">Data Engineer</option>
                    <option value="QA Engineer">QA Engineer</option>
                    <option value="DevOps Engineer">DevOps Engineer</option>
                    <option value="Cloud Architect">Cloud Architect</option>
                    <option value="Security Engineer">Security Engineer</option>
                    <option value="Mobile Developer">Mobile Developer</option>
                  </select>
                
                <div className="text-gray-400 font-light">or</div>
                  <input
                    className="focus:outline-none h-7 border w-44 pl-2 mb-3 rounded-md" 
                    type="text focus:outline-none"
                    value={positionInput2}
                    onChange={event => setPositionInput2(event.target.value)} />

                <div>Company</div>
                  <input 
                    className="focus:outline-none h-7 border w-44 pl-2 mb-3 rounded-md"
                    type="text"
                    value={companyInput}
                    onChange={event => setCompanyInput(event.target.value)} />

                <div>Link</div>
                  <div className="modal-drop focus:outline-none">
                    <input
                    className="focus:outline-none h-7 border w-44 pl-2 rounded-md" 
                    type="text"
                    value={linkInput}
                    onChange={event => setLinkInput(event.target.value)} />
                  </div>
                
                <div className='flex justify-end mt-3 mb-1'>
                  <button
                    onClick={handleClick}
                    className='add-job-btn h-8 w-14 rounded-md bg-gray-300 hover:text-gray-200 hover:bg-gray-400 cursor-pointer'>
                    Add
                  </button>
                </div>
                
              </div>
            </div>
          )}

            <script src="https://unpkg.com/tailwindcss-jit-cdn"></script>
        </div>

        <div className='flex'>

          <JobsList selectedTag={selectedTag} search={search}/>

          {/* TAG MENU */}
          <div className='tag-container fixed'>
            <div className='mt-3 mb-3 font-bold'>Tags</div>

            <div className='mb-4'>
              <button className='filter-options' onClick={() => setSelectedTag('')}>Show All</button>
            </div>
            <div className='mb-4'>
              <button className='filter-options' onClick={() => setSelectedTag('Software Engineer')}>Software Engineer</button>
            </div>
            <div className='mb-4'>
              <button className='filter-options' onClick={() => setSelectedTag('Full Stack Engineer')}>Full Stack Engineer</button>
            </div>
            <div className='mb-4'>
              <button className='filter-options' onClick={() => setSelectedTag('Front End Developer')}>Front End Developer</button>
            </div>
            <div className='mb-4'>
              <button className='filter-options' onClick={() => setSelectedTag('Back End Developer')}>Back End Developer</button>
            </div>
            <div className='mb-4'>
              <button className='filter-options' onClick={() => setSelectedTag('Data Engineer')}>Data Engineer</button>
            </div>
            <div className='mb-4'>
              <button className='filter-options' onClick={() => setSelectedTag('QA Engineer')}>QA Engineer</button>
            </div>
            <div className='mb-4'>
              <button className='filter-options' onClick={() => setSelectedTag('DevOps Engineer')}>DevOps Engineer</button>
            </div>
            <div className='mb-4'>
              <button className='filter-options' onClick={() => setSelectedTag('Cloud Architect')}>Cloud Architect</button>
            </div>
            <div className='mb-4'>
              <button className='filter-options' onClick={() => setSelectedTag('Security Engineer')}>Security Engineer</button>
            </div>
            <div className='mb-4'>
              <button className='filter-options' onClick={() => setSelectedTag('Mobile Developer')}>Mobile Developer</button>
            </div>
          </div>

        </div>
        
      </div>

      

    </div> 

  );
}
