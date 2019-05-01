import React from 'react';
import LinkedList from './LinkedList';
import NodeComp from './NodeComp';
import './style_nodes.css';



class LinkedListComp extends React.Component {
	constructor () {
		super();
		
		this.list = new LinkedList();
		this.list.insertNode('FirstNode', 10);
		this.list.insertNode('2ndNode', 5);
		this.current = this.list.current;
	}

	insertNode = (subject, amount) => {
		this.list.insertNode(subject, amount);
		this.current = this.list.node;

	}


	render () {

		return(
			<div className='containerMain'>

				<div className='containerLeft'>
					<div></div>
				</div>

				<div className='containerCentre'>
					<div className='containerControls'>
						
						<button onClick={this.insertNode}>Add Node</button>
						<label>Subject</label>
						<input id='idSubject'></input>
						<label>Amount</label>
						<input id='idAmount'></input>
						<button>Delete Node</button>
						<span>Total is:</span>
						
					</div>
					<div className='nodeDetail'>
						{this.current === null ? '' :
                		<NodeComp current={this.current}/>
        				}
					</div>
				</div>

				<div className='containerRight'>

				</div>

			</div>
		)

	}
}

export default LinkedListComp;