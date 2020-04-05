import React, {Component} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Alert from 'react-bootstrap/Alert';
import { Form } from 'semantic-ui-react';
import Button from 'react-bootstrap/Button';
import './resources/Form.css'

class Breathing extends Component{

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
              <Alert variant='danger'> Om du har mycket svårt att andas ring 112. </Alert>

              <h1 className="ui centered">Har du nyligen fått andningsbesvär?</h1>
              <Form.Dropdown value={values.breathing} onChange={this.props.handleChange('breathing')}>
                <select >
                  <option value="--">--</option>
                  <option value="no">Nej</option>
                  <option value="little">Ja, jag får andnöd vid lätt ansträngning men inte i vila</option>
                  <option value="average">Ja, jag känner viss andnöd i vila</option>
                  <option value="high">Ja, jag känner påtaglig andnöd hela tiden</option>
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

export default Breathing;
