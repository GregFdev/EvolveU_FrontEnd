import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import MyComponent from './components/myComponent.js';
import EvenComponent from './components/EvenComponent.js';
import OddComponent from './components/OddComponent.js';

// note:  For others that are facing this issue and tried the suggested fixes with no luck, here is another possible fix.

// Ensure that the path you used in your terminal has the correct capitalization. For example if you're using git bash on Windows and your project has the following path:

// C:\MyProjects\project-X

// If you access it using cd /c/myprojects/project-x (note the lack of capital cases) and then run npm start you might face this problem.

// The solution would be to consider the project path case-sensitive and use it as follows:

// cd /C/MyProjects/project-X


class App extends Component {

  constructor() {
    super();
    this.counter = 24;
    this.state = {
      myState: "24"
    };
  };

  onPushMe = () => {
    // console.log("You pushed me", this.counter);
    this.counter++;
    this.setState({
      myState: "now" + this.counter
    });
    console.log("ON PUSH ME --- counter = ", this.counter, "state = ",this.state);
    
  }

  // checkEvenOdd = () => {
  //   // even is true
  //   let num = this.counter;
  //   if(num % 2 === 0) {
  //     return true;
  //   } else {
  //     return false;
  //   }
  // }
 
  render() {
    
    let x
    if(this.counter % 2 === 0) {

      //  cannot assign empty var to component
      x = <EvenComponent />
      console.log("Num is Even", "counter is ", this.counter, "x = ", x)

    } else {
      console.log("this is odd")
    }
    // let x
    // if(this.checkEvenOdd === true) {
    //   console.log("Even")
    //   let x = <EvenComponent />
    //   console.log(x)

    // } else {
    //   console.log("Odd")
    // }

    return (
      <div>
        <header className="App-header"></header>
          <div className="App">
            <h1>Greg is in control of this pplication and my name is G&J {this.counter}{this.state.myState}</h1>
            <button onClick={this.onPushMe}>Push Me</button>

            <MyComponent name="Greg" btnClick={this.onPushMe}/>

            
            {x}

            
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
          </div>
        </div>
    );
  }
}

export default App;
