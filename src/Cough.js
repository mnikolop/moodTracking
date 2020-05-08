import React, {Component} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Form } from 'semantic-ui-react';
import Button from 'react-bootstrap/Button';
import './resources/styles/Form.css'

class Cough extends Component{

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
              <h1 className="ui centered">Har du nyligen börjat hosta?</h1>
              <Form.Dropdown value={values.cough} onChange={this.props.handleChange('cough')}>
                <select >
                  <option value="--">--</option>
                  <option value="no">Nej</option>
                  <option value="little">Ja. Hostar iblandr</option>
                  <option value="average">Ja. Hostar ofta</option>
                  <option value="high">Ja. Hostar nästan hela tiden</option>
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

export default Cough;
