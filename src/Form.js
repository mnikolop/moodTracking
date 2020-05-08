import React from 'react';
import { Container } from 'semantic-ui-react';
import 'bootstrap/dist/css/bootstrap.min.css';
import MainForm from "./MainForm";
import './resources/styles/Form.css'


function Form() {
    return (
      <div className="form">
        <div className="wrapper">
        <Container textAlign='center'>
          <MainForm />
        </Container>
        </div>
      </div>
    );
}
  
  export default Form;

  
