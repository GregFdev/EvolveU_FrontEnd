import React from 'react';

class MyComp extends React.Component {

	render(props) {
		
		return (

			<div>
				<h1>Hello world from Cheryl and {this.props.name}</h1>
				<button onClick={this.props.btnClick}>Click to display evn or odd</button>
			</div>


			)
	}
}

export default MyComp;

