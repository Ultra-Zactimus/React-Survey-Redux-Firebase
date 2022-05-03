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
    // console.log('User email: ', user.uid);
    
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
        <Form onSubmit={addSurveyToFirestore}>
        <Form.Control
            type='text'
            name='title'
            placeholder='Survey Title'
            className="mt-3"
          />
          <Form.Control
            type='text'
            name='q1'
            placeholder='Question 1'
            className="mt-3"
          />
          <Form.Control
            type='text'
            name='q2'
            placeholder='Question 2'
            className="mt-3"
          />
          <Form.Control
            type='text'
            name='q3'
            placeholder='Question 3'
            className="mt-3"
          />
          <Form.Control
            type='text'
            name='q4'
            placeholder='Question 4'
            className="mt-3"
          />
          <Form.Control
            type='text'
            name='q5'
            placeholder='Question 5'
            className="mt-3"
          />
          <Button variant="primary" type='submit' className="mt-3">Submit</Button>
          <Button variant="outline-secondary" className="mt-3 ms-3">Cancel</Button>
        </Form>
      </div>
    </React.Fragment>
  );
}

export default NewSurvey;