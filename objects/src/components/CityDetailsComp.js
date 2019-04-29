import React, { Component } from 'react';
// import City from './City.js';
// import Community from './Community.js';
import './style_community.css';

class CityDetailsComp extends Component {
	constructor(props) {
		super(props);
		this.state = {
			
			cityName: this.props.cityObj.cityName,
			cityLat: this.props.cityObj.cityLat,
			cityLong: this.props.cityObj.cityLong
		};

		console.log('city obj is ', this.props.cityObj);
		// this.city = this.props.city;


	}

	onClickMoveIn = (e) => {
		let moveInNum = Number(document.getElementById('inputMoveIn').value);
		this.props.cityObj.movedIn(moveInNum);
		this.props.reRender();

	};

	onClickMoveOut = () => {
		let moveOutNum = Number(document.getElementById('inputMoveOut').value);
		this.props.cityObj.movedOut(moveOutNum);
		this.props.reRender();
	};

	onClickSetLat = () => {
		let newLat = Number(document.getElementById('inputLat').value);
		this.props.cityObj.cityLat = newLat;
		this.props.reRender();
	
	};

	onClickSetLong = () => {
		let newLong = Number(document.getElementById('inputLong').value);
		this.props.cityObj.cityLong = newLong;
		this.props.reRender();
	};

	handleChange = (e) => {
		this.setState({
			[e.target.name]: e.target.value
		});
		e.preventDefault();
	};

	handleSubmit = (e) => {
		console.log('form submitted');
		this.props.cityObj.cityName = this.state.cityName;
		this.props.cityObj.cityLat = this.state.cityLat;
		this.props.cityObj.cityLong = this.state.cityLong;
		this.props.onSubmitClose(); 
		e.preventDefault();
	};

	

	render() {
		return(
			<div className='rightContainer'>
				<h2>City Details (Edit)</h2>
				<form name='details' onSubmit={this.handleSubmit}>
					<table className='detailsTable'>
						<tbody>
							<tr>
								<td>City Name:</td>
								<td>
									<input 
										name='cityName'
										onChange={this.handleChange} 
										value={this.state.cityName}
									/>
								</td>
							</tr>
							<tr>
								<td>City Population:</td>
								<td>{this.props.cityObj.cityPop}</td>
							</tr>
							<tr>
								<td>City Size:</td>
								<td>{this.props.cityObj.howBig()}</td>
							</tr>
							<tr>
								<td>Latitude (Deg.):</td>
								<td>
									<input 
										name='cityLat'
										onChange={this.handleChange} 
										value={this.state.cityLat}
									/>
								</td>
							</tr>
							<tr>
								<td>Longitude (Deg.):</td>
								<td>	
									<input 
										name='cityLong'
										onChange={this.handleChange} 
										value={this.state.cityLong}
									/>
								</td>
							</tr>
							<tr>
								<td>Hemisphere:</td>
								<td>{this.props.whichSphere(this.props.cityObj.cityID)}</td>
							</tr>
							
						</tbody>
					</table>	
					<input type='submit' value='Submit' />
				</form>

				<div className='rightBtm'>

					<div>
						<button onClick={this.onClickMoveIn}>Move People In</button>
						<div>
							<input type='number' id='inputMoveIn' ></input>
						</div>
					</div>
					<div>
						<button onClick={this.onClickMoveOut}>Move People Out</button>
						<div>
							<input type='number' id='inputMoveOut' ></input>
						</div>
					</div>
					

				</div>
			</div>
			



		)
	};


}

export default CityDetailsComp;