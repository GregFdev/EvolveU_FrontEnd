import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import MyComponent from './components/MyComponent';
import EvenComp from './components/EvenComponent';
import OddComp from './components/OddComponent';


class App extends Component {
constructor() {
  super();
  this.counter = 21;
  this.state = {myState: 'TBD'};
}

  onPushMe = () => {
    console.log('You pushed me');
    this.counter += 1;
    this.setState({
      myState: 'now: ' + this.counter
    });


    console.log('counter is ', this.counter);
  } // note that state doesn't change right away inside the method but will in the render

  render() {

    let xComp
    if(this.counter % 2 === 0) {
      xComp = <EvenComp />
    } else {
      xComp = <OddComp />
    }

    return (
      <div className="App">
        <header className="App-header">
          <h1>My number is {this.state.myState} </h1>
            <button onClick={this.onPushMe}>
            Push Me 
            </button>
            <MyComponent whatToSay = 'Whatever' onPushMe = {this.onPushMe}/>

            {xComp}

            <img src={logo} className="App-logo" alt="logo" />
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
    );
  }
}

export default App;
