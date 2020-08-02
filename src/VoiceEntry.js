import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";
import "./resources/styles/Form.css";
import Rating from "@material-ui/lab/Rating";
import Typography from "@material-ui/core/Typography";
import "./resources/styles/Form.css";
import SentimentVeryDissatisfiedIcon from "@material-ui/icons/SentimentVeryDissatisfied";
import SentimentDissatisfiedIcon from "@material-ui/icons/SentimentDissatisfied";
import SentimentSatisfiedIcon from "@material-ui/icons/SentimentSatisfied";
import SentimentSatisfiedAltIcon from "@material-ui/icons/SentimentSatisfiedAltOutlined";
import SentimentVerySatisfiedIcon from "@material-ui/icons/SentimentVerySatisfied";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import PropTypes from "prop-types";
import { ReactMic } from "react-mic";

const styles = (theme) => ({
  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
      width: "25ch",
      "& $disabled": {
        borderColor: "#fff",
      },
    },
  },
});

const customIcons = {
  1: {
    icon: <SentimentVeryDissatisfiedIcon />,
    label: "Very Dissatisfied",
  },
  2: {
    icon: <SentimentDissatisfiedIcon />,
    label: "Dissatisfied",
  },
  3: {
    icon: <SentimentSatisfiedIcon />,
    label: "Neutral",
  },
  4: {
    icon: <SentimentSatisfiedAltIcon />,
    label: "Satisfied",
  },
  5: {
    icon: <SentimentVerySatisfiedIcon />,
    label: "Very Satisfied",
  },
};

function IconContainer(props) {
  const { value, ...other } = props;
  return <span {...other}>{customIcons[value].icon}</span>;
}

IconContainer.propTypes = {
  value: PropTypes.number.isRequired,
};

class VoiceEntry extends Component {
  saveAndContinue = (e) => {
    e.preventDefault();
    this.props.nextStep();
  };

  back = (e) => {
    e.preventDefault();
    this.props.prevStep();
  };

  constructor(props) {
    super(props);
    this.state = {
      record: false,
    };
  }

  startRecording = () => {
    this.setState({ record: true });
  };

  stopRecording = () => {
    this.setState({ record: false });
  };

  onData(recordedBlob) {
    console.log("chunk of real-time data is: ", recordedBlob);
  }

  onStop(recordedBlob) {
    console.log("recordedBlob is: ", recordedBlob);
    // voice = recordedBlob;
    // console.log("voice is: ", voice);
  }

  render() {
    const { values, classes } = this.props;

    return (
      <div>
        <form>
          <ReactMic
            record={this.state.record}
            className="sound-wave"
            onStop={this.onStop}
            onData={this.onData}
            name="voice"
            value={values.voice}
          />
          <br></br>
          <button onClick={this.startRecording} type="button">
            Start
          </button>
          <button onClick={this.stopRecording} type="button">
            Stop
          </button>
        </form>
        <br></br>
        <Typography component="legend">Sentiment</Typography>
        <Rating
          name="customized-icons"
          getLabelText={(value) => customIcons[value].label}
          IconContainerComponent={IconContainer}
          name="voiceSentiment"
          value={values.voiceSentiment}
          onChange={this.props.handleChange("voiceSentiment")}
        />
        <br></br>
        <Button variant="primary" onClick={this.saveAndContinue}>
          Save And Continue{" "}
        </Button>{" "}
        <Button variant="link" onClick={this.back}>
          Cancel
        </Button>
      </div>
    );
  }
}
export default withStyles(styles)(VoiceEntry);
