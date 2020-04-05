import React, {Component} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Form } from 'semantic-ui-react';
import Button from 'react-bootstrap/Button';
import './resources/Form.css'

class AgeGroup extends Component{

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
              <h1 className="ui centered">Hur gammal är du?</h1>
              <Form.Dropdown value={values.contact} onChange={this.props.handleChange('contact')}>
                <select >
                <option value="--">--</option>
<option value="under60">Under 60 år</option>
                  <option value="60-69">60-69 år</option>
                  <option value="70-79">70-79 år</option>
                  <option value="over80">80 år eller äldre</option>
                </select>
              </Form.Dropdown>
               <br></br>
            <Button onClick={this.saveAndContinue}>Save And Continue </Button>
            <br></br>
            <Button onClick={this.back}>Back</Button> { ' ' }
           
          </Form>
      )
  }
}

export default AgeGroup;
