import React from 'react';
import '../App.css';
import Header from './Header';
import SurveyList from './SurveyList';
import NewSurvey from './NewSurvey';
import Home from './Home';
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  return (
    <React.Fragment>
      <Header />
      <br/>
      <Home />
      <SurveyList />
      <br/>
      <NewSurvey />
      <br/>
      {/* <EditSurvey /> */}
    </React.Fragment>
  );
}

export default App;