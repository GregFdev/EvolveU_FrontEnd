import React, { Component } from 'react';
import {sum, diff, mult, quot} from "./math";
import './style_accounts.css';


class MathComp extends Component {
	constructor() {
		super();
		this.state = {
			num1: '',
			num2: '',
			numTotal: ''			
		}
	};

	handleInputChange = (e) => {
        
        if(e.target.name === 'num1') {
            this.setState({
                num1: e.target.value
            })

        } else {
            this.setState({
                num2: e.target.value
            })
        }

    };

    onClick = (e) => {			// conditional render answer based on button pushed
    	let answer;
    	switch(e.target.id) {
    		case 'btndiv':
    			answer = quot(this.state.num1,this.state.num2);
    			break;

    		case 'btnmult':
    			answer = mult(this.state.num1,this.state.num2);
    			break;

			case 'btnadd':
				answer = sum(Number(this.state.num1),Number(this.state.num2));
				break;

			case 'btnsub':
    			answer = diff(this.state.num1,this.state.num2);
    			break;

			default:
    			break;
    	}

    	this.setState({
    		numTotal: answer
    	})
    };


	render() {

		return(
			<div className='containerCalc'>
				<div className='account'>
					<h1>
					Enter two numbers please: 
					</h1>
					<br></br>

					<input 
						className='inputFields'
                        name='num1' 
                        placeholder='First Number'
                        // value = {this.num1}
                        onChange = {this.handleInputChange}
                        >
                    </input>

                    <input 
                    	className='inputFields'
                    	placeholder='Second Number'
                        name='num2' 
                        // value = {this.num2}
                        onChange = {this.handleInputChange}
                        >
                    </input>

					<br></br><br></br>

					<div className='inputFields' id="opsbtns">
						<button className="buttons" id="btndiv" onClick={this.onClick} >/</button>
						<button className="buttons" id="btnmult" onClick={this.onClick} >*</button>
						<button className="buttons" id="btnsub" onClick={this.onClick} >-</button>
						<button className="buttons" id="btnadd" onClick={this.onClick} >+</button>

						<br></br><br></br>

						<p>The Answer Is:  {this.state.numTotal}
						
							
						
						</p>
						

					</div>
				</div>
			</div>
	)};
};

export default MathComp;

