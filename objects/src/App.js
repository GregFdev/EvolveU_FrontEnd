import React, { Component } from 'react';
import calculator from './components/calculator.png';
import camera from './components/iconcamera.png';
import iconCity from './components/iconCity.png';
import dollar from './components/iconDollar.png';
import circle from './components/iconcircle.png';
import './App.css';
import MathComp from './components/MathComp.js';
import ReactComp from './ReactComp.js';
import AccountContrComp from './components/AccountContrComp';
import CommunityComp from './components/CommunityComp';



class App extends Component {
    constructor() {
        super();
        this.state = {
          myOver: false,
          display: 'CommunityComp',  // set initial display state
        };
    };

    onClick = (e) => {
        console.log('clicked ' + e.target.id);
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
                        <img id='CommunityComp' src={iconCity} onClick = {this.onClick} onMouseOver={this.onOver} onMouseOut={this.onOut} alt={''} />
                        <img id='divide' src={circle} onMouseOver={this.onOver} onMouseOut={this.onOut} alt={''} /> 
                    </div>
                </div>
                <div>
                    {this.state.display === 'reactComp' ? <ReactComp /> : ''}
                    {this.state.display === 'calculator' ? <MathComp /> : ''}
                    {this.state.display === 'accountContr' ? <AccountContrComp /> : ''}
                    {this.state.display === 'CommunityComp' ? <CommunityComp /> : ''}
                </div>

                    
                
            </div>
        );
    };
};

export default App;

    