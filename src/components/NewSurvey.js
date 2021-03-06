import React from "react";
import { useFirestore } from 'react-redux-firebase';
import firebase from "firebase/compat/app";
import { Form, Button } from 'react-bootstrap';

const NewSurvey = () => {

  const firestore = useFirestore();

  const addSurveyToFirestore = (event) => {
    event.preventDefault();
    console.log("event: ", event);
    console.log("event targ1: ", event.target.q1.value);
    
    const user = firebase.auth().currentUser;
    
    return firestore.collection('surveys').add(
      {
        title: event.target.title.value,
        q1: event.target.q1.value,
        q2: event.target.q2.value,
        q3: event.target.q3.value,
        q4: event.target.q4.value,
        q5: event.target.q5.value,
        userEmail: user.uid,
        timeOpen: firestore.FieldValue.serverTimestamp()
      }
    );
    
  }

  return (
    <React.Fragment>
      <div className="p-5 bg-light">
        <div className="d-flex justify-content-center">
          <Form
            className="bg-white p-5 shadow-sm border rounded w-75" 
            onSubmit={addSurveyToFirestore}
            >
            <h1 className="text-start">
              Create a Survey
            </h1>
            <small>
              Please fill out the form below
            </small>
            <br/>
            <Form.Label className="mt-4" >Enter a Title:</Form.Label>
          <Form.Control
              type='text'
              name='title'
              placeholder='Survey Title'
              
            />
            <Form.Label className="mt-3">Enter Question 1:</Form.Label>
            <Form.Control
              type='text'
              name='q1'
              placeholder='Question 1'
              
            />
            <Form.Label className="mt-3">Enter Question 2:</Form.Label>
            <Form.Control
              type='text'
              name='q2'
              placeholder='Question 2'
              
            />
            <Form.Label className="mt-3">Enter Question 3:</Form.Label>
            <Form.Control
              type='text'
              name='q3'
              placeholder='Question 3'
              
            />
            <Form.Label className="mt-3">Enter Question 4:</Form.Label>
            <Form.Control
              type='text'
              name='q4'
              placeholder='Question 4'
              
            />
            <Form.Label className="mt-3">Enter Question 5:</Form.Label>
            <Form.Control
              type='text'
              name='q5'
              placeholder='Question 5'
              
            />
            <Button 
              variant="primary" 
              type='submit' 
              className="mt-3 shadow-sm">
                Submit
            </Button>
            <Button 
              variant="outline-secondary" 
              className="mt-3 ms-3 shadow-sm">
                Cancel
            </Button>
          </Form>
        </div>
      </div>
    </React.Fragment>
  );
}

export default NewSurvey;