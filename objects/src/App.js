import React, { Component } from 'react';
import mylogo from './logo.svg';
import camera from './components/iconcamera.png';
import phone from './components/iconphone.png';
import bell from './components/iconbell.png';
import circle from './components/iconcircle.png';
import './App.css';




class App extends Component {
    constructor() {
        super();
        this.state = {
          myState: false
        };
    };

    onOver = (e) => {
        e.target.style.backgroundColor = 'red';
        this.setState({
            myState: true
        });
        // console.log(this.state);
    };

    onOut = (e) => {
        e.target.style.backgroundColor = '';
        this.setState({
            myState: false
        });
        // console.log(this.state);
    };

    render() {
        return (
            <div className="App">
                <div>
                    <p>Greg Apps Here</p>
                    
                    <img id='camera' src={camera} onMouseOver={this.onOver} onMouseOut={this.onOut} alt={''}/>
                    <img id='bell' src={bell} onMouseOver={this.onOver} onMouseOut={this.onOut} alt={''} />
                    <img id='phone' src={phone} onMouseOver={this.onOver} onMouseOut={this.onOut} alt={''} />
                    <img id='circle' src={circle} onMouseOver={this.onOver} onMouseOut={this.onOut} alt={''} /> 
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
    }
}

export default App;
