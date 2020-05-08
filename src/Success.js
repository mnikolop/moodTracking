import React, { Component } from 'react';
import {Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import './resources/styles/Form.css'


class Success extends Component {
    render() {
        return (

            <div>
                <h1 className="ui centered">Thank you for contributing!</h1>
                <Link to="/">
                    <Button variant="primary">Add your own data here!</Button>
                </Link>            
            </div>
        )
    }
}

export default Success;
