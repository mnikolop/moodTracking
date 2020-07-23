import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import './resources/styles/index.css';
import App from './App';
import MoodChecksForm from './MoodChecksForm';
import JournalEntryForm from './JournalEntryForm';
import * as serviceWorker from './resources/serviceWorker';

const rootElement = document.getElementById("root");
ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={App} />
      <Route path="/MoodChecksForm" component={MoodChecksForm} />
      <Route path="/JournalEntryForm" component={JournalEntryForm} />
    </Switch>
  </BrowserRouter>,
  rootElement
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
