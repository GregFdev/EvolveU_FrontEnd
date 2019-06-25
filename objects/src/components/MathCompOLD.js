import React, { Component } from 'react';
import {sum, diff, mult, quot} from "./math";

class MathComp extends Component {
	render() {

		let xDec
		if(this.props.action === 'addition') {
			xDec = sum(10,20);
		} else {
			xDec = 'No math for you!'
		};

	// console.log(this.props.action);
		return(
			<div>
				<h1>
				Hello From MathComp
				<br></br>
				{this.props.action}
				</h1>
				{xDec}
			</div>
	)};
};

export default MathComp;

