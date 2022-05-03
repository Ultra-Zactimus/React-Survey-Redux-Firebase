import React from "react";
import firebase from "firebase/compat/app";
import { useNavigate } from 'react-router';

const SignOut = () => {

  const navigate = useNavigate();

  const doSignOut = (event) => {
    event.preventDefault();
    firebase.auth().signOut()
      .then(function () {
        console.log("Successfully signed out!");
        navigate('/');
      }).catch(function (error) {
        console.log(error.message);
      });
  }

  return (
    <React.Fragment>
      <h1 className="text-center text-xl mb-2">
        Sign Out
      </h1>
      <button className="bg-yellow-500 hover:bg-orange-500 text-white font-bold py-2 px-4 rounded-full"
        onClick={doSignOut}>
        Sign Out
      </button>
    </React.Fragment>
  );
}

export default SignOut;