import React, {Component} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Form } from 'semantic-ui-react';
import Button from 'react-bootstrap/Button';
import './resources/Form.css'

class Temperature extends Component{

  saveAndContinue = (e) => {
      e.preventDefault()
      this.props.nextStep()
  }

  render(){
      const { values } = this.props;
      return(
          <Form >
              <h1 className="ui centered">Hur hög är din kroppstemperatur?</h1>
              <Form.Dropdown value={values.temperature} onChange={this.props.handleChange('temperature')}>
              <select >
                <option value="--">--</option>
                <option value="under38">Under 38,0 grader</option>
                <option value="over38">38,0 - 39,4 grader</option>
                <option value="over39">39,5 grader eller över</option>
              </select>
            </Form.Dropdown>
            <br></br>
              <Button onClick={this.saveAndContinue}>Save And Continue </Button>
          </Form>
      )
  }
}

export default Temperature;
