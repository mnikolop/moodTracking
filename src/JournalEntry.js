import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";
import "./resources/styles/Form.css";
import Rating from "@material-ui/lab/Rating";
import Typography from '@material-ui/core/Typography';
import "./resources/styles/Form.css";
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import SentimentVeryDissatisfiedIcon from '@material-ui/icons/SentimentVeryDissatisfied';
import SentimentDissatisfiedIcon from '@material-ui/icons/SentimentDissatisfied';
import SentimentSatisfiedIcon from '@material-ui/icons/SentimentSatisfied';
import SentimentSatisfiedAltIcon from '@material-ui/icons/SentimentSatisfiedAltOutlined';
import SentimentVerySatisfiedIcon from '@material-ui/icons/SentimentVerySatisfied';

const Focusing = withStyles({
  iconFilled: {
    color: '#ff6d75',
  },
  iconHover: {
    color: '#dedede',
  },
})(Rating)

const customIcons = {
  1: {
    icon: <SentimentVeryDissatisfiedIcon />,
    label: 'Very Dissatisfied',
  },
  2: {
    icon: <SentimentDissatisfiedIcon />,
    label: 'Dissatisfied',
  },
  3: {
    icon: <SentimentSatisfiedIcon />,
    label: 'Neutral',
  },
  4: {
    icon: <SentimentSatisfiedAltIcon />,
    label: 'Satisfied',
  },
  5: {
    icon: <SentimentVerySatisfiedIcon />,
    label: 'Very Satisfied',
  },
};
function IconContainer(props) {
  const { value, ...other } = props;
  return <span {...other}>{customIcons[value].icon}</span>;
}

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
        <form>
          <TextField label="Journal Entry" variant="outlined" multiline rows={10} rowsMax={20} fullWidth/>
        </form>
        <br></br>
        <Typography component="legend">Custom icon set</Typography>
        <Rating
          name="customized-icons"
          getLabelText={(value) => customIcons[value].label}
          IconContainerComponent={IconContainer}
        />
        <br></br>
        <Button variant="primary" onClick={this.saveAndContinue}>Save And Continue </Button>{' '}
        <Button variant="link" onClick={this.back}>Cancel</Button>
      </div>

    );
  }
}
export default JournalEntry;