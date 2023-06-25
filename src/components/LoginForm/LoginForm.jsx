import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import {useSelector} from 'react-redux';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const errors = useSelector(store => store.errors);
  const dispatch = useDispatch();

  const login = (event) => {
    event.preventDefault();

    const auth = getAuth();

    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const fb_user = userCredential.user;
        console.log("Signed in user: ", fb_user);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log("An error occured: ", errorCode, errorMessage);
      });

  

    if (email && password) {
      dispatch({
        type: 'LOGIN',
        payload: {
          username: email,
          password: password,
        },
      });
    } else {
      dispatch({ type: 'LOGIN_INPUT_ERROR' });
    }
  }; // end login

  return (
    <form className="formPanelborder-0 text-white w-fit pr-8 pl-8 pb-8 mt-28" onSubmit={login}>
      {/* <h2 className="text-center font-bold">Login</h2> */}
      {errors.loginMessage && (
        <h3 className="alert" role="alert">
          {errors.loginMessage}
        </h3>
      )}
      <div>
        <label htmlFor="email">
          Email:
          <input
            className="mt-1 bg-transparent border-b border-gray-700 text-white text-md leading-tight focus:outline-none block w-full"
            type="text"
            name="email"
            required
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
        </label>
      </div>
      <div>
        <label htmlFor="password">
          Password:
          <input
            className="mt-1 bg-transparent border-b border-gray-700 text-white text-md leading-tight focus:outline-none block w-full"
            type="password"
            name="password"
            required
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />
        </label>
      </div>
      <div>
        <input className="btn w-24 mt-4 bg-black text-[rgba(7,170,158,1.0)] border-[rgba(7,170,158,1.0)] border   rounded-full cursor-pointer h-8"  
               type="submit" 
               name="submit" 
               value="Log In" />
      </div>
    </form>
  );
}

export default LoginForm;
