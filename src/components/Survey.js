import React from 'react';
import { useState } from 'react';
import SurveyDetails from './SurveyDetails';
import { Button } from 'react-bootstrap';

const Survey = (props) => {
  const [hidden, setHidden] = useState(false);
  const buttonText = () => {   
    if (hidden === false) {
      return "Take survey!!";
    } else {
      return "Cancel";
    }
  }

  return (
    <React.Fragment>
      <div className="p-5 mx-3 mb-2 border shadow-sm">
        <p>SURVEY NAME: {props.title}</p>
        
        {hidden ? <p><SurveyDetails 
            title={props.title}
            q1={props.q1}
            q2={props.q2}
            q3={props.q3}
            q4={props.q4}
            q5={props.q5}
            id={props.id}/></p> : <p>Details Hidden</p>}
        <Button variant="primary" onClick={() => setHidden(!hidden)}>{buttonText()}</Button> 
      </div>
      
    </React.Fragment>
  );
}

export default Survey;