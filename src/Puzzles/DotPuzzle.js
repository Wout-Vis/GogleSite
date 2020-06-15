import React, { Component } from "react";
import p5 from "p5";

import Progress from "../Progress";

import imgPuzzle1 from "./DotData/Puzzle.jpg";
import imgPuzzle2 from "./DotData/Puzzle Answer3.jpg";
import imgPuzzle3 from "./DotData/Puzzle Incorrect1.jpg";

export default class DotPuzzle extends Component {
  
    constructor(props)
    {
        super(props);
        this.myRef = React.createRef();
    }

    Sketch = (p) => {
        
        var dots;
        var control;
  
        p.setup = () => {
            p.createCanvas (1000, 900);
            dots = new Dots();
            control = new Control();
        }
  
        p.draw = () => {
            p.background(67, 67, 67);
            dots.display();
            control.display(p.mouseX, p.mouseY);
        }
  
        p.mousePressed = () => {
          control.mouseIsPressedEvent(p.mouseX, p.mouseY);
        }
  
        p.mouseReleased = () => {
          control.mouseReleasedEvent(p.mouseX, p.mouseY);
        }
  
        var Answer = class {
          constructor(n)
          {
            this.posX = 0;
            this.posY = 0;
  
            if (n === 0) {
              this.photo1 = p.loadImage(imgPuzzle2);
            }
            if (n === 1) {
              this.photo1 = p.loadImage(imgPuzzle3);
            }
            if (n === 2) {
              this.photo1 = p.loadImage(imgPuzzle1);
            }
          }
  
          display(x, y) {
            this.posX = x;
            this.posY = y;
            p.image(this.photo1, this.posX, this.posY, 245, 184);
            p.rectMode(p.CORNER);
            p.noFill();
            p.stroke(0);
            p.rect(this.posX, this.posY, 245, 184);
          }
        }
  
        class Circles {
          constructor(ds)
          {
            this.dotsize = ds;
          }
  
          display() {
            if (this.completed) {
                p.fill(0, 255, 0);
            } else if (this.pattern) {
                p.fill (150);
            } else {
                p.fill (0);
            }
            p.ellipse(this.posX, this.posY, this.dotsize, this.dotsize);
          }
  
          position(X, Y) {
            this.posX = X;
            this.posY = Y;
          }
  
          complete() {
            this.completed = true;
          }
        }
  
        var Control = class {
          constructor()
          {
            this.dotsize = 20;
  
            this.question = new Question();
            this.puzzle = new Puzzle(this.dotsize);
            this.completed = false;
          }
  
          display(mx, my) {
            this.question.display();
            this.puzzle.display();
            this.puzzle.update(mx, my);
  
            if (this.completed) {
                p.fill(0, 200, 0);
                p.textSize(50);
                p.text("Authentication successful...", p.width/2, p.height/2);
                Progress.updateProgress('3');
            }
          }
  
          mouseIsPressedEvent(mx, my) {
            this.puzzle.pick(mx, my);
          }
  
          mouseReleasedEvent(mx, my) {
            this.puzzle.released();
            this.complete(mx, my);
          }
  
          complete(mx, my) {
            if (mx > 70 && mx < 315 && my > p.height - 190 && my < p.height) {
              this.puzzle.complete();
              this.completed = true;
            }
          }
        }
  
        var Dots = class {
  
          constructor()
          {
            this.dotsize = 8;
            this.dotsX = new Array(42);
            this.dotsY = new Array(42);
            this.posX = new Array(7);
            this.posY = new Array(6);
          }
  
          display() {
            p.fill(0, 0, 100);
            p.noStroke();
            for (var i = 0; i < 7; i ++) {
              this.posX[i] = (1+i)*p.width/8;
              for (var j = 0; j < 6; j ++) {
                this.posY[j] = (1+j)*(p.height-100)/7;
                this.dotsX[i+j] = this.posX[i];
                this.dotsY[i+j] = this.posY[j];
  
                p.ellipse(this.dotsX[i+j], this.dotsY[i+j], this.dotsize, this.dotsize);
              }
            }
          }
        }
  
        var Lines = class {
  
          display(X1, Y1, X2, Y2) {
            this.posX1 = X1;
            this.posY1 = Y1;
            this.posX2 = X2;
            this.posY2 = Y2;
            p.strokeWeight(3);
            p.line(this.posX1, this.posY1, this.posX2, this.posY2);
            p.strokeWeight(1);
          }
        }
  
        var Puzzle = class {
          constructor(ds)
          {
            this.posX = new Array(8);
            this.posY = new Array(8);
            this.circles = new Array(8);
            this.lines = new Array(16);
            this.picked = new Array(8);
          
            for (var i = 0; i< this.circles.length; i++) {
              this.circles[i] = new Circles(ds);
              this.picked[i] = false;
              this.posX[i] = p.int(p.random(50, p.width-50));
              this.posY[i] = p.int(p.random(100, p.height-200));
            }
  
            for ( var i = 0; i< this.lines.length; i++) {
              this.lines[i] = new Lines();
            }
          }
  
          display() {
            p.stroke(0);
            for ( var i = 0; i < 8; i ++) {
              this.circles[i].position(this.posX[i], this.posY[i]);
            }
  
            this.lines[0].display(this.circles[0].posX, this.circles[0].posY, this.circles[3].posX, this.circles[3].posY);
            this.lines[1].display(this.circles[0].posX, this.circles[0].posY, this.circles[4].posX, this.circles[4].posY);
            this.lines[2].display(this.circles[0].posX, this.circles[0].posY, this.circles[5].posX, this.circles[5].posY);
            this.lines[3].display(this.circles[2].posX, this.circles[2].posY, this.circles[6].posX, this.circles[6].posY);
            this.lines[4].display(this.circles[2].posX, this.circles[2].posY, this.circles[3].posX, this.circles[3].posY);
            this.lines[5].display(this.circles[2].posX, this.circles[2].posY, this.circles[4].posX, this.circles[4].posY);
            this.lines[6].display(this.circles[1].posX, this.circles[1].posY, this.circles[3].posX, this.circles[3].posY);
            this.lines[7].display(this.circles[1].posX, this.circles[1].posY, this.circles[5].posX, this.circles[5].posY);
            this.lines[8].display(this.circles[1].posX, this.circles[1].posY, this.circles[6].posX, this.circles[6].posY);
            this.lines[9].display(this.circles[7].posX, this.circles[7].posY, this.circles[4].posX, this.circles[4].posY);
            this.lines[10].display(this.circles[7].posX, this.circles[7].posY, this.circles[5].posX, this.circles[5].posY);
            this.lines[11].display(this.circles[7].posX, this.circles[7].posY, this.circles[6].posX, this.circles[6].posY);
            this.lines[12].display(this.circles[3].posX, this.circles[3].posY, this.circles[4].posX, this.circles[4].posY);
            this.lines[13].display(this.circles[3].posX, this.circles[3].posY, this.circles[5].posX, this.circles[5].posY);
            this.lines[14].display(this.circles[5].posX, this.circles[5].posY, this.circles[6].posX, this.circles[6].posY);
            this.lines[15].display(this.circles[6].posX, this.circles[6].posY, this.circles[4].posX, this.circles[4].posY);
  
            for (var i = 0; i < this.circles.length; i++) {
              this.circles[i].display();
            }
          }
  
          complete() {
            for (var i = 0; i< this.circles.length; i++) {
              this.circles[i].complete();
            }
          }
  
          released() {
            for ( var i = 0; i < this.circles.length; i++) {
              if (this.picked[i]) {
                this.picked[i] = false;
              }
            }
          }
  
          update(mx, my) {
            for ( var i = 0; i < this.circles.length; i++) {
              if (this.picked[i]) {
                this.posX[i] = mx;
                this.posY[i] = my;
              }
            }
          }
  
          pick(mx, my) {
            for ( var i = 0; i < this.circles.length; i++) {
              if ((mx > this.posX[i] - this.circles[i].dotsize && mx < this.posX[i] + this.circles[i].dotsize) && (my > this.posY[i] - this.circles[i].dotsize && my < this.posY[i] + this.circles[i].dotsize)) {
                this.picked[i] = true;
              }
            }
          }
        }
  
        var Question = class {
          constructor()
          {
            this.answers = new Array(3);
            this.posX = new Array(3);
            this.posY = new Array(3);
  
            for (var i = 0; i < 3; i++) {
              this.answers[i] = new Answer(i);
              this.posX[0] = 70;
              this.posX[1] = p.width/2 - 123;
              this.posX[2] = p.width - 315;
              this.posY[i] = p.height - 190;
            }
          }
          
          display() {
            p.textAlign(p.CENTER);
            p.textSize(32);
            p.text("Which image can you make?", p.width/2, 50);
            for (var i = 0; i < 3; i++) {
              this.answers[i].display(this.posX[i], this.posY[i]);
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