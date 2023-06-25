import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './LandingPage.css';

// CUSTOM COMPONENTS
import RegisterForm from '../RegisterForm/RegisterForm';
import LoginForm from '../LoginForm/LoginForm';
import LandingPageHeader from './LandingPageHeader';
import Quotes from './Quotes';

// Font link: <link rel="preconnect" href="https://fonts.googleapis.com">
// <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
// <link href="https://fonts.googleapis.com/css2?family=Ysabeau+SC:wght@100&display=swap" rel="stylesheet"></link>

// font-family: 'Ysabeau SC', sans-serif;

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
      return (<Quotes/>);
    } else if (theTruth === true) {
      return <LoginForm/>
    } else if (theTruth === false) {
      return <RegisterForm/>
    }
  }

  return (
    <div className="border relative">
      <div className="content-container mb-5"
            style={{ 
              backgroundImage: "url('https://i.ibb.co/4W3s9jL/Artboard-1.png')",
              backgroundSize: "cover",
              backgroundPosition: "center", 
              }}>

      <LandingPageHeader/>

        <div className="login-container flex items-center justify-center text-white bg-gradient-to-r from-black to-transparent h-screen w-5/12 overflow-hidden">
      
          <div className="left-side">  

              <div className="grid place-items-center mb-36 px-5">

                {display()}

                <div className="top-10 space-x-5 place-items-center">
                  <button className="hover:underline" onClick={isTrue}>
                    Login
                  </button>
                  <button className="bg-[#07877e] rounded-lg pl-5 pr-5 pt-2 pb-2 hover:underline" onClick={isFalse}>
                    Register
                  </button>
                </div>
                
              </div>

          </div>

        </div>

         <div className="right-side text-white absolute right-20 top-[35%]">
          <div className="connect text-5xl mb-10 font-400 drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,1)]">
            Connect.
          </div>
          <div className="collaborate text-5xl font-600">
            <span className="bg-gradient-to-b from-white to-[#0bdbcc] bg-clip-text text-transparent 
            drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,1)]">
              Collaborate.
            </span>
          </div>
          <div className="captivate text-5xl mt-10 text-[#0bdbcc] font-800 drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,1)]">
            Captivate.
          </div>
          {/* <div>
            Cultivate
          </div> */}
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
