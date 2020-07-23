import React from 'react';
import { Container } from 'semantic-ui-react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './resources/styles/Form.css';
import JournalEntryConstructor from "./JournalEntryConstructor";

function JournalEntryForm() {
  return (
    <div className="journalEntryForm">
      <div className="wrapper">
        <Container textAlign="center">
          <JournalEntryConstructor/>
        </Container>
      </div>
    </div>
  )
}

export default JournalEntryForm;