import React, { Component } from "react";

import JournalEntry from "./JournalEntry";
import Review from "./Review";
import Success from "./Success";

import "./resources/styles/Form.css";

class JournalEntryConstructor extends Component {
  state = {
    step: 1,
    text: "NA",
    textSentiment: "NA",
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

  render() {
    const { step } = this.state;
    const { text, textSentiment } = this.state;
    const values = {
      text,
      textSentiment,
    };

    switch (step) {
      case 1:
        return (
          <JournalEntry
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            handleChange={this.handleChange}
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
export default JournalEntryConstructor;
