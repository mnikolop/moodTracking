import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";
import "./resources/styles/Form.css";
import Rating from "@material-ui/lab/Rating";
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
        <Typography component="legend">Suspension</Typography>
        <Rating
          value={values.suspension}
          onChange={this.props.handleChange("suspension")}
        />
        <br></br>
        <Typography component="legend">Sleep</Typography>
        <Rating
          value={values.sleep}
          onChange={this.props.handleChange("sleep")}
        />
        <br></br>
        <Typography component="legend">Eating</Typography>
        <Rating
          name="simple-controlled"
          value={values.eating}
          onChange={this.props.handleChange("eating")}
        />
        <br></br>
        <Typography component="legend">Focusing</Typography>
        <Rating
          name="simple-controlled"
          value={values.focusing}
          onChange={this.props.handleChange("focusing")}
        />
        <br></br>
        <Typography component="legend">Energy</Typography>
        <Rating
          name="simple-controlled"
          value={values.energy}
          onChange={this.props.handleChange("energy")}
        />
        <br></br>
        <Button variant="primary" onClick={this.saveAndContinue}>Save And Continue </Button>{' '}
        <Button variant="link" onClick={this.back}>Cancel</Button>
      </div>
    );
  }
}

export default MoodChecks;
