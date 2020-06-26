import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Switch } from "react-router";

// Component Import
import IntroScene from "./IntroComponent/IntroScene";
import Header from "./HeaderComponent/Header";

import Footer from "./FooterComponent/Footer";
import Chatbot from "./ChatbotComponent/Chatbot";

import Progress from "./Progress";
// Page Imports
import Homepage from "./PageComponents/Homepage/Homepage";
import Products from "./PageComponents/Branches/Branches";
import Founder from "./PageComponents/Founder/Founder";
import Board from "./PageComponents/Board/Board";
import Story from "./PageComponents/Story/Story";

// After login page imports
import Integrety from "./PageComponents/CodeOfConduct/Integrety";
import PrePannel from "./PageComponents/PrePannel/PrePannel";
import NiceReads from "./PageComponents/NiceReads/NiceReads";
import Profile from "./PageComponents/ProfilePage/Profile";
import ProfileInformation from "./PageComponents/ProfileInformation/ProfileInformation";

import DotPuzzle from "./Puzzles/DotPuzzle";

import MockUp from "./ControlPanel/MockUp";
import FooterPage from "./FooterComponent/Footer";
import Header2 from "./HeaderComponent/Header2";
export default class App extends Component {
  constructor() {
    super();
    Progress.updateProgress("0");
    this.state = {
      progress: Progress.getProgress(),
    };
    this.introTimer = 0;
  }

  componentDidMount() {
    this.progressTicker = setInterval(() => this.tick(), 500);
  }

  componentWillUnmount() {
    clearInterval(this.progressTicker);
  }

  tick() {
    if (this.introTimer > 10) {
      this.setState({ progress: Progress.getProgress() });
    } else {
      this.introTimer++;
    }
  }

  render() {
    switch (this.state.progress) {
      case "5":
        return <>End Screen</>;
      case "4":
        return (
          <>
            <MockUp />
          </>
        );
      case "3":
        return (
          <>
            <Router>
              <Header2 />
              <Switch>
                <Route path="/Qin3M3n09nDhJHU2nuhdD" component={Profile} />
                <Route
                  path="/3a(3kJe28nkhdh703hkh3mpl0ye"
                  component={Integrety}
                />
                <Route
                  name="Books"
                  path="/jnD3ejLpEnmZW9789Hnl83lDmHQE"
                  component={NiceReads}
                />
                <Route
                  name="prePanel"
                  path="/JSn6yFsTxCRne2uOYCtt"
                  component={PrePannel}
                />
                <Route
                  name="story"
                  path="/fdsHD8H3jDeqN082"
                  component={ProfileInformation}
                />
              </Switch>
            </Router>
          </>
        );
      case "2":
        return (
          <>
            <div id="puzzleBG">
              <div id="puzzleBox">
                <DotPuzzle />
              </div>
            </div>
          </>
        );
      default:
        return (
          <>
            <Router>
              <Header />
              <Chatbot />
              <Switch>
                <Route name="home" exact path="/" component={Homepage} />
                <Route name="products" path="/products" component={Products} />
                <Route name="founder" path="/founder" component={Founder} />
                <Route name="board" path="/board" component={Board} />
                <Route name="story" path="/story" component={Story} />
              </Switch>
            </Router>
            <Profile />
            <FooterPage />

            <IntroScene />
          </>
        );
    }
  }
}
