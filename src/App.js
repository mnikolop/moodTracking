import React from 'react';
import {Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Button, Alert} from 'react-bootstrap';
import './resources/styles/App.css';

// TODO move all teh questions and answers to a file that they feed dropdowns

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div>
          <p>
            This is a website collecting data from self reporting cases, that might be falling though the cracks  of the testing systems. All data is anonymous and is used to generate the graphics seen in this page. 
            <br></br>
            This is not a diagnostic page! It collects dat for statistic purposes! 
            <br></br>
            The questions have been copied from <a href='https://corona.sll.se/'>corona.sll.se/</a> and if you are looking for a diagnosis please go to that link.
          </p>
          <Alert variant='danger'> If you are feeling sick contact your doctor, 1177, <a href='https://1177.se/'>1177.se</a> or do the self exam at <a href='https://corona.sll.se/'>corona.sll.se</a>. </Alert>
        </div>
          <Link to="/form">
            <Button variant="primary">Add your own data here!</Button>
          </Link>
      </header>
    </div>
  );
}

export default App;
