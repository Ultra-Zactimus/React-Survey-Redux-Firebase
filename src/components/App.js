import React from 'react';
import '../App.css';
import Header from './Header';
import SurveyList from './SurveyList';
import NewSurvey from './NewSurvey';
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  return (
    <React.Fragment>
      <Header />
      <br/>
      <SurveyList />
      <br/>
      <NewSurvey />
    </React.Fragment>
  );
}

export default App;