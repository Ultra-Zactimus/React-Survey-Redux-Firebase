import React from "react";
import firebase from "firebase/compat/app";
import { useNavigate } from 'react-router';
// import { getAuth, setPersistence, signInWithEmailAndPassword, browserSessionPersistence } from "firebase/auth";


const Signin = () => {

  const navigate = useNavigate();
  
  const doSignIn = (event) => {
    event.preventDefault();
    // const auth = getAuth();
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
      <div className="flex justify-center">
        <div className="border-2 border-solid border-black max-w-sm rounded overflow-hidden shadow-lg mb-2 mt-4">
          <h1 className="text-xl text-center">
            Sign In
          </h1>
          <form
            className="bg-white shadow-sm rounded px-8 pt-6 pb-8"
            onSubmit={doSignIn}>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-center leading-tight focus:outline-none focus:shadow-outline mb-2"
              type='text'
              name='signinEmail'
              placeholder='Email'
            />
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-center leading-tight focus:outline-none focus:shadow-outline mb-2"
              type='password'
              name='signinPassword'
              placeholder='Password'
            />
            <div className="flex justify-center">
              <button
                className="bg-yellow-500 hover:bg-orange-500 text-white font-bold py-2 px-4 rounded-full"
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