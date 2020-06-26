import React, { Component } from 'react'
import RangeSlider from 'react-bootstrap-range-slider';
import 'react-bootstrap-range-slider/dist/react-bootstrap-range-slider.css';
import $ from 'jquery';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { render } from '@testing-library/react';

    const cfgHealthcare = 0;
    const cfgResearch = 1;
    const cfgConsumer = 2;
    const cfgEmission = 3;
    const cfgPolitics = 4;
    const cfgConflict = 5;
    const cfgEconomy = 6;

    const simEconomy = 0;
    const simEnvironment = 1;
    const simProgress = 2;
    const simPolitics = 3;

    const messageArray = [
        "Anarchists rise in the east",      // 0
        "Last bank bankrupt",               // 1
        "Euro removed",                     // 2
        "US Dollar worthless",              // 3
        "$$$ investment failed",            // 4
        "Economy to Placeholder",           // 5
        "Index returns to stability",       // 6
        "Crypto surge",                     // 7
        "Poverty sinking",                  // 8
        "UBI everywhere",                   // 9
        
        "Earth crust gone",                 // 10
        "Planet has become uninhabitable",  // 11
        "The sun is a deadly lazer",        // 12
        "Mass extinction is continuing",    // 13
        "Environment still on decline",     // 14
        "Environment to Placeholder",       // 15
        "Earth on a green path",            // 16
        "MacDonalds boycotted",             // 17
        "Chinese factories closing",        // 18
        "Earth livable for another 200 years", // 19

        "Homo sapiens devolving",           // 20
        "Return to retro technology",       // 21
        "GBA returns as tech hit",          // 22
        "VR companies disbanded",           // 23
        "Technology stagnates",             // 24
        "Progress to Placeholder",          // 25
        "AR makes another leap",            // 26
        "Brain chips invented",             // 27
        "Full dive VR commercial ready",    // 28
        "Humans might live in a simulation",// 29

        "Mad Max new leader of society",    // 30
        "Anarchists burn down white house", // 31
        "The reds speak of Utopia",         // 32
        "Solidarity unions return",         // 33
        "A female potus is elected",        // 34
        "Politics to Placeholder",          // 35
        "European Union stronger than ever",// 36
        "UN can't resolve aggression",      // 37
        "Pan-Asian China has been established", // 38
        "The fascist-anarchist party rules the world" // 39
    ];

    const headlineArray = [
        "Money might become worthless in some nations in the following years. The global economy is suffering due to people’s choices. Unemployment rates are going up and more and more countries are going back to trading goods.",
        "The economy is doing great. People have more to spend overall and unemployment rates are going down.",
        "Scientists have reported a record low on daily carbon emissions. This is probably due to the increased demand of government action against pollution and the government's compliance to these demands.",
        "Winter isn’t coming. Scientists have reported a record high on daily carbon emissions. This is due to the increase in short flights and one-time-use products. The decrease in funding for environmental research should be considered as a possible factor as well.",
        "We are now noticing the first consequences of our choices in hospitals and research centers. Universities state that they do not receive enough funding to continue their programs and healthcare development is slowing down drastically.",
        "Free healthcare for all. Due to increased budgets for healthcare and research free healthcare has become an option for many nations around the world.",
        "Political extremism and economic turmoil is sweeping through nations and tensions are about to escalate around the world.",
        "Peace in our time. For the first time in the history of the world, world peace is an option. With the demilitarization of all the countries in the world and increasing economic prosperity another conflict seems unlikely."
    ];

export default class ControlPanel extends Component {

    constructor(props)
    {
        super(props);
        this.state = {
            configuration: [ 0, 0, 0, 0, 0, 0, 0 ],
            simulationValues: [0, 0, 0, 0],
            logText: [ "SimulationLog" ]
        };
    }

    updateConfiguration = ( index, value ) =>
    {
        let passConfig = [];
        for ( let i = 0; i < this.state.configuration.length; i++ )
        {
            passConfig[i] = this.state.configuration[i];
        }
        passConfig[index] = value;
        this.setState( {
            configuration: passConfig
        } );
        this.updateSimulationValues();
        this.updateLogText( "" );
    }

