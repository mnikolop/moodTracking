import React from "react";
import { Container } from "semantic-ui-react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./resources/styles/Form.css";
import VoiceEntryConstructor from "./VoiceEntryConstructor";

function VoiceEntryForm() {
  return (
    <div className="voiceEntryForm">
      <div className="wrapper">
        <Container textAlign="center">
          <VoiceEntryConstructor />
        </Container>
      </div>
    </div>
  );
}

export default VoiceEntryForm;
