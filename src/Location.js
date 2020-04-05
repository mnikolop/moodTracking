import React, { Component } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Form } from 'semantic-ui-react';
import Button from 'react-bootstrap/Button';
import './resources/Form.css'

class Location extends Component {

    saveAndContinue = (e) => {
        e.preventDefault()
        this.props.nextStep()
    }

    back = (e) => {
        e.preventDefault();
        this.props.prevStep();
    }
    render() {
        const { values } = this.props;
        return (
            <Form >
                <h1 className="ui centered">Ange din plats (region)</h1>
                <Form.Field >
                    <input
                        placeholder='Region'
                        onChange={this.props.handleChange('location')}
                        defaultValue={values.location}
                    />
                </Form.Field>
                <br></br>
                <Button onClick={this.saveAndContinue}>Save And Continue </Button>
                <br></br>
                <Button onClick={this.back}>Back</Button>

            </Form>
        )
    }
}

export default Location;
