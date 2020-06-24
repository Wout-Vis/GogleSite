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

import DotPuzzle from './Puzzles/DotPuzzle';
import RotatePuzzle from './Puzzles/RotatePuzzle'

import MockUp from './ControlPanel/MockUp';

export default class App extends Component {
  
  constructor()
  {
    super();
    Progress.updateProgress('0');
    this.state = {
      progress: Progress.getProgress()
    };
    this.introTimer = 0;
  }

  componentDidMount() {
    this.progressTicker = setInterval(
      () => this.tick(), 500
    );
  }

  componentWillUnmount() {
    clearInterval( this.progressTicker );
  }

  tick() {
    if ( this.introTimer > 10 )
    {
      this.setState(
        { progress: Progress.getProgress() }
      );
    } else {
      this.introTimer++;
    }
  }

  render() {

    switch ( this.state.progress )
    {
      case '4':
        return(
          <>
            End Screen
          </>
        );
      case '3':
        return (
          <>
            <MockUp />
          </>
        );
      case '2':
          return (
            <>
              <div id="puzzleBG">
                <div id="puzzleBox">
                  <DotPuzzle />
                  <RotatePuzzle />
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

            <Footer />

            <IntroScene />
          </>
        );
      }
  }
}