import React from 'react';
import { Form, Button } from 'react-bootstrap';

const SurveyDetails = (props) => {
  return (
    <React.Fragment>
      <div className="p-5 bg-light rounded shadow-lg me-4 border ">
        <h2 className="mb-4 fw-light"><em>What are your answers to <u>{props.title}</u></em></h2>
        <Form.Label>{props.q1}</Form.Label>
        <Form.Control type="text"  />
        <Form.Label>{props.q2}</Form.Label>
        <Form.Control type="text" />
        <Form.Label>{props.q3}</Form.Label>
        <Form.Control type="text" />
        <Form.Label>{props.q4}</Form.Label>
        <Form.Control type="text" />
        <Form.Label>{props.q5}</Form.Label>
        <Form.Control type="text" />
        <Button
          variant="primary"
          type="submit"
          className="mt-3">Submit Answers</Button>
        <Button 
          variant="outline-secondary" 
          className="mt-3 ms-3 shadow-sm" 
          onClick={() => props.cancelReply()}>Cancel</Button>
      </div>
    </React.Fragment>
  );
} 

export default SurveyDetails;