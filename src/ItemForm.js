import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Form from 'react-bootstrap/Form';

const ItemForm = ({ label, children, type = "text", ...otherProps }) => (
  <div>
    <Form>
      <Form.Group controlId="formBasicEmail">
      <Form.Label>{label}</Form.Label>
      <Form.Control type="text" placeholder {...otherProps} />
    </Form.Group>
    </Form>
  </div>
 
);

export default ItemForm;
