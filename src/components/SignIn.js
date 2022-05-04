import React from "react";
import firebase from "firebase/compat/app";
import { useNavigate } from 'react-router';

const Signin = () => {

  const navigate = useNavigate();
  
  const doSignIn = (event) => {
    event.preventDefault();
    const email = event.target.signinEmail.value;
    const password = event.target.signinPassword.value;
    firebase.auth().signInWithEmailAndPassword(email, password)
      .then(function () {
        console.log("Successfully Signed In!");
        navigate('/');
      }).catch(function (error) {
        console.log(error.message);
      });
  }

  return (
    <React.Fragment>
      <div className="flex justify-center bg-light">
        <div className="shadow-lg p-5 d-flex justify-content-center">
          <form
            className="rounded p-5 m-5 bg-white border w-50"
            onSubmit={doSignIn}>
            <h1 className="text-start">
              Sign In
            </h1>
            <small>
              Please fill out the sign in form below
            </small>
            <input
              className="form-control shadow-sm rounded mt-4"
              type='text'
              name='signinEmail'
              placeholder='Email'
            />
            <input
              className="form-control shadow-sm rounded mt-3"
              type='password'
              name='signinPassword'
              placeholder='Password'
            />
            <div className="flex justify-center">
              <button
                className="btn btn-primary mt-3 border shadow-sm"
                type='submit'>
                Sign In
              </button>
            </div>
          </form>
        </div>
      </div>
    </React.Fragment>
  );

}

export default Signin;