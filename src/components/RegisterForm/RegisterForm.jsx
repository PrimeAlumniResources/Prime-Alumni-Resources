import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { select } from 'redux-saga/effects';

function RegisterForm() {
  const [firstname, setFirstName] = useState('');
  const [lastname, setLastName] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  
  const [cohort, setCohort] = useState('');

  const errors = useSelector((store) => store.errors);
  const dispatch = useDispatch();


  useEffect(() => {

    dispatch({
      type: 'FETCH_COHORTS'
    })
    
  }, [])

  const cohorts = useSelector(store => store.cohort)

  let cohortsArray = []

  for ( let each of cohorts) {
    if (cohortsArray.length===0){
    for (let cohort of each) {
      console.log(cohort.name);
      
      cohortsArray.push(cohort.name)
    }
  }
  }
  const [finalCohort,setFinalCohort] = useState()
let finalCohortObject = []
const handleCohort = (event) => {
  event.preventDefault();
  console.log('hi');
  for (let each of cohorts) {
    console.log('this is eacg',each);
    for (let coho of each) {
      console.log('this is coho-->',coho);
      console.log('this is cohort name',cohort);
      if (coho.name=== cohort) {
       finalCohortObject.push(coho)
      } else {
        console.log('this is cohoooooo--->',coho.name,cohort);
      }
      
    }
  }
  console.log('this is final in handle-->',finalCohort);
  registerUser()
}
  console.log('this is cohortarray-->',cohortsArray);
console.log('this is cohort change',cohort);
  const registerUser = (event) => {
    // event.preventDefault();
   
    console.log('this is the final cohort--->',finalCohortObject[0].id);
    dispatch({
      type: 'REGISTER',
      payload: {
        username: username,
        password: password,
        firstname: firstname,
        lastname: lastname,
        cohort: finalCohortObject[0].id
      },
    });
  }; // end registerUser

  return (
    <form className="formPanel" onSubmit={handleCohort}>
      <h2>Register User</h2>
      {errors.registrationMessage && (
        <h3 className="alert" role="alert">
          {errors.registrationMessage}
        </h3>
      )}
      <div>
        <label htmlFor="firstName">
          First Name:
          <input
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
            type="text"
            name="lastname"
            value={lastname}
            required
            onChange={(event) => setLastName(event.target.value)}
          />
        </label>
      </div>
      <div>
        <label htmlFor="username">
          Username:
          <input
            type="text"
            name="username"
            value={username}
            required
            onChange={(event) => setUsername(event.target.value)}
          />
        </label>
      </div>

     <label for="countries" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Select an option</label>
              <select onChange={(event) => setCohort(event.target.value)}  id="countries" class=" w-40 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"> 
              <option  selected>Choose a cohort</option>
      {

        cohortsArray?.map(coho => {
          return (
            
                
                <option  value={coho}>{coho}</option>
                
              
            
          )
        })
        
      }
       </select> 
      {/* <div>
        <label htmlFor="campus">
          campus:
          <input
            name="cohort"
            value={cohort}
            required
            onChange={(event) => setCohort(event.target.value)}
          />
        </label>
      </div> */}

      <div>
        <label htmlFor="password">
          Password:
          <input
            type="password"
            name="password"
            value={password}
            required
            onChange={(event) => setPassword(event.target.value)}
          />
        </label>
      </div>
      <div>
        <input className="btn" type="submit" name="submit" value="Register" />
      </div>
    </form>
  );
}

export default RegisterForm;
