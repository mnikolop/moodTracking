import React from 'react';
import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import MultiStepForm from "./MultiStepForm";

import logo from './logo.svg';
// import './Form.css';


function Form() {
    return (
      <div className="app">
        <div className="wrapper">
          <MultiStepForm />
        </div>
      </div>
    );
  }
  
  export default Form;

  