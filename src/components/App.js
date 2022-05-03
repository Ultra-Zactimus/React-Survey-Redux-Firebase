import React, { useEffect, useState } from 'react';
import '../App.css';
import Header from './Header';
import SurveyList from './SurveyList';
import NewSurvey from './NewSurvey';
import firebase from "firebase/compat/app";
import Home from './Home';
import 'bootstrap/dist/css/bootstrap.min.css';
import Signin from "./SignIn";
import SignUp from "./SignUp";
import SignOut from "./Signout";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const App = () => {
  const [user, setUser] = useState(null);
  useEffect(() => {
    firebase.auth().onAuthStateChanged(async(userData) => {
      // console.log(userData);
      if (userData) {
        setUser(userData);
      } else {
        setUser(null);
      }
    });
  }, []);
  
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/signin/*" element={<Signin />} />
        <Route path="/signout/*" element={<SignOut />} />
        <Route path="/signup/*" element={<SignUp />} />
        <Route path="/" element={<Home />} />
        <Route path="/survey-list" element={<SurveyList />} />
        <Route path="/new-survey" element={<NewSurvey />} />
      </Routes>
    </Router>
  );
}

export default App;