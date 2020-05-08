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
        <img src={"./resources/graph.png"} className="Graph" alt="graph"></img>
        <br></br>
          <Link to="/form">
            <Button variant="primary">New Entry</Button>
          </Link>
      </header>
    </div>
  );
}

export default App;
