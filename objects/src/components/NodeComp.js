import React from 'react';
// import Node from './Node.js';
import './style_nodes.css';


class NodeComp extends React.Component {
	constructor(props) {
		super(props);
		// console.log('props are ', this.props.current.subject);
		// this.state = {
		// 	node: this.props.current
		// }
	}

	render() {


		return(

			<div className='node'>
				<p>Subject is: {this.props.current.subject}</p>
				<p>Amount is: {this.props.current.amount}</p>
			</div>

			)
	}

}


export default NodeComp;