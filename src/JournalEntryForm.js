import React from 'react';
import { Container } from 'semantic-ui-react';
import 'bootstrap/dist/css/bootstrap.min.css';
import JournalEntryConstructor from "./JournalEntryConstructor";
import './resources/styles/Form.css'


function MoodChecksForm() {
    return (
      <div className="moodChecksForm">
        <div className="wrapper">
        <Container textAlign='center'>
          <JournalEntryConstructor/>
        </Container>
        </div>
      </div>
    );
}
  
  export default MoodChecksForm;