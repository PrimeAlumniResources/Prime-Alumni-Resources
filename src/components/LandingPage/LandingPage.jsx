import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './LandingPage.css';

// CUSTOM COMPONENTS
import RegisterForm from '../RegisterForm/RegisterForm';

function LandingPage() {
  const [heading, setHeading] = useState('Welcome');
  const navigate = useNavigate();

  const onLogin = (event) => {
    navigate('/login');
  };

  return (
    <div className="w-screen border-solid border-2 border-red-500 ">
      <div className="w-40 border-solid border-2 border-sky-500 ">
      <h2>{heading}</h2>

        <div className="grid">
     
          <div className="">
            <RegisterForm />

            <div className='border-solid border-2 border-red-500 '>
              <h4>Already a Member?</h4>
              <button className="btn btn_sizeSm" onClick={onLogin}>
                Login
              </button>
            </div>

          </div>
        </div>
      </div>
    </div>
    
  );
}

export default LandingPage;
