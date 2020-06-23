import React, { Component } from "react";
import p5 from "p5";

import Progress from "../Progress";

import imgPuzzle1 from "./DotData/Solution1.jpg";
import imgPuzzle2 from "./DotData/Solution2.jpg";
import imgPuzzle3 from "./DotData/Solution3.jpg";

import FigureFile from "./DotData/figure.fd";

export default class DotPuzzle extends Component {
  
    constructor(props)
    {
        super(props);
        this.myRef = React.createRef();

        this.authenticationText = "Authentication required. Solve the correct figure.";
    }

    Sketch = (p) => {

        let endTimer;
        let figure;
        let grid;
        let gridSize = 70;

        p.width = 600;
        p.height = 450;

        p.preload = () => {
            console.log( "preloading" );
            p.loadStrings( FigureFile, p.loadFigure );
        }

        p.loadFigure = ( stringReturn ) => {
            console.log( "figure loading" );
            figure = new Figure( stringReturn, gridSize, 20 )
        }
        
        p.setup = () => {
            p.createCanvas( 600, 450 );

            endTimer = new EndTimer();
            grid = new Grid( p.createVector(7,6), gridSize, 8 );
        }

        p.draw = () => {
            p.background( 67, 67, 67 );

            grid.display();

            if ( figure )
            {
                figure.display();
                figure.update();

                if ( figure.puzzleSolved() )
                {
                    figure.turnGreen();
                    endTimer.run();
                    this.authenticationText = "Authentication successful.";
                }
                else
                {
                    figure.turnBlack();
                    endTimer.reset();
                    this.authenticationText = "Authentication required. Solve the correct figure.";
                }
            }
        }

        p.mousePressed = () => {
            let mouse = p.createVector( p.mouseX, p.mouseY );
            figure.selectDot( mouse );
        }

        p.mouseReleased = () => {
            figure.dropDot();
        }

        p.mouseDragged = () => {
            let mouse = p.createVector( p.mouseX, p.mouseY );
            if ( figure ) figure.updateSelectedDot( mouse );
        }

        let EndTimer = class
        {
            run()
            {
                if ( p.millis() - this.timer > 3000 )
                {
                    Progress.updateProgress( '3' );
                }
            }

            reset()
            {
                this.timer = p.millis();
            }
        }

        let Grid = class
        {

            constructor ( initDimension, initGridSize, initDotSize )
            {
                this.gridSize = initGridSize;
                this.dimension = initDimension;
                this.dotSize = initDotSize;
            }

            display()
            {
                p.fill( 0, 0, 100 );
                p.noStroke();

                for ( let i = 1; i <= this.dimension.x; i++ ) {
                    for ( let j = 1; j <= this.dimension.y; j++ ) {
                        let x = i * this.gridSize;
                        let y = j * this.gridSize;
                        p.ellipse( x, y, this.dotSize, this.dotSize );
                    }
                }
            }
        }

        let Figure = class
        {
            constructor ( fileStrings, gridSize, initDotSize )
            {
                this.dotSize = initDotSize;

                this.colour = p.color( 0 );

                this.dots = [];
                this.lines = [];

                for ( let i = 0; i < fileStrings.length; i++ )
                {
                    let str = fileStrings[i];
                    let finX = (p.unchar(str[0])-64) * gridSize;
                    let finY = (p.unchar(str[1])-48) * gridSize;
                    let x = p.random( 0, p.width );
                    let y = p.random( 0, p.height );

                    this.dots.push( new Dot( p.createVector( x, y), p.createVector( finX, finY ) ) );
                }
                console.log( this.dots );
            
                for ( let i = 0; i < fileStrings.length; i++ )
                {
                    let str = fileStrings[i];
                    let finX1 = (p.unchar(str[0])-64) * gridSize;
                    let finY1 = (p.unchar(str[1])-48) * gridSize;

                    let splitStr0 = p.split( str, '-' );
                    if ( splitStr0[1] )
                    {
                        let splitStr = p.split( splitStr0[1], '|' );

                        for ( let n = 0; n < this.dots.length; n++ )
                        {
                            if ( finX1 === this.dots[n].finPosition.x && finY1 === this.dots[n].finPosition.y )
                            {
                                for ( let j = 0; j < splitStr.length; j++ )
                                {
                                    let splitStrX = splitStr[j];
                                    let finX2 = (p.unchar(splitStrX[0])-64) * gridSize;
                                    let finY2 = (p.unchar(splitStrX[1])-48) * gridSize
                                    for ( let m = 0; m < this.dots.length; m++ )
                                    {
                                        if ( this.dots[n] !== this.dots[m] )
                                        {
                                            if ( finX2 === this.dots[m].finPosition.x && finY2 === this.dots[m].finPosition.y )
                                            {
                                                this.lines.push( new Line( this.dots[n], this.dots[m] ) );
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }

                }
                console.log( this.lines );

            }

            updateSelectedDot( mouse )
            {
                for ( let i = 0; i < this.dots.length; i++ )
                {
                    if ( this.dots[i].active )
                    {
                        this.dots[i].followMouse( mouse );
                    }
                }
            }

            selectDot( mouse )
            {
                let margin = this.dotSize;

                for ( let i = 0; i < this.dots.length; i++ )
                {
                    let d = this.dots[i];
                    if ( mouse.x > d.position.x-margin &&
                         mouse.x < d.position.x+margin &&
                         mouse.y > d.position.y-margin &&
                         mouse.y < d.position.y+margin )
                    {
                        d.select();
                        break;
                    }
                }
            }

            dropDot()
            {
                for ( let i = 0; i < this.dots.length; i++ )
                {
                    this.dots[i].drop();
                }
            }

            update()
            {
                for ( let i = 0; i < this.dots.length; i++ )
                {
                    this.dots[i].borderCollision( this.dotSize );
                }
            }

            puzzleSolved()
            {
                let margin = this.dotSize/2;
                let count = 0;
                for ( let i = 0; i < this.dots.length; i++ )
                {
                    if ( this.dots[i].isInFinalPosition( margin ) )
                    {
                        count++;
                    }
                }

                if ( count === this.dots.length )
                {
                    return true;
                }
                else
                {
                    return false;
                }
            }

            turnGreen()
            {
                this.colour = p.color( 0, 255, 0 );
            }

            turnBlack()
            {
                this.colour = p.color( 0 );
            }

            display()
            {
                p.fill( this.colour );
                p.stroke( this.colour );
                p.strokeWeight( 2 );

                for ( let i = 0; i < this.dots.length; i++ )
                {
                    this.dots[i].display( this.dotSize );
                }

                for ( let i = 0; i < this.lines.length; i++ )
                {
                    this.lines[i].display();
                }
            }
        }

        let Dot = class
        {
            constructor ( initPosition, initFinPosition )
            {
                this.position = initPosition;
                this.finPosition = initFinPosition;
                this.active = false;
            }

            display( dotSize )
            {
                let x = this.position.x;
                let y = this.position.y;

                p.ellipse( x, y, dotSize, dotSize );
            }

            isInFinalPosition( margin )
            {
                let diff = p.dist( this.position.x, this.position.y, this.finPosition.x, this.finPosition.y )
                if ( diff < margin )
                {
                    return true;
                }
                return false;
            }

            followMouse( mouse )
            {
                this.position = mouse;
            }

            borderCollision( dotSize )
            {
                let margin = dotSize/2;
                if ( this.position.x < 0 ) this.position.x = margin;
                if ( this.position.x > p.width ) this.position.x = p.width - margin;
                if ( this.position.y < 0 ) this.position.y = margin;
                if ( this.position.y > p.height ) this.position.y = p.height - margin;
            }

            select()
            {
                this.active = true;
            }

            drop()
            {
                this.active = false;
            }
        }

        let Line = class
        {
            constructor ( dot1, dot2 )
            {
                this.dotA = dot1;
                this.dotB = dot2;
            }

            display()
            {
                let x1 = this.dotA.position.x;
                let y1 = this.dotA.position.y;
                let x2 = this.dotB.position.x;
                let y2 = this.dotB.position.y;
                
                p.line( x1, y1, x2, y2 );
            }
        }
  
    }

    componentDidMount() {
        this.myP5 = new p5( this.Sketch, this.myRef.current );
    }

    render() {
        return (
            <>
                <h2 style={{ textAlign: 'center'}}>
                    {this.authenticationText}
                </h2>
                <div ref={this.myRef}>
                </div>
                <img className="puzzleSolution" src={imgPuzzle1} alt="Possible Solution" />
                <img className="puzzleSolution" src={imgPuzzle2} alt="Possible Solution" />
                <img className="puzzleSolution" src={imgPuzzle3} alt="Possible Solution" />
            </>
        );
    }
}