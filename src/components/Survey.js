import React from 'react';
import { useState } from 'react';
import SurveyDetails from './SurveyDetails';
import EditSurvey from './EditSurvey';
import { Button, Badge  } from 'react-bootstrap';
import { withFirestore } from 'react-redux-firebase';

const Survey = (props) => {
  const [hidden, setHidden] = useState(false);
  const buttonText = () => {   
    if (hidden === false) {
      return "Take survey!!";
    } else {
      return "Cancel";
    }
  }
  
  const handleDeleteSurvey = (id) => {
    props.firestore.delete({collection: 'surveys', doc: id});
  }

  const [hiddenEditForm, setHiddenEditForm] = useState(false);
  
//
//  pe-3 ps-2 pb-5 pt-3  px-sm-0 px-md-3 px-lg-5 py-3
//
//   d-none d-md-none
//   d-none d-md-block col-md-5
//  m-5
//
  return (
    <React.Fragment>
      <div className="ps-5 pb-5 pe-2 pt-2 mx-3 mb-2 border shadow-sm">
        <div className="text-end">
          <Badge pill bg="secondary" style={{cursor:'pointer'}} className="me-3" onClick={() => setHiddenEditForm(!hiddenEditForm)}>
            Edit
          </Badge>
          <Badge pill bg="danger" style={{cursor:'pointer'}} onClick={() => handleDeleteSurvey(props.id)}>
            Delete
          </Badge>
        </div>
        <p>SURVEY NAME: {props.title}</p>
        {hiddenEditForm ? 
          <React.Fragment>
            <EditSurvey 
            title={props.title}
            q1={props.q1}
            q2={props.q2}
            q3={props.q3}
            q4={props.q4}
            q5={props.q5}
            id={props.id}
            cancelEdit={() => setHiddenEditForm(!hiddenEditForm)}
            />
            
            </React.Fragment>
            : <p></p>}
            
        {hidden ? <p><SurveyDetails 
            title={props.title}
            q1={props.q1}
            q2={props.q2}
            q3={props.q3}
            q4={props.q4}
            q5={props.q5}
            id={props.id}
            cancelReply={() => setHidden(!hidden)}
            /></p> : <p></p>}
        <Button 
          variant="primary" 
          onClick={() => setHidden(!hidden)}>{buttonText()}</Button>
      </div>
      
    </React.Fragment>
  );
}

export default withFirestore(Survey);