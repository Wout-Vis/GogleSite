import React, { Component } from "react";
import p5 from "p5";

import imgLU from "./RotateData/LU.png";
import imgRU from "./RotateData/RU.png";
import imgLD from "./RotateData/LD.png";
import imgRD from "./RotateData/RD.png";

export default class RotatePuzzle extends Component {
  
    constructor(props)
    {
        super(props);
        this.myRef = React.createRef();
    }

    Sketch = (p) => {
        
        let elements;

        p.setup = () => {
            p.createCanvas (400, 400);
            elements = new Elements();
        }

        p.draw = () => {
            p.rectMode( p.CENTER );
            p.background( 67, 67, 67 );
            elements.run();
        }

        p.mouseClicked = () => {
            elements.mouseClickedEvent( p.mouseX, p.mouseY );
        }

        class Elements {
            constructor(){
                this.img1 = p.loadImage(imgLU);
                this.img2 = p.loadImage(imgRU);
                this.img3 = p.loadImage(imgLD);
                this.img4 = p.loadImage(imgRD);

                this.randomRotation = new Array(4);
                this.isComplete = false;
                
                for (var i = 0; i < 4; i++) {
                    this.randomRotation[i] = p.int( p.random(4) );
                }
            }

            completeDisplay() {
                p.fill(0, 200, 0);
                p.textSize(20);
                p.textAlign( p.CENTER, p.CENTER );
                p.text("Correct! Your next password is ...", p.width/2, p.height/2);
            }

            display() {
                p.rectMode(p.CENTER);
                p.imageMode(p.CENTER);
                p.push();
                    p.translate(p.width/4, p.height/4);
                    p.rotate(p.HALF_PI*this.randomRotation[0]);
                    p.image(this.img1, 0, 0, p.width/2, p.width/2);
                p.pop();
                p.push();
                    p.translate(p.width/4*3, p.height/4);
                    p.rotate(p.HALF_PI*this.randomRotation[1]);
                    p.image(this.img2, 0, 0, p.width/2, p.width/2);    
                p.pop();
                p.push();
                    p.translate(p.width/4, p.height/4*3);
                    p.rotate(p.HALF_PI*this.randomRotation[2]);
                    p.image(this.img3, 0, 0, p.width/2, p.width/2);
                p.pop();
                p.push();
                    p.translate(p.width/4*3, p.height/4*3);
                    p.rotate(p.HALF_PI*this.randomRotation[3]);
                    p.image(this.img4, 0, 0, p.width/2, p.width/2);
                p.pop();
            }

            mouseClickedEvent(mx, my) {
                if (mx > 0 && mx < p.width/2 && my > 0 && my < p.height/2 && this.randomRotation[0] < 4) {
                    this.randomRotation[0] += 1;
                }
                if (mx > 0 && mx < p.width/2 && my > p.height/2 && my < p.height && this.randomRotation[2] < 4) {
                    this.randomRotation[2] += 1;
                }
                if (mx > p.width/2 && mx < p.width && my > 0 && my < p.height/2 && this.randomRotation[1] < 4) {
                    this.randomRotation[1] += 1;
                }
                if (mx > p.width/2 && mx < p.width && my > p.height/2 && my < p.height && this.randomRotation[3] < 4) {
                    this.randomRotation[3] += 1;
                }
            }

            complete() {
                for (var i = 0; i < this.randomRotation.length; i++) {
                    if (this.randomRotation[i] === 0) {
                        this.randomRotation[i] = 4;
                    }
                }
                if (this.randomRotation[0] === 4 && this.randomRotation[1] === 4 && this.randomRotation[2] === 4 && this.randomRotation[3] === 4) {
                    this.isComplete = true;
                }
            }
            
            run() {
                if (!this.isComplete) {
                this.display();
                } else if (this.isComplete) {
                this.completeDisplay();
                }
                this.complete();
            }
        }

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