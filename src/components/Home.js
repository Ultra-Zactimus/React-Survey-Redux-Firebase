import React from 'react';
import Dashboard from './Dashboard';
import firebase from "firebase/compat/app";

const Home = () => {
  const user = firebase.auth().currentUser;
  
  // console.log(user);
  
  firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
      return user;
    }
  });
  
  if (user) {
    return (
      <Dashboard />
    )
  } else {
    return (
      <React.Fragment>
        <h1>Welcome to Our Surveys</h1>
        <br/>
        <p>We have the best surveys in the world! Please use our navigation bar to find a survey or add one for others to take.</p>
      </React.Fragment>
    );
  }
}

export default Home;