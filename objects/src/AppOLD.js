import React, { Component } from 'react';
import mylogo from './logo.svg';
import camera from './components/iconcamera.png';
import phone from './components/iconphone.png';
import bell from './components/iconbell.png';
import circle from './components/iconcircle.png';
import './App.css';
import MathComp from './components/MathComp.js';




class App extends Component {
    constructor() {
        super();
        this.state = {
          myState: false,
          myComp: '',
          myNum1: null,
          myNum2: null
        };
    };

    onClick = (e) => {
        console.log(e.target.id);
        this.pressed = e.target.id;
        this.setState({
            myComp: e.target.id
        });
        
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
    
    handleInputChange = (e) => {
        
        if(e.target.name === 'num1') {
            this.setState({
                myNum1: e.target.value
            })
        } else {
            this.setState({
                myNum2: e.target.value
            })
        }
        console.log('changed field is ', e.target.name);
    }


    render() {
        return (
            <div className="App">
                <div>
                    <p>Greg Apps Here</p>
                    
                    <img id='addition' src={camera} onClick = {this.onClick} onMouseOver={this.onOver} onMouseOut={this.onOut} alt={''}/>
                    <img id='subtraction' src={bell} onClick = {this.onClick} onMouseOver={this.onOver} onMouseOut={this.onOut} alt={''} />
                    <img id='multiply' src={phone} onClick = {this.onClick} onMouseOver={this.onOver} onMouseOut={this.onOut} alt={''} />
                    <img id='divide' src={circle} onClick = {this.onClick} onMouseOver={this.onOver} onMouseOut={this.onOut} alt={''} /> 

                    <input 
                        name='num1' 
                        value={this.state.num1}
                        onChange={this.handleInputChange}
                        >
                    </input>

                    <input 
                        name='num2' 
                        value={this.state.num2}
                        onChange={this.handleInputChange}
                        >
                    </input>

                    <MathComp action={this.pressed}/>

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

    