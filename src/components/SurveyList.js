import React from "react";
import Survey from "./Survey";
import { useSelector } from 'react-redux'
import { useFirestoreConnect, isLoaded } from 'react-redux-firebase'

const SurveyList = (props) => {

  useFirestoreConnect([
    { 
      collection: 'surveys'
    }
  ]);
  

  const surveys = useSelector(state => state.firestore.ordered.surveys);

  if (isLoaded(surveys)) {
    return (
      <React.Fragment>
        <hr/>
        {surveys.map((survey) => {
          return (
          <Survey
            title={survey.title}
            q1={survey.q1}
            q2={survey.q2}
            q3={survey.q3}
            q4={survey.q4}
            q5={survey.q5}
            id={survey.id}
            key={survey.id}
            />
          )
        })}
      </React.Fragment>
    );
  } else {
    return (
      <React.Fragment>
        <h3>Loading...</h3>
      </React.Fragment>
    )
  }
}

export default SurveyList;