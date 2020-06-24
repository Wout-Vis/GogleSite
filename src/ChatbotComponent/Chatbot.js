import React, { Component } from "react";
import ChatbotComponent from "./ChatbotComponent";
import { render } from "@testing-library/react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default class Chatbot extends Component {
  constructor() {
    super();
    this.state = {};
    this.introTimer = 0;
  }

  componentDidMount() {
    this.progressTicker = setInterval(() => this.tick(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.progressTicker);
  }

  tick() {
    if (this.introTimer === 50) {
      this.introTimer++;
      toast(
        "Have you tried our new helpdesk function, here somebody will awnser all your questions. To acces this, there is a icon in the bottom left of everypage",
        {
          position: "bottom-right",
          autoClose: false,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        }
      );
      console.log("df");
      render(
        <div>
          <ToastContainer />
        </div>
      );

      return (
        <div>
          <ToastContainer />
        </div>
      );
    } else if (this.introTimer === 200) {
      this.introTimer++;

      toast(
        "Okay so I have been able to hack into the message popups, I just wanted to let you know that you should look at somebodys's dog. That may be the key to get inside the system",
        {
          position: "bottom-right",
          autoClose: false,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        }
      );
      console.log("df");
      render(
        <div>
          <ToastContainer />
        </div>
      );
    } else {
      this.introTimer++;
    }
  }
  render() {
    return (
      <div>
        <ChatbotComponent />
      </div>
    );
  }
}
