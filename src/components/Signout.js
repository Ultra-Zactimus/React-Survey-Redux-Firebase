import React, { useState } from "react";
import firebase from "firebase/compat/app";
import { BrowserRouter as Routes, Route } from "react-router-dom";
import Home from './Home';

const SignOut = () => {


  const [redirect, setRedirect] = useState(false);

  const doSignOut = (event) => {
    event.preventDefault();
    firebase.auth().signOut()
      .then(function () {
        console.log("Successfully signed out!");
        setRedirect(!redirect);
      }).catch(function (error) {
        console.log(error.message);
      });
  }
  if (redirect === false) {
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
  } else {
    return (
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    );
  }
}

export default SignOut;