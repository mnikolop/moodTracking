import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";
import "./resources/styles/Form.css";
import Rating from "@material-ui/lab/Rating";
import Typography from '@material-ui/core/Typography';
import "./resources/styles/Form.css";
import { withStyles } from '@material-ui/core/styles';
import FavoriteIcon from '@material-ui/icons/Favorite';
import WavesIcon from '@material-ui/icons/Waves';
import NightsStayIcon from '@material-ui/icons/NightsStay';
import FastfoodIcon from '@material-ui/icons/Fastfood';
import TollIcon from '@material-ui/icons/Toll';
import Battery60Icon from '@material-ui/icons/Battery60';

const Suspension = withStyles({
  iconFilled: {
    color: '#ff6d75',
  },
  iconHover: {
    color: '#2b5e94',
  },
})(Rating)

const Sleep = withStyles({
  iconFilled: {
    color: '#ff6d75',
  },
  iconHover: {
    color: '#710aa8',
  },
})(Rating)

const Eating = withStyles({
  iconFilled: {
    color: '#ff6d75',
  },
  iconHover: {
    color: '#a8470a',
  },
})(Rating)

const Focusing = withStyles({
  iconFilled: {
    color: '#ff6d75',
  },
  iconHover: {
    color: '#dedede',
  },
})(Rating)

const Energy = withStyles({
  iconFilled: {
    color: '#ff6d75',
  },
  iconHover: {
    color: '#f70202',
  },
})(Rating)

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

class VoiceEntry extends Component {
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
        <Suspension
          name="suspension"
          precision={0.5}
          value={values.suspension}
          onChange={this.props.handleChange("suspension")}
          icon={<WavesIcon fontSize="inherit" />}
          />
        <br></br>
        <Typography component="legend">Sleep</Typography>
        <Sleep
          name="sleep"
          precision={0.5}
          value={values.sleep}
          onChange={this.props.handleChange("sleep")}
          icon={<NightsStayIcon fontSize="inherit" />}
        />
        <br></br>
        <Typography component="legend">Eating</Typography>
        <Eating
          name="eating"
          precision={0.5}
          value={values.eating}
          onChange={this.props.handleChange("eating")}
          icon={<FastfoodIcon fontSize="inherit" />}
        />
        <br></br>
        <Typography component="legend">Focusing</Typography>
        <Focusing
          name="focusing"
          precision={0.5}
          value={values.focusing}
          onChange={this.props.handleChange("focusing")}
          icon={<TollIcon fontSize="inherit" />}
        />
        <br></br>
        <Typography component="legend">Energy</Typography>
        <Energy
          name="energy"
          precision={0.5}
          value={values.energy}
          onChange={this.props.handleChange("energy")}
          icon={<Battery60Icon fontSize="inherit" />}
        />
        <br></br>
        <Button variant="primary" onClick={this.saveAndContinue}>Save And Continue </Button>{' '}
        <Button variant="link" onClick={this.back}>Cancel</Button>
      </div>
    );
  }
}

export default VoiceEntry;
