import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import logo from './logo.svg';
import ItemForm from "./ItemForm";
import './styles/Form.css'

const Names = ({ setForm, formData, navigation }) => {
  const { firstName, lastName, nickName } = formData;

  const { next } = navigation;

  return (
    <div className="form">
      <img src={logo} className="App-logo" alt="logo" />
      <ItemForm
        label="First Name"
        name="firstName"
        value={firstName}
        onChange={setForm}
      />
      <ItemForm
        label="Last Name"
        name="lastName"
        value={lastName}
        onChange={setForm}
      />
      <ItemForm
        label="Nick Name"
        name="nickName"
        value={nickName}
        onChange={setForm}
      />
      <div>
        <Button onClick={next}>Next</Button>
      </div>
    </div>
  );
};

export default Names;
