import React, {Component} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { List } from 'semantic-ui-react';
import Button from 'react-bootstrap/Button';
import './resources/Form.css'
import firebase from './firebase'

class Confirmation extends Component{
    saveAndContinue = (e) => {
        e.preventDefault();
        this.props.nextStep();
    }

    back  = (e) => {
        // e.preventDefault();
        this.props.prevStep();
    }

    toStep  = (e) => {
      this.props.toStep();
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const itemsRef = firebase.database().ref('responces');
    
    const item = this.props.values;

    itemsRef.push(item);
    this.setState({
      temperature: '',
      cough: '',
      breathing: '',
      energy: '',
      contact: '',
      atRisk: '',
      immune: '',
      ageGroup: '',
      location: ''
    });
    this.props.nextStep();
  }

    render(){
        const {values: { temperature, cough, breathing, energy, contact, atRisk, immune, ageGroup, location }} = this.props;

        // const item = {
        //   temperature: {temperature}, 
        //   cough: {cough}, 
        //   breathing: {breathing}, 
        //   energy: {energy}, 
        //   contact: {contact}, 
        //   atRisk: {atRisk}, 
        //   immune: {immune}, 
        //   ageGroup: {ageGroup}, 
        //   location: {location}
        // }

        return(
            <div>
                <h1 className="ui centered">Confirm your Details</h1>
                <p>Click Confirm if the following details have been correctly entered</p>
                <List>
                    <List.Item>
                        <List.Content>temperature: {temperature}</List.Content> {/* {' '} <Button onClick={this.toStep}>Back</Button> */}
                    </List.Item>
                    <List.Item>
                        <List.Content>cough: {cough}</List.Content> {/*  {' '} <Button onClick={this.toStep}>Back</Button> */}
                    </List.Item>
                    <List.Item>
                        <List.Content>Breathing: {breathing}
                        </List.Content>
                    </List.Item>
                    <List.Item>
                        <List.Content>Energy: {energy}</List.Content>
                    </List.Item>
                    <List.Item>
                        <List.Content>contact: {contact}</List.Content>
                    </List.Item>
                    <List.Item>
                        <List.Content>atRisk: {atRisk}</List.Content>
                    </List.Item>
                    <List.Item>
                        <List.Content>immune: {immune}</List.Content>
                    </List.Item>
                    <List.Item>
                        <List.Content>ageGroup: {ageGroup}</List.Content>
                    </List.Item>
                    <List.Item>
                        <List.Content>kommun: {location}</List.Content>
                    </List.Item>
                </List>
                <br></br>
                <Button onClick={this.handleSubmit}>Confirm</Button>
                <br></br>
                {/* <Button onClick={this.back}>Back</Button> TODO: Fix this! */}
            </div>
        )
    }
}

export default Confirmation;