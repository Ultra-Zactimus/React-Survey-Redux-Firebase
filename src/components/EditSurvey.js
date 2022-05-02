import React from "react";
import { useFirestore } from 'react-redux-firebase';
import { Form, Button } from 'react-bootstrap';

const EditSurvey = (props) => {

  const firestore = useFirestore();

  const editSurveyInFirestore = (event) => {
    event.preventDefault();
    const propertiesToUpdate = {
        title: event.target.title.value,
        q1: event.target.q1.value,
        q2: event.target.q2.value,
        q3: event.target.q3.value,
        q4: event.target.q4.value,
        q5: event.target.q5.value,
      }
      return firestore.update({ collection: 'surveys', doc: props.id }, propertiesToUpdate);
  }

  return (
    <React.Fragment>
      <div className="p-5 bg-light">
        <Form onSubmit={editSurveyInFirestore}>
        <Form.Control
            type='text'
            name='title'
            placeholder={props.title}
            className="mt-3"
            value={props.title}
          />
          <Form.Control
            type='text'
            name='q1'
            placeholder='Question 1'
            className="mt-3"
            value={props.q1}
          />
          <Form.Control
            type='text'
            name='q2'
            placeholder='Question 2'
            className="mt-3"
            value={props.q2}
          />
          <Form.Control
            type='text'
            name='q3'
            placeholder='Question 3'
            className="mt-3"
            value={props.q3}
          />
          <Form.Control
            type='text'
            name='q4'
            placeholder='Question 4'
            className="mt-3"
            // value={props.q4}
          />
          <Form.Control
            type='text'
            name='q5'
            placeholder='Question 5'
            className="mt-3"
            // value={props.q5}
          />
          <Button variant="primary" type='submit' className="mt-3">Submit</Button>
          <Button variant="outline-secondary" className="mt-3 ms-3">Cancel</Button>
        </Form>
      </div>
    </React.Fragment>
  );
}

export default EditSurvey;