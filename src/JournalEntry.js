import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";
import "./resources/styles/Form.css";
import Typography from '@material-ui/core/Typography';
import "./resources/styles/Form.css";

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

class JournalEntry extends Component {
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
        <Typography component="legend">Suspension</Typography>
        <TextareaAutosize aria-label="minimum height" rowsMin={3} placeholder="Minimum 3 rows" />

        <br></br>
        <Button variant="primary" onClick={this.saveAndContinue}>Save And Continue </Button>{' '}
        <Button variant="link" onClick={this.back}>Cancel</Button>
      </div>
    );
  }
}

export default JournalEntry;
