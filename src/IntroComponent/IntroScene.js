import React from "react";
import Logo from "./Logo";

export default function IntroScene() {
  var className = "invisible";

  function triggerInvisible(e) {
    className = "";
  }

  return (
    <div onLoad={triggerInvisible} id="introBox" className={className}>
      <Logo />
      <div id="introTextBox">A future... by Double Quantum Quartet</div>
    </div>
  );
}
