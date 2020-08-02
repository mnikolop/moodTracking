import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { List } from "semantic-ui-react";
import Button from "react-bootstrap/Button";
import "./resources/styles/Form.css";
import firebase from "./resources/firebase";

class Confirmation extends Component {
  saveAndContinue = (e) => {
    e.preventDefault();
    this.props.nextStep();
  };

  back = (e) => {
    // e.preventDefault();
    this.props.prevStep();
  };

  toStep = (e) => {
    this.props.toStep();
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const itemsRef = firebase.database().ref("responces");

    const item = this.props.values;

    itemsRef.push(item);
    this.setState({
      suspension: " ",
      sleep: " ",
      eating: " ",
      focusing: " ",
      energy: " ",
      text: " ",
      textSentiment: " ",
      voice: " ",
      voiceSentiment: " ",
    });
    this.props.nextStep();
  };

  render() {
    const {
      values: {
        suspension,
        sleep,
        eating,
        focusing,
        energy,
        text,
        textSentiment,
        voice,
        voiceSentiment,
      },
    } = this.props;

    return (
      <div>
        <h1 className="ui centered">Confirm your Details</h1>
        <p>
          Click Confirm if the following details have been correctly entered
        </p>
        <List>
          <List.Item>
            <List.Content>suspension: {suspension}</List.Content>
          </List.Item>
          <List.Item>
            <List.Content>sleep: {sleep}</List.Content>
          </List.Item>
          <List.Item>
            <List.Content>eating: {eating}</List.Content>
          </List.Item>
          <List.Item>
            <List.Content>focusing: {focusing}</List.Content>
          </List.Item>
          <List.Item>
            <List.Content>energy: {energy}</List.Content>
          </List.Item>
          <List.Item>
            <List.Content>text: {text}</List.Content>
          </List.Item>
          <List.Item>
            <List.Content>textSentiment: {textSentiment}</List.Content>
          </List.Item>
          <List.Item>
            <List.Content>voice: {voice}</List.Content>
          </List.Item>
          <List.Item>
            <List.Content>voiceSentiment: {voiceSentiment}</List.Content>
          </List.Item>
        </List>
        <br></br>
        <Button onClick={this.handleSubmit}>Confirm</Button>
        <br></br>
        {/* <Button onClick={this.back}>Back</Button> TODO: Fix this! */}
      </div>
    );
  }
}

export default Confirmation;
