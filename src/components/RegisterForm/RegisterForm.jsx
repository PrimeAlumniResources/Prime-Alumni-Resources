import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { select } from "redux-saga/effects";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";


function RegisterForm() {
  const [firstname, setFirstName] = useState("");
  const [lastname, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [cohort, setCohort] = useState("");

  const errors = useSelector((store) => store.errors);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch({
      type: "FETCH_COHORTS",
    });
  }, []);

  const allCohorts = useSelector((store) => store.allCohorts);

  /* -----------------LOGIC USED TO MAP OUT COHORTS--------------------- */

  let allCohortsArray = [];
  const [finalCohort, setFinalCohort] = useState();
  let finalCohortObject = [];

  if (allCohorts) {
    for (let each of allCohorts) {
      if (allCohortsArray.length === 0) {
        for (let cohort of each) {
          console.log(cohort.name);
  
          allCohortsArray.push(cohort.name);
        }
      }
    }
  }
  

  const handleCohort = (event) => {
    event.preventDefault();
    // console.log("hi");
    for (let each of allCohorts) {
      for (let coho of each) {
        if (coho.name === cohort) {
          finalCohortObject.push(coho);
        } else {
          console.log("this is cohoooooo--->", coho.name, cohort);
        }
      }
    }
    console.log("this is final in handle-->", finalCohort);
    registerUser();
  };

  /* -----------------REGISTRATION FUNCTION--------------------- */

  const registerUser = (event) => {
    // event.preventDefault();

    if (password.length < 6) {
      return alert('Password must be longer than 6 characters. Please try again.');
    }

    const auth = getAuth();
    
    createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in 
      const fb_user = userCredential.user;
      console.log("🚀 ~ file: RegisterForm.jsx:69 ~ .then ~ fb_user:", fb_user)
      
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorCode);
      console.log(errorMessage);
  });

    console.log("this is the final cohort--->", finalCohortObject[0].id);
    dispatch({
      type: "REGISTER",
      payload: {
        email: email,
        password: password,
        firstname: firstname,
        lastname: lastname,
        cohort: finalCohortObject[0].id,
      },
    });

    console.log('got this far');
    navigate('/editprofile');
  }; // end registerUser



  // "bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-1 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"

  return (
    <form className="formPanel text-white w-fit pr-8 pl-8 pb-8 mt-40" onSubmit={handleCohort}>
      {/* <h2 className="text-center font-bold">Register</h2> */}
      {errors.registrationMessage && (
        <h3 className="alert" role="alert">
          {errors.registrationMessage}
        </h3>
      )}
      <div>
        <label htmlFor="firstName">
          First Name:
          <input
            className="mt-1 mb-1 bg-transparent border-b border-gray-700 text-white text-md leading-tight focus:outline-none block w-full"
            type="text"
            name="firstname"
            value={firstname}
            required
            onChange={(event) => setFirstName(event.target.value)}
          />
        </label>
      </div>
      <div>
        <label htmlFor="lastname">
          Last Name:
          <input
            className="mt-1 mb-1 bg-transparent border-b border-gray-700 text-white text-md leading-tight focus:outline-none block w-full"
            type="text"
            name="lastname"
            value={lastname}
            required
            onChange={(event) => setLastName(event.target.value)}
          />
        </label>
      </div>
      <div>
        <label htmlFor="email">
          Email:
          <input
          className="mt-1 mb-4 bg-transparent border-b border-gray-700 text-white text-md leading-tight focus:outline-none block w-full"
            type="text"
            name="email"
            value={email}
            required
            onChange={(event) => setEmail(event.target.value)}
          />
        </label>
      </div>

      <label
        for="countries"
        // className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
      >
        Select an option
      </label>
      <select
        onChange={(event) => setCohort(event.target.value)}
        id="countries"
        className="mt-1 mb-2 bg-transparent border-b border-gray-700 text-white text-md leading-tight focus:outline-none block w-full"
      >
        <option selected className="text-[#242424]">Choose a cohort</option>
        {allCohortsArray?.map((coho) => {
          return <option value={coho} className="text-[#242424]">{coho}</option>;
        })}
      </select>

      <div>
        <label htmlFor="password">
          Password:
          <input
          className="mt-1 mb-2 bg-transparent border-b border-gray-700 text-white text-md leading-tight focus:outline-none block w-full"
            type="password"
            name="password"
            value={password}
            required
            onChange={(event) => setPassword(event.target.value)}
          />
        </label>
      </div>
      <div>
        <input className="btn w-24 mt-2 bg-black text-[rgba(7,170,158,1.0)] border-[rgba(7,170,158,1.0)] border   rounded-full cursor-pointer h-8" 
               type="submit" 
               name="submit" 
               value="Register" />
      </div>
    </form>
  );
}

export default RegisterForm;
