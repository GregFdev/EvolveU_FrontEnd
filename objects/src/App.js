import React, { Component } from 'react';
import mylogo from './logo.svg';
import calculator from './components/calculator.png';
import camera from './components/iconcamera.png';
import phone from './components/iconphone.png';
import bell from './components/iconbell.png';
import circle from './components/iconcircle.png';
import './App.css';
import MathComp from './components/MathComp.js';
// import Account from './components/Account.js';


class App extends Component {
    constructor() {
        super();
        this.state = {
          myOver: false,
          display: 'react',  // set initial display state
        };
    };

    onClick = (e) => {
        this.setState({
            display: e.target.id
        });
        
    };

    onOver = (e) => {
        e.target.style.backgroundColor = 'red';
        this.setState({
            myOver: true
        });
    };

    onOut = (e) => {
        e.target.style.backgroundColor = '';
        this.setState({
            myOver: false
        });
    };
    
    
    render() {

        return (
            <div className="App">
                <div>
                    <p>Greg's React Page</p>
                    
                    <img id='react' src={camera} onClick = {this.onClick} onMouseOver={this.onOver} onMouseOut={this.onOut} alt={''}/>
                    <img id='calculator' src={calculator} onClick = {this.onClick} onMouseOver={this.onOver} onMouseOut={this.onOut} alt={''}/>
                    <img id='subtraction' src={bell} onMouseOver={this.onOver} onMouseOut={this.onOut} alt={''} />
                    <img id='multiply' src={phone} onMouseOver={this.onOver} onMouseOut={this.onOut} alt={''} />
                    <img id='divide' src={circle} onMouseOver={this.onOver} onMouseOut={this.onOut} alt={''} /> 

                    <br></br>
                    
                    {this.state.display === 'calculator' ? <MathComp /> : ''}

                    <header className="App-header">
                        <img src={mylogo} className="App-logo" alt="logo" />
                        <p>
                            Edit <code>src/App.js</code> and save to reload.
                        </p> 
                        <a
                            className="App-link"
                            href="https://reactjs.org"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Learn React
                        </a>
                    </header>
                </div>
            </div>
        );
    };
};

export default App;

    