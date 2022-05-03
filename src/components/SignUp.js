import React, { useState } from "react";
import firebase from "firebase/compat/app";
import { useNavigate } from 'react-router';

function SignUp() {

  const navigate = useNavigate();
  
  function doSignUp(event) {
    event.preventDefault();
    const email = event.target.email.value;
    const password = event.target.password.value;
    firebase.auth().createUserWithEmailAndPassword(email, password).then(function () {
      console.log("Successfully Signed Up!");
      navigate('/');
    }).catch(function (error) {
      console.log(error.message);
    });
  }

  return (
    <React.Fragment>
      <div className="flex justify-center">
        <div className="border-2 border-solid border-black max-w-sm rounded overflow-hidden shadow-lg mb-2 mt-4">
          <h1 className="text-center text-xl">
            Sign Up
          </h1>
          <form
            className="bg-white shadow-sm rounded px-8 pt-6 pb-8"
            onSubmit={doSignUp}>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-center leading-tight focus:outline-none focus:shadow-outline mb-2"
              type='text'
              name='email'
              placeholder='Email'
            />
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-center leading-tight focus:outline-none focus:shadow-outline mb-2"
              type='password'
              name='password'
              placeholder='Password'
            />
            <div className="flex justify-center">
              <button
                className="bg-warning-500 hover:bg-orange-500 font-bold py-2 px-4 rounded-full"
                type='submit'>
                Sign Up
              </button>
            </div>
          </form>
        </div>
      </div>
    </React.Fragment>
  );

}

export default SignUp;