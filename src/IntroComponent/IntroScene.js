import React from 'react'
import Logo from "./Logo";

export default function IntroScene() {
    
    var className = "";

    function triggerInvisible(e) {
        className = "invisible";
    }

    return (
        <div onLoad={triggerInvisible} id="introBox" className={className}>
            <Logo />
            <div id="introTextBox">
                A future... by Double Quantum Quartet
            </div>
        </div>
    )

}