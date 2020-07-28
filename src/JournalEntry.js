import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";
import "./resources/styles/Form.css";
import Rating from "@material-ui/lab/Rating";
import Typography from "@material-ui/core/Typography";
import "./resources/styles/Form.css";
import TextField from "@material-ui/core/TextField";
import SentimentVeryDissatisfiedIcon from "@material-ui/icons/SentimentVeryDissatisfied";
import SentimentDissatisfiedIcon from "@material-ui/icons/SentimentDissatisfied";
import SentimentSatisfiedIcon from "@material-ui/icons/SentimentSatisfied";
import SentimentSatisfiedAltIcon from "@material-ui/icons/SentimentSatisfiedAltOutlined";
import SentimentVerySatisfiedIcon from "@material-ui/icons/SentimentVerySatisfied";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import PropTypes from "prop-types";

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
    const { values, classes } = this.props;

    return (
      <div>
        <form>
          <TextField
            className={classes.root}
            id="outlined-multiline-static"
            label="Journal Entry"
            variant="outlined"
            multiline
            rows={10}
            rowsMax={20}
            fullWidth
          />
        </form>
        <br></br>
        <Typography component="legend">Custom icon set</Typography>
        <Rating
          name="customized-icons"
          getLabelText={(value) => customIcons[value].label}
          IconContainerComponent={IconContainer}
          id="icon"
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
export default withStyles(styles)(JournalEntry);
