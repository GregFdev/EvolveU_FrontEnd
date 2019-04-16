import React, { Component } from 'react';
import calculator from './components/calculator.png';
import camera from './components/iconcamera.png';
import phone from './components/iconphone.png';
import dollar from './components/iconDollar.png';
import circle from './components/iconcircle.png';
import './App.css';
import MathComp from './components/MathComp.js';
import AccountComp from './components/AccountComp.js';
import ReactComp from './ReactComp.js';
// import Account from './components/Account.js';


class App extends Component {
    constructor() {
        super();
        this.state = {
          myOver: false,
          display: 'account',  // set initial display state
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
        console.log('display is ' + this.state.display);
        return (
            <div className="App">
                <div>
                    <p>Greg's React Page</p>
                    <img id='reactComp' src={camera} onClick = {this.onClick} onMouseOver={this.onOver} onMouseOut={this.onOut} alt={''}/>
                    <img id='calculator' src={calculator} onClick = {this.onClick} onMouseOver={this.onOver} onMouseOut={this.onOut} alt={''}/>
                    <img id='account' src={dollar} onClick = {this.onClick} onMouseOver={this.onOver} onMouseOut={this.onOut} alt={''} />
                    <img id='multiply' src={phone} onMouseOver={this.onOver} onMouseOut={this.onOut} alt={''} />
                    <img id='divide' src={circle} onMouseOver={this.onOver} onMouseOut={this.onOut} alt={''} /> 

                    <br></br>
                    
                    {this.state.display === 'reactComp' ? <ReactComp /> : ''}
                    {this.state.display === 'calculator' ? <MathComp /> : ''}
                    {this.state.display === 'account' ? <AccountComp /> : ''}


                    
                </div>
            </div>
        );
    };
};

export default App;

    