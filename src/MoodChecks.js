import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";
import "./resources/styles/Form.css";
import Rating from "@material-ui/lab/Rating";

const labels = {
  0.5: "0.5",
  1: "1",
  1.5: "1.5",
  2: "2",
  2.5: "2.5",
  3: "3",
  3.5: "3.5",
  4: "4",
  4.5: "4.5",
  5: "5",
};

class MoodChecks extends Component {
  saveAndContinue = (e) => {
    e.preventDefault();
    this.props.nextStep();
  };

  back = (e) => {
    e.preventDefault();
    this.props.prevStep();
  };

  render() {
    const { values } = this.props;
    return (
      <div>
        <h3>Energy:</h3>
        <Rating
          name="simple-controlled"
          value={values.energy}
          onChange={this.props.handleChange("energy")}
        />
        <br></br>
        <Rating
          name="simple-controlled"
          value={values.eating}
          onChange={this.props.handleChange("eating")}
        />
        <br></br>
        <Button onClick={this.saveAndContinue}>Save And Continue </Button>
        <br></br>
        <Button onClick={this.back}>Back</Button>
      </div>
    );
  }
}

export default MoodChecks;
