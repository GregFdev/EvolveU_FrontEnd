import React from 'react';
// import Node from './Node.js';
import './style_nodes.css';


class NodeComp extends React.Component {
	
	render() {


		return(

			<div className='node'>
				<div className='nodeLeft'>
				{this.props.current.previous ? this.props.current.previous.subject : 'Start'}
				</div>
				<div className='nodeCentre'>
				<p>{this.props.current.subject}</p>
				<p>Amount = {this.props.current.amount}</p>
				</div>
				<div className='nodeRight'>
				{this.props.current.next ? this.props.current.next.subject : 'End'}
				</div>
			</div>

			)
	}

}


export default NodeComp;