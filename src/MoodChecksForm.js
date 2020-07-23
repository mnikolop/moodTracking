import React from 'react';
import { Container } from 'semantic-ui-react';
import 'bootstrap/dist/css/bootstrap.min.css';
import MoodChecksConstructor from "./MoodChecksConstructor";
import './resources/styles/Form.css'


function MoodChecksForm() {
    return (
      <div className="moodChecksForm">
        <div className="wrapper">
        <Container textAlign='center'>
          <MoodChecksConstructor/>
        </Container>
        </div>
      </div>
    );
}
  
export default MoodChecksForm;