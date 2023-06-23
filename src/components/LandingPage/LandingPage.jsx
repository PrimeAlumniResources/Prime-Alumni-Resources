import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './LandingPage.css';

// CUSTOM COMPONENTS
import RegisterForm from '../RegisterForm/RegisterForm';
import LoginForm from '../LoginForm/LoginForm';
import LandingPageHeader from './LandingPageHeader';

function LandingPage() {
  const [heading, setHeading] = useState('Welcome');
  const navigate = useNavigate();

  const [theTruth, setTheTruth] = useState(undefined);

  const isTrue = () => {
    setTheTruth(true);
    display(); 
  }

  const isFalse = () => {
    setTheTruth(false);
    display(); 
  }

  const display = () => {
    if (theTruth === undefined) {
      return (null);
    } else if (theTruth === true) {
      return <LoginForm/>
    } else if (theTruth === false) {
      return <RegisterForm/>
    }
  }

  return (
    <div className="content-container mb-5"
         style={{ 
            backgroundImage: "url('https://i.ibb.co/4W3s9jL/Artboard-1.png')",
            backgroundSize: "cover",
            backgroundPosition: "center", 
            }}>

      <LandingPageHeader/>

        <div className="login-container flex items-center justify-center text-white bg-gradient-to-r from-black to-transparent h-screen ml-5 w-64">
      
          <div className="">  
            {display()}
              <div className="grid place-items-center mb-20 px-5 py-5">
                <h4 className="font-bold mt-3">Prime Alumni Resources</h4>

                <div className="space-x-5 place-items-center mt-2">
                  <button className="" onClick={isFalse}>
                    Register
                  </button>
                  <button className="" onClick={isTrue}>
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
