import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './LandingPage.css';

// CUSTOM COMPONENTS
import RegisterForm from '../RegisterForm/RegisterForm';
import LandingPageHeader from './LandingPageHeader';

function LandingPage() {
  const [heading, setHeading] = useState('Welcome');
  const navigate = useNavigate();

  const onLogin = (event) => {
    navigate('/login');
  };

  return (
    <div className="container">
      <LandingPageHeader />

      <div className="grid place-items-end mt-16">
     
        <div className="w-1/3">
          <RegisterForm />  
            <div className="grid place-items-center mt-4">
              <h4 className="text-center">Already a Member?</h4>
              <button className="" onClick={onLogin}>
                Login
              </button>
            </div>
        </div>

      </div>
    </div>
  );
}

export default LandingPage;
