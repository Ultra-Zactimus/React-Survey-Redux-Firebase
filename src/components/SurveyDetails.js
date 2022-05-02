import React from 'react';
import { Form, Button } from 'react-bootstrap';

const SurveyDetails = (props) => {
  return (
    <React.Fragment>
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
      <Button variant="primary" type="submit" className="mt-3">Submit Answers</Button>
    </React.Fragment>
  );
} 

export default SurveyDetails;