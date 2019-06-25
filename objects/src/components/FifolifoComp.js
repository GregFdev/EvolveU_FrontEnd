import React from 'react';

class FifolifoComp extends React.Component {
	constructor () {
		super()

		this.array = [1,2];
		this.state = {
			array: this.array
		}
	}


	add = () => {
		let value = document.getElementById('input').value;
		this.array.push(value);
		this.setState({
			array: this.array
		})
	}

	fifo = () => {
		this.array.shift();
		this.setState({
			array: this.array
		})
	}

	lifo = () => {
		this.array.pop();
		this.setState({
			array: this.array
		})
	}

	render() {

		const list = this.array.map(item => <li>{item}</li>)
		console.log('list is ', this.array);

		return(
			<div>
				<h2>FIFO LIFO App</h2>
				<h3>List of Items</h3>
				{list}
				<button id='add' onClick={this.add}>Add Item</button>
				<input id='input' placeholder='New Item Here' />
				<button id='fifo' onClick={this.fifo}>FIFO</button>
				<button id='lifo' onClick={this.lifo}>LIFO</button>
			
			</div>
		)
	}

		
	
}

export default FifolifoComp;