import React from 'react';
import {Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import logo from './resources/logo.svg';
import './resources/App.css';

// TODO move all teh questions and answers to a file that they feed dropdowns

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
          <Link to="/form">
            <Button variant="primary">Add your own data here!</Button>
          </Link>
      </header>
    </div>
  );
}

export default App;
