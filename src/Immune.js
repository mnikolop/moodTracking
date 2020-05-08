import React, {Component} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Form } from 'semantic-ui-react';
import Button from 'react-bootstrap/Button';
import './resources/styles/Form.css'

class Immune extends Component{

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
              <h1 className="ui centered">Har du nedsatt immunförsvar?</h1>
              <h6>Medicinerar du till exempel med cytostatika, kortisontabletter, läkemedel mot autoimmun sjukdom såsom ledgångsreumatism eller liknande?</h6>
              <h6>Har du tidigare blivit transplanterad, fått mjälten bortopererad, har du obehandlad HIV eller andra tillstånd som försämrar immunförsvaret?</h6>
              <Form.Dropdown value={values.contact} onChange={this.props.handleChange('contact')}>
                <select >
                    <option value="--">--</option>
                    <option value="no">Nej</option>
                    <option value="yes">Ja</option>
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

export default Immune;
