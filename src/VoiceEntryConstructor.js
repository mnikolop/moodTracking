import React, { Component } from "react";

import VoiceEntry from "./VoiceEntry";
import Review from "./Review";
import Success from "./Success";

import "./resources/styles/Form.css";

class VoiceEntryConstructor extends Component {
  state = {
    step: 1,
    voice: "NA",
    voiceSentiment: "NA",
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
    const { voice, voiceSentiment } = this.state;
    const values = {
      voice,
      voiceSentiment,
    };

    switch (step) {
      case 1:
        return (
          <VoiceEntry
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
export default VoiceEntryConstructor;