    updateSimulationValues = () =>
    {
        let passValue = [];
        let cfg = this.state.configuration;

        passValue[ simEconomy ] = 0.15*cfg[cfgConsumer] + 0.2*cfg[cfgPolitics] + 0.15*cfg[cfgConflict] + 0.4*cfg[cfgEconomy];
        passValue[ simEnvironment ] = 0.1*cfg[cfgResearch] + 0.2*cfg[cfgConsumer] + 0.45*cfg[cfgEmission] + 0.25*cfg[cfgPolitics];
        passValue[ simProgress ] = 0.35*cfg[cfgHealthcare] + 0.35*cfg[cfgResearch] + 0.15*cfg[cfgPolitics] + 0.15*cfg[cfgEconomy];
        passValue[ simPolitics ] = 0.5*cfg[cfgPolitics] + 0.25*cfg[cfgConflict] + 0.25*cfg[cfgEconomy];

        this.setState({
            simulationValues: passValue
        });
    }

    updateLogText( input )
    {
        let finalStr = input;

        if ( input === "" )
        {
            let strLength = Math.random() * 15 + 4;
            let str = [ strLength+1 ];
            str[0] = '<br/>';
            for ( let i = 0; i < strLength; i++ )
            {
                let charIndex = Math.random() * 150;
                str[i+1] = String.fromCharCode(charIndex);
            }

            finalStr = str.join('');
        }

        let passLog = this.state.logText;
        passLog[ passLog.length ] = finalStr;

        this.setState( {
            logText: passLog
        });

        let logBox = document.getElementById('logBox');
        logBox.scrollTop = logBox.scrollHeight;
    }

    getRandomMessage()
    {
        let catIndex = Math.round( Math.random() * 4 );

        let catValue = this.state.simulationValues[ catIndex ];

        let messageIndex = Math.round( catIndex*10 + ( catValue + 50 )/10 + ( Math.random() * 4 - 2 ) );

        let retStr = messageArray[ messageIndex ];

        if ( messageIndex === 5 ) retStr = "Economy to " + catValue;
        if ( messageIndex === 15 ) retStr = "Environment to " + catValue;
        if ( messageIndex === 25 ) retStr = "Progress to " + catValue;
        if ( messageIndex === 35 ) retStr = "Politics to " + catValue;

        return ( "<br/>" + retStr );
    }

    ending( simValues ) {
        console.log( simValues );
        $("#cpBody").fadeOut(6000, function(){

            let headlineIndex = 0;

            let highestSV = 0;
            for ( let i = 0; i < simValues.length; i++ )
            {
                if ( Math.abs(simValues[i]) >= Math.abs(simValues[highestSV]) ) highestSV = i;
            }

            console.log( simValues[highestSV] );

            headlineIndex = highestSV * 2;
            if ( simValues[ highestSV ] > 0 ) headlineIndex++;

            toast(
                "BREAKING NEWS: " + headlineArray[ headlineIndex ],
                {
                    position: "top-right",
                    type: "warning",
                    autoClose: false,
                    hideProgressBar: false,
                    closeOnClick: false,
                    pauseOnHover: false,
                    draggable: false,
                    progress: undefined,
                }
            );
            render(
                <div><ToastContainer /></div>
            );
            
        });
    }

    componentDidMount()
    {
        this.logTicker = setInterval(
            () => this.updateLogText( this.getRandomMessage() ), 2000
        );

        //$("#applyButton").click( { simValue: this.state.simulationValues }, ending );
            
    }

    componentWillUnmount()
    {
        clearInterval( this.logTicker );
    }

