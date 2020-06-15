import React, { Component } from "react";
import p5 from "p5";
import Progress from "../Progress";


export default class CaptchaPuzzle extends Component {
  
    constructor(props)
    {
        super(props);
        this.myRef = React.createRef();
    }

    Sketch = (p) => {

        p.setup = () => {
            p.createCanvas(540, 360);
            this.control = new Control();
        }

        p.draw = () => {
            p.background(255);
            this.control.display();
        }

        p.mouseClicked = () => {
            this.control.mouseClickedEvent( p.mouseX, p.mouseY );
        }

        var Button = class
        {
            constructor(c, position, w, h)
            {
                this.fillColour = c;
                this.W = w;
                this.H = h;
                this.posX = position.x;
                this.posY = position.y;
                p.textSize(50);
            }

            display()
            {
                p.fill(this.fillColour);
                p.rectMode(p.CENTER);
                p.rect(this.posX, this.posY, this.W, this.H);
                p.fill(0);
                p.textAlign(p.CENTER, p.CENTER);
                p.text("Next", this.posX, this.posY);
            }

            correct()
            {
                this.fillColour = p.color(166, 166, 166);
            }
        }

        var Control = class
        {
            constructor()
            {
                let num = 4;
                this.order = 0;
                let w = p.width/2;
                let h = p.height/2;
                let c = new Array(num);
                this.complete = false;
                let pos = new Array(num);
                let n = new Array(num);
                this.button = [];

                for (var i = 0; i < num; i++) {

                    n[i] = p.int(p.random(num));
                    var redo = false;

                    while (true) {
                        for (var j=0; j<i; j++) {
                            if (n[i] === n[j]) redo = true;
                        }
                        if (redo) {
                            n[i] = p.int(p.random(num));
                            redo = false;
                        } else break;
                    }

                    if (n[i] === 0) {
                        pos[i] = p.createVector(w/2, h/2);
                    }
                    if (n[i] === 1) {
                        pos[i] = p.createVector(p.width-w/2, h/2);
                    }
                    if (n[i] === 2) {
                        pos[i] = p.createVector(w/2, p.height-h/2);
                    }
                    if (n[i] === 3) {
                        pos[i] = p.createVector(p.width-w/2, p.height-h/2);
                    }

                    c[0] = p.color( 219, 50, 54);
                    c[1] = p.color( 72, 133, 237);
                    c[2] = p.color( 244, 194, 13);
                    c[3] = p.color( 60, 186, 84);

                    this.button.push(new Button(c[i], pos[i], w, h));
                }
            }

            display() {
                if (this.order === 4) {
                    this.complete = true;
                }
                if (this.complete) {
                    p.fill(0, 200, 0);
                    p.textSize(20);
                    p.textAlign(p.CENTER, p.CENTER);
                    p.text("Captcha resolved...", p.width/2, p.height/2);
                    Progress.solveCaptcha();
                }
                else {
                    for (let i = 0; i < 4; i++) {
                        this.button[i].display();
                    }
                }
            }

            mouseClickedEvent(mx, my) {
                for (var i = 0; i < this.button.length; i++) {
                    if (this.order === i && mx > this.button[i].posX - this.button[i].W/2 && mx < this.button[i].posX + this.button[i].W/2 && my > this.button[i].posY - this.button[i].H/2 && my < this.button[i].posY + this.button[i].H/2) {
                        this.button[i].correct();
                        this.order += 1;
                    }
                }
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