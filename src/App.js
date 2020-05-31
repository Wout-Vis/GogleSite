import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Switch } from "react-router";

// Component Import
import Header from "./HeaderComponent/Header";
import Footer from "./FooterComponent/Footer";
import Chatbot from "./ChatbotComponent/Chatbot";

// Page Imports
import Homepage from "./PageComponents/Homepage/Homepage";
import Products from "./PageComponents/Products/Products";
import Founder from "./PageComponents/Founder/Founder";
import Board from "./PageComponents/Board/Board";
import Story from "./PageComponents/Story/Story";

function App() {
  return (
    <> 
      <Router>
        <Header />
        <Switch>
            <Route name="home" exact path="/" component={Homepage} />
            <Route name="products" path="/products" component={Products} />
            <Route name="founder" path="/founder" component={Founder} />
            <Route name="board" path="/board" component={Board} />
            <Route name="story" path="/story" component={Story} />
          </Switch>
      </Router>

      <Footer />

      <Chatbot />
    </>
  );
}

export default App;
