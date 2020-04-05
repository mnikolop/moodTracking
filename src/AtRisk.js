import React, {Component} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Form } from 'semantic-ui-react';
import Button from 'react-bootstrap/Button';
import './resources/Form.css'

class AtRisk extends Component{

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
              <h1 className="ui centered">Do you have any illness?</h1>
              {/* TODO Make this multiselect, probably add the responce to the array each time it is selected */}
              <Form.Dropdown value={values.atRisk} onChange={this.props.handleChange('atRisk')}>
                <select >
                  <option value="--">--</option>
                  <option value="highBloodPressure">Högt blodtryck</option>
                  <option value="heartDisease">Hjärt- och kärlsjukdom</option>
                  <option value="lungDisease">Lungsjukdom</option>
                  <option value="cancer">Cancer</option>
                  <option value="diabetes">Diabetes</option>
                  <option value="chronicNervDamage">Kronisk njursvikt</option>
                  <option value="neurologicalIssues">Neurologisk sjukdom som påverkar andningsmuskulaturen</option>
                  <option value="nonOfTheAbove">Ingen av ovanstående</option>
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

export default AtRisk;
