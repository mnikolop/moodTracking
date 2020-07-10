import React, { Component } from "react";

import MoodChecks from "./MoodChecks";
import Review from "./Review";
import Success from "./Success";

import "./resources/styles/Form.css";

class MoodChecksConstructor extends Component {
  state = {
    step: 1,
    suspension: "NA",
    sleep: "NA",
    eating: "NA",
    focusing: "NA",
    energy: "NA"
  };

  nextStep = () => {
    const { step } = this.state;
    this.setState({
      step: step + 1,
    });
  };

  prevStep = () => {
    const { step } = this.state;
    this.setState({
      step: step - 1,
    });
  };

  handleChange = (input) => (event) => {
    this.setState({ [input]: event.target.value });
  };

  handleChange = (input) => (event) => {
    this.setState({ [input]: event.target.value });
  };

  render() {
    const { step } = this.state;
    const {
      suspension,
      sleep,
      eating,
      focusing,
      energy
    } = this.state;
    const values = {
      suspension,
      sleep,
      eating,
      focusing,
      energy
    };
    switch (step) {
      case 1:
        return (
          <MoodChecks
            nextStep={this.nextStep}
            handleChange={this.handleChange}
            toStep={this.toStep}
            values={values}
          />
        );
      case 2:
        return (
          <Review
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            handleChange={this.handleChange}
            values={values}
          />
        );
      case 3:
        return <Success />;
    }
  }
}
export default MoodChecksConstructor;
