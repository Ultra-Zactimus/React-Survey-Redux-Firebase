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
      <div className="p-5 bg-light rounded me-4 border ">
        <div className="d-flex justify-content-center">
        
        <Form onSubmit={addResponsesToFirestore} className="bg-white p-5 shadow-sm border rounded w-75" >
        <h2 className="mb-4 fw-light"><em>What are your answers to <u>{props.title}</u></em></h2>
          <Form.Label>
            {props.q1}
          </Form.Label>
          <Form.Control
            type='text'
            name='q1'
            placeholder="Enter an answer"
            className="mb-3"
          />
          <Form.Label>
            {props.q2}
          </Form.Label>
          <Form.Control
            type='text'
            name='q2'
            placeholder={props.q2}
            className="mb-3"
          />
          <Form.Label>
            {props.q3}
          </Form.Label>
          <Form.Control
            type='text'
            name='q3'
            placeholder={props.q3}
            className="mb-3"
          />
          <Form.Label>
            {props.q4}
          </Form.Label>
          <Form.Control
            type='text'
            name='q4'
            placeholder={props.q4}
            className="mb-3"
          />
          <Form.Label>
            {props.q5}
          </Form.Label>
          <Form.Control
            type='text'
            name='q5'
            placeholder={props.q5}
            className="mb-3"
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
      </div>
    </React.Fragment>
  );
} 

export default SurveyDetails;