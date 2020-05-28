import React, { Component } from 'react';

import MoodChecks from "./MoodChecks";
import FeelingEntry from "./FeelingEntry";
import Review from "./Review";
import Success from "./Success";



import "./resources/styles/Form.css";

class MainForm extends Component {
  state = {
      step: 1,
      moodChecks: 'NA', 
      feelingEntry: 'NA'
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
      const { moodChecks, feelingEntry } = this.state;
      const values = { moodChecks, feelingEntry };
      switch(step) {
      case 1:
          return <MoodChecks
                  nextStep={this.nextStep}
                  handleChange = {this.handleChange}
                  toStep = {this.toStep}
                  values={values}
                  />
      case 2:
          return <FeelingEntry
                  nextStep={this.nextStep}
                  prevStep={this.prevStep}
                  handleChange = {this.handleChange}
                  toStep = {this.toStep}
                  values={values}
                  />
      case 3:
          return <Review
                  nextStep={this.nextStep}
                  prevStep={this.prevStep}
                  handleChange = {this.handleChange}
                  values={values}
                  />
      case 4:
          return <Success />
      }
  }
}
export default MainForm;
