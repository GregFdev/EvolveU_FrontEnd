import React from 'react';

class MyComp extends React.Component {

	render() {
		return (
			<div>
				<h1>Hello world from MyComp</h1>
				<button onClick = {this.props.onPushMe}>Push me again</button>
			</div>
		)
	}
}

export default MyComp;
