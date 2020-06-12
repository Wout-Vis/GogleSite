import React, { Component } from "react";
import { Form, Button } from "react-bootstrap";
import { withFormik } from "formik";

import { render } from "@testing-library/react";

export default class LoginForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value,
    });
  }

  validate(event) {
    let nameCode = "";
    let emailCode = "";
    if (this.state.email === emailCode && this.state.password === nameCode) {
      return true;
    }

    return false;
  }

  handleSubmit(event) {
    console.log(this.state);

    const isValid = this.validate();
    if (isValid) {
    }
    event.preventDefault();
  }

  render() {
    return (
      <div>
        <Form>
          <Form.Group>
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              name="email"
              placeholder="Enter email"
              value={this.state.email}
              onChange={this.handleChange}
            />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>

          <Form.Group controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              name="password"
              placeholder="Password"
              value={this.state.password}
              onChange={this.handleChange}
            />
          </Form.Group>
          <Form.Group controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Check me out" />
          </Form.Group>
          <Button variant="primary" type="submit" onSubmit={this.handleSubmit}>
            Submit
          </Button>
        </Form>
      </div>
    );
  }
}
