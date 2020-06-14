import React, { Component } from "react";
import p5 from "p5";


export default class CaptchaPuzzle extends Component {
  
    constructor(props)
    {
        super(props);
        this.myRef = React.createRef();
    }

    Sketch = (p) => {
        
        

    }

    componentDidMount() {
        this.myP5 = new p5( this.Sketch, this.myRef.current );
    }

    render() {
        return (
            <div ref={this.myRef}>
            </div>
        );
    }
}