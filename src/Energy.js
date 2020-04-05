import React, {Component} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Form } from 'semantic-ui-react';
import Button from 'react-bootstrap/Button';
import './resources/Form.css'

class Energy extends Component{

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
              <h1 className="ui centered">Hur är din allmänna ork?</h1>
              <Form.Dropdown value={values.energy} onChange={this.props.handleChange('energy')}>
                <select >
                  <option value="--">--</option>
                  <option value="no">Som vanligt</option>
                  <option value="little">Är trött men orkar vara uppe</option>
                  <option value="average">Är mest sängliggande men kan vara uppe korta stunder</option>
                  <option value="high">Orkar bara ligga till sängs, men klarar toalettbesök</option>
                  <option value="veryHigh">Tar mig inte ur sängen</option>
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

export default Energy;