    render()
    {
        return (
            <div>
                <div id='cpBody' className='controlPanelBG'>
                    <h1 id="controlPanelHeader">Project Odin</h1>
                    <div id="panelBox">
                        <div id="sliderBox">

                        <div id="leftSliderBox">
                            <div className="sliderUnit">
                                <h3 className="sliderHeader">Healthcare Funding</h3>
                                <div className="sliderLabel">$</div>
                                <div className="slider">
                                    <RangeSlider
                                        value={ this.state.configuration[ cfgHealthcare ] }
                                        onChange={changeEvent => this.updateConfiguration( cfgHealthcare, changeEvent.target.value)}
                                        tooltip='off'
                                        variant='dark'
                                        size='lg'
                                        min={-50}
                                        max={50}
                                    />
                                </div>
                                <div className="sliderLabel leftAlign">$$</div>
                            </div>
                            <div className="sliderUnit">
                                <h3 className="sliderHeader">Research Funding</h3>
                                <div className="sliderLabel">$</div>
                                <div className="slider">
                                    <RangeSlider
                                        value={ this.state.configuration[ cfgResearch ] }
                                        onChange={changeEvent => this.updateConfiguration( cfgResearch, changeEvent.target.value )}
                                        tooltip='off'
                                        variant='dark'
                                        size='lg'
                                        min={-50}
                                        max={50}
                                    />
                                </div>
                                <div className="sliderLabel leftAlign">$$</div>
                            </div>  
                            <div className="sliderUnit">
                                <h3 className="sliderHeader">Political Opinion</h3>
                                <div className="sliderLabel">Left</div>
                                <div className="slider">
                                    <RangeSlider
                                        value={ this.state.configuration[ cfgPolitics ] }
                                        onChange={changeEvent => this.updateConfiguration( cfgPolitics, changeEvent.target.value)}
                                        tooltip='off'
                                        variant='dark'
                                        size='lg'
                                        min={-50}
                                        max={50}
                                    />
                                </div>
                                <div className="sliderLabel leftAlign">Right</div>
                            </div>
                            <div className="sliderUnit">
                                <h3 className="sliderHeader">Global Turbulence</h3>
                                <div className="sliderLabel">Conflict</div>
                                <div className="slider">
                                    <RangeSlider
                                        value={ this.state.configuration[ cfgConflict ] }
                                        onChange={changeEvent => this.updateConfiguration( cfgConflict, changeEvent.target.value)}
                                        tooltip='off'
                                        variant='dark'
                                        size='lg'
                                        min={-50}
                                        max={50}
                                    />
                                </div>
                                <div className="sliderLabel leftAlign">Peace</div>
                            </div>
                        </div>
                        <div id="rightSliderBox">
                            <div className="sliderUnit">
                                <h3 className="sliderHeader">Consumer Tendency</h3>
                                <div className="sliderLabel">Consuming</div>
                                <div className="slider">
                                    <RangeSlider
                                        value={ this.state.configuration[ cfgConsumer ] }
                                        onChange={changeEvent => this.updateConfiguration( cfgConsumer, changeEvent.target.value )}
                                        tooltip='off'
                                        variant='dark'
                                        size='lg'
                                        min={-50}
                                        max={50}
                                    />
                                </div>
                                <div className="sliderLabel leftAlign">Sustaining</div>
                            </div>
                            <div className="sliderUnit">
                                <h3 className="sliderHeader">Emissions</h3>
                                <div className="sliderLabel">Low</div>
                                <div className="slider">
                                    <RangeSlider
                                        value={ this.state.configuration[ cfgEmission ] }
                                        onChange={changeEvent => this.updateConfiguration( cfgEmission, changeEvent.target.value )}
                                        tooltip='off'
                                        variant='dark'
                                        size='lg'
                                        min={-50}
                                        max={50}
                                    />
                                </div>
                                <div className="sliderLabel leftAlign">High</div>
                            </div>
                            <div className="sliderUnit">
                                <h3 className="sliderHeader">Economic Prosperity</h3>
                                <div className="sliderLabel">Recession</div>
                                <div className="slider">
                                    <RangeSlider
                                        value={ this.state.configuration[ cfgEconomy ] }
                                        onChange={changeEvent => this.updateConfiguration( cfgEconomy, changeEvent.target.value)}
                                        tooltip='off'
                                        variant='dark'
                                        size='lg'
                                        min={-50}
                                        max={50}
                                    />
                                </div>
                                <div className="sliderLabel leftAlign">Prosperity</div>
                            </div>
                        </div>

                        </div>
                        <div id="logBox" dangerouslySetInnerHTML={{__html: this.state.logText.join('') }} >
                        </div>
                    </div>
                    <button id="applyButton" onClick={ () => this.ending( this.state.simulationValues ) }>apply all</button>
                </div>
            </div>
        );
    }
}
