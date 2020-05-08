import React, {Component} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Form } from 'semantic-ui-react';
import Button from 'react-bootstrap/Button';
import './resources/styles/Form.css'

class Contact extends Component{

  saveAndContinue = (e) => {
      e.preventDefault()
      this.props.nextStep()
  }

  back  = (e) => {
    e.preventDefault();
    this.props.prevStep();
}

  render(){
      const { values } = this.props;
      return(
          <Form >
              <h1 className="ui centered">Har du haft nära kontakt med någon som är smittad med coronavirus (covid-19)?</h1>
              <Form.Dropdown value={values.contact} onChange={this.props.handleChange('contact')}>
                <select >
                  <option value="--">--</option>
                  <option value="no">Nej</option>
                  <option value="yes">Ja</option>
                  <option value="DoNotKnow">Vet ej</option>
                </select>
              </Form.Dropdown>
              <br></br>
            <Button onClick={this.saveAndContinue}>Save And Continue </Button>
            <br></br>
            <Button onClick={this.back}>Back</Button>
            
          </Form>
      )
  }
}

export default Contact;
