import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import MultiStepForm from "./MultiStepForm";
import './styles/Form.css'
import logo from './logo.svg';


function Form() {
    return (
      <div className="form">
        <div className="wrapper">
          <MultiStepForm />
        </div>
      </div>
    );
  }
  
  export default Form;

  