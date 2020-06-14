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
import Products from "./PageComponents/Products/Products";
import Founder from "./PageComponents/Founder/Founder";
import Board from "./PageComponents/Board/Board";
import Story from "./PageComponents/Story/Story";

import CaptchaPuzzle from './Puzzles/CaptchaPuzzle';

export default class App extends Component {
  
  constructor()
  {
    super();
    Progress.updateProgress('0');
    this.state = {progress: Progress.getProgress()};
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
          </>
        );
      case '3':
        return (
          <>
            Control Panel Site
          </>
        );
      case '2':
          return (
            <>
              Puzzle Site
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

            <CaptchaPuzzle />

            <IntroScene />
          </>
        );
      }
  }
}