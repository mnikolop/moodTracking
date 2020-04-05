import React, { Component } from 'react';

import Temperature from "./Temperature";
import Cough from "./Cough";
import Breathing from "./Breathing";
import Energy from "./Energy";
import Review from "./Review";
import Success from "./Success";
import Contact from "./Contact"
import AtRisk from "./AtRisk"
import Immune from "./Immune"
import AgeGroup from "./AgeGroup"
import Location from "./Location"


import "./resources/Form.css";

class MainForm extends Component {
  state = {
      step: 1,
      temperature: 'NA', 
      cough: 'NA', 
      breathing: 'NA', 
      energy: 'NA', 
      contact: 'NA', 
      atRisk: ['NA'], 
      immune: 'NA', 
      ageGroup: 'NA',
      location: 'NA'
    }

  nextStep = () => {
      const { step } = this.state
      this.setState({
          step : step + 1
      })
  }

  prevStep = () => {
      const { step } = this.state
      this.setState({
          step : step - 1
      })
  }

  toStep = () => {
    const { step } = this.state
    this.setState({
        step : step 
    })
}


  handleChange = input => event => {
      this.setState({ [input] : event.target.value })
  }

  handleChange = input => event => {
    this.setState({ [input] : event.target.value })
}

  render(){
      const {step} = this.state;
      const { temperature, cough, breathing, energy, contact, atRisk, immune, ageGroup, location } = this.state;
      const values = {  temperature, cough, breathing, energy, contact, atRisk, immune, ageGroup, location  };
      switch(step) {
      case 1:
          return <Temperature
                  nextStep={this.nextStep}
                  handleChange = {this.handleChange}
                  toStep = {this.toStep}
                  values={values}
                  />
      case 2:
          return <Cough
                  nextStep={this.nextStep}
                  prevStep={this.prevStep}
                  handleChange = {this.handleChange}
                  toStep = {this.toStep}
                  values={values}
                  />
      case 3:
          return <Breathing
                  nextStep={this.nextStep}
                  prevStep={this.prevStep}
                  handleChange = {this.handleChange}
                  values={values}
                  />
      case 4:
        return <Energy
                  nextStep={this.nextStep}
                  prevStep={this.prevStep}
                  handleChange = {this.handleChange}
                  values={values}
                  />
      case 5:
        return <Contact
                  nextStep={this.nextStep}
                  prevStep={this.prevStep}
                  handleChange = {this.handleChange}
                  values={values}
                  />
      case 6:
        return <AtRisk
                  nextStep={this.nextStep}
                  prevStep={this.prevStep}
                  handleChange = {this.handleChange}
                  values={values}
                  />
      case 7:
        return <Immune
                  nextStep={this.nextStep}
                  prevStep={this.prevStep}
                  handleChange = {this.handleChange}
                  values={values}
                  />
      case 8:
        return <AgeGroup
                  nextStep={this.nextStep}
                  prevStep={this.prevStep}
                  handleChange = {this.handleChange}
                  values={values}
                  />
      case 9:
        return <Location
                  nextStep={this.nextStep}
                  prevStep={this.prevStep}
                  handleChange = {this.handleChange}
                  values={values}
                  />
      case 10:
        return <Review
                  nextStep={this.nextStep}
                  prevStep={this.prevStep}
                  handleChange = {this.handleChange}
                  values={values}
                  />
      case 11:
          return <Success />
      }
  }
}
export default MainForm;
