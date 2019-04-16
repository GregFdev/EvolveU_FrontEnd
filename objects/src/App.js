import React, { Component } from 'react';
import calculator from './components/calculator.png';
import camera from './components/iconcamera.png';
import phone from './components/iconphone.png';
import dollar from './components/iconDollar.png';
import circle from './components/iconcircle.png';
import './App.css';
import MathComp from './components/MathComp.js';
// import AccountComp from './components/AccountComp.js';
import ReactComp from './ReactComp.js';
import AccountContrComp from './components/AccountContrComp';

// import Account from './components/Account.js';


class App extends Component {
    constructor() {
        super();
        this.state = {
          myOver: false,
          display: 'accountContr',  // set initial display state
        };
    };

    onClick = (e) => {
        this.setState({
            display: e.target.id
        });
        
    };

    onOver = (e) => {
        // e.target.style.backgroundColor = 'red';
        e.target.style.transform = 'scale(1.3, 1.3)';
        this.setState({
            myOver: true
        });
    };

    onOut = (e) => {
        // e.target.style.backgroundColor = '';
        e.target.style.transform = 'initial';
        this.setState({
            myOver: false
        });
    };
    
    
    render() {
        // console.log('display is ' + this.state.display);
        return (
            <div className="App">
                <div className='containerApp'>
                    <h1>Greg's React Page</h1>
                    <div>
                        <img id='reactComp' src={camera} onClick = {this.onClick} onMouseOver={this.onOver} onMouseOut={this.onOut} alt={''}/>
                        <img id='calculator' src={calculator} onClick = {this.onClick} onMouseOver={this.onOver} onMouseOut={this.onOut} alt={''}/>
                        <img id='accountContr' src={dollar} height='60' onClick = {this.onClick} onMouseOver={this.onOver} onMouseOut={this.onOut} alt={''} />
                        <img id='multiply' src={phone} onMouseOver={this.onOver} onMouseOut={this.onOut} alt={''} />
                        <img id='divide' src={circle} onMouseOver={this.onOver} onMouseOut={this.onOut} alt={''} /> 
                    </div>
                </div>
                <div>
                    {this.state.display === 'reactComp' ? <ReactComp /> : ''}
                    {this.state.display === 'calculator' ? <MathComp /> : ''}
                    {this.state.display === 'accountContr' ? <AccountContrComp /> : ''}
                </div>

                    
                
            </div>
        );
    };
};

export default App;

    