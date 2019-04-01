import React, { Component } from 'react';



class MathComp extends Component {
	constructor (props) {
		super(props)
		this.multiply = this.multiply.bind(this)
	}
	

	multiply = (this.props.a, this.props.b) => {
		return (
			this.props.a * this.props.b
			);
	}
	




	render() {
		console.log(this.multiply);
		// console.log(this.props.name, this.props.state.myState)
		if (this.props.state.myState) {
			return (
			<h1>Hello World from MathComp and {this.props.name}</h1>
			)
		} else {
			return (
			<h1>{this.props.name} is not here</h1>
			)
		}
		
	};
	
};

export default MathComp;