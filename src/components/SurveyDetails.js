import React from 'react';
import { Form, Button } from 'react-bootstrap';
import { useFirestore } from 'react-redux-firebase';
import firebase from "firebase/compat/app";
import { useNavigate } from 'react-router';

const SurveyDetails = (props) => {
  
  const firestore = useFirestore();
  const navigate = useNavigate();

  const addResponsesToFirestore = (event) => {
    event.preventDefault();
    console.log("event: ", event);
    console.log("event targ1: ", event.target.q1.value);
    
    const user = firebase.auth().currentUser;
    
    return firestore.collection('responses').add(
        {
          surveyId: props.id,
          q1: event.target.q1.value,
          q2: event.target.q2.value,
          q3: event.target.q3.value,
          q4: event.target.q4.value,
          q5: event.target.q5.value,
          userEmail: user.uid,
          timeOpen: firestore.FieldValue.serverTimestamp()
        }
      ).then(() => {
        navigate('/');
      });
      
  }
  
  return (
    <React.Fragment>
      <div className="p-5 bg-light rounded shadow-lg me-4 border ">
        <h2 className="mb-4 fw-light"><em>What are your answers to <u>{props.title}</u></em></h2>
        <Form onSubmit={addResponsesToFirestore}>
          <Form.Control
            type='text'
            name='q1'
            placeholder={props.q1}
            className="mt-3"
          />
          <Form.Control
            type='text'
            name='q2'
            placeholder={props.q2}
            className="mt-3"
          />
          <Form.Control
            type='text'
            name='q3'
            placeholder={props.q3}
            className="mt-3"
          />
          <Form.Control
            type='text'
            name='q4'
            placeholder={props.q4}
            className="mt-3"
          />
          <Form.Control
            type='text'
            name='q5'
            placeholder={props.q5}
            className="mt-3"
          />
          <Button 
            variant="primary" 
            type='submit' 
            className="mt-3">Submit</Button>
        <Button 
          variant="outline-secondary" 
          className="mt-3 ms-3 shadow-sm" 
          onClick={() => props.cancelReply()}>Cancel</Button>
        </Form>
      </div>
    </React.Fragment>
  );
} 

export default SurveyDetails;