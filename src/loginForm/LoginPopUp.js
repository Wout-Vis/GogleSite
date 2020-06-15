import React, { Component } from "react";
import { Modal, Button } from "react-bootstrap";

import { FormikApp } from "./LoginPage";
import Progress from "../Progress";

import CaptchaPuzzle from '../Puzzles/CaptchaPuzzle';

export default class LoginPopUP extends Component {

  constructor()
  {
    super();
    Progress.resetCaptcha();
    this.state = {
      show: false,
      captcha: Progress.getCaptchaState()
    };
  }

  componentDidMount() {
    this.captchaTicker = setInterval(
      () => this.tick(), 500
    );
  }

  componentWillUnmount() {
    clearInterval( this.captchaTicker );
  }

  tick() {
    this.setState( {
      captcha: Progress.getCaptchaState()
    });
  }

  CaptchaComponent = () => {
    if ( this.state.captcha === '1' )
    {
      return (<FormikApp />);
    } else {
      return <CaptchaPuzzle />;
    }
  }

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
            <this.CaptchaComponent />
          </Modal.Body>
          <Modal.Footer></Modal.Footer>
        </Modal>
      </div>
    );
  }
}