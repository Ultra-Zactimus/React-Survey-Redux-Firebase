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
      <div className="p-5 bg-light rounded shadow-lg me-4 border ">
        <h2 className="mb-4 fw-light"><em>Edit {props.title}</em></h2>
        <Form onSubmit={editSurveyInFirestore}>
        <Form.Label>Title</Form.Label>
        <Form.Control
            type='text'
            name='title'
            placeholder='Title'
            className="mb-3 shadow-sm"
            defaultValue={props.title}
          />
          <Form.Label>Question 1</Form.Label>
          <Form.Control
            type='text'
            name='q1'
            placeholder='Question 1'
            className="mb-3 shadow-sm"
            defaultValue={props.q1}
          />
          <Form.Label>Question 2</Form.Label>
          <Form.Control
            type='text'
            name='q2'
            placeholder='Question 2'
            className="mb-3 shadow-sm"
            defaultValue={props.q2}
          />
          <Form.Label>Question 3</Form.Label>
          <Form.Control
            type='text'
            name='q3'
            placeholder='Question 3'
            className="mb-3 shadow-sm"
            defaultValue={props.q3}
          />
          <Form.Label>Question 4</Form.Label>
          <Form.Control
            type='text'
            name='q4'
            placeholder='Question 4'
            className="mb-3 shadow-sm"
            defaultValue={props.q4}
          />
          <Form.Label>Question 5</Form.Label>
          <Form.Control
            type='text'
            name='q5'
            placeholder='Question 5'
            className="mb-3 shadow-sm"
            defaultValue={props.q5}
          />
          <Button 
            variant="primary" 
            type='submit' 
            className="mt-3 shadow-sm">Submit</Button>
          <Button 
            variant="outline-secondary" 
            className="mt-3 ms-3 shadow-sm" 
            onClick={() => props.cancelEdit()}>Cancel</Button>
        </Form>
      </div>
    </React.Fragment>
  );
}

export default EditSurvey;