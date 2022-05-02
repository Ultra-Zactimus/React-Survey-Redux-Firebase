import React from 'react';
import { useState } from 'react';
import SurveyDetails from './SurveyDetails';
import { Button } from 'react-bootstrap';
// import 

const Survey = (props) => {
  const [hidden, setHidden] = useState(false);
  return (
    <React.Fragment>
      <div className="p-5 mx-3 mb-2 border shadow-sm">
        <p>SURVEY NAME: {props.title}</p>
        <Button variant="primary" onClick={() => setHidden(!hidden)}>Take Survey</Button> 
        {hidden ? <p><SurveyDetails 
            title={props.title}
            q1={props.q1}
            q2={props.q2}
            q3={props.q3}
            q4={props.q4}
            q5={props.q5}
            id={props.id}/></p> : <p>Details Hidden</p>}
      </div>
      
    </React.Fragment>
  );
}

export default Survey;