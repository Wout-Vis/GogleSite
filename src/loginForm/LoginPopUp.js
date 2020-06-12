import React, { Component } from "react";
import { Modal, Button, Form } from "react-bootstrap";
import { Link } from "react-router-dom";

import LoginForm from "./LoginForm";
import { FormikApp } from "./LoginPage";
class LoginPopUP extends Component {
  state = {
    show: false,
  };

  handleModal() {
    this.setState({ show: !this.state.show });
  }

  render() {
    return (
      <div>
        <Button
          onClick={() => {
            this.handleModal();
          }}
        >
          Employee Login
        </Button>
        <Modal show={this.state.show} onHide={() => this.handleModal()}>
          <Modal.Header closeButton>Login with your employee mail</Modal.Header>
          <Modal.Body>
            <FormikApp />
          </Modal.Body>
          <Modal.Footer></Modal.Footer>
        </Modal>
      </div>
    );
  }
}
export default LoginPopUP;
