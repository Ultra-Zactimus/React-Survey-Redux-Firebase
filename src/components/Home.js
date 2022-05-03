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
      <Dashboard uid={user.uid} />
    )
  } else {
    return (
      <React.Fragment>
        <h1>Welcome to Our Surveys</h1>
        <br/>
        <p>We have the best surveys in the world!</p> 
        <p>Please use our navigation bar to sign in, then click to find a survey or create your own.</p>
        <p>If you are seeing this page, you haven't signed in yet.</p>
        <p>If you don't have an account please visit our sign up page under Accounts.</p>
      </React.Fragment>
    );
  }
}

export default Home;