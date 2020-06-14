import React, { Component } from 'react'
import Logo from "./Logo";

import Progress from "../Progress"; 

export default class IntroScene extends Component {

    render()
    {
        if ( Progress.getProgress() === '0') {

            Progress.updateProgress( '1' );

            return (
                <div  id="introBox" >
                    <Logo />
                    <div id="introTextBox" >
                        A future... by Double Quantum Quartet
                    </div>
                </div>
            )
        } else {
            return ( <></> );
        }
    }

}