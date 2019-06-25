import React, { Component } from 'react';
import mylogo from './logo.svg';
import './App.css';

class ReactComp extends Component {
	render () {
		return(
			<div>
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

		)
	}
};

export default ReactComp;


					