import React from 'react';
import {Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import logo from './logo.svg';
import './App.css';



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
