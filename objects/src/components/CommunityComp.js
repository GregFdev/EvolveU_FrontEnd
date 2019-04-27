import React from 'react';
import Community from './Community';
import CityDetailsComp from './CityDetailsComp.js';
import './style_community.css';


class CommunityComp extends React.Component {
	constructor () {
		super();
		this.communityCtrl = new Community();
		this.communityCtrl.createCity('Calgary', 70, -114, 1000);
		this.communityCtrl.createCity('London', 10, -0.1, 50);
		this.communityCtrl.createCity('Sidney', -34, -151, 20000);
		this.communityCtrl.createCity('Edmonton', 55, -151, 20000);
		this.state = {
			displayCityID: 0
		};
	};

	onClickCreateCity = (e) => {
		this.communityCtrl.createCity('temporary');
		// console.log('new city ID is ' + this.communityCtrl.cityID);
		this.setState({
			displayCityID: this.communityCtrl.cityID
		});

		this.reRender();
	};

	reRender = () => {
		this.setState({})
	};

	onClickEditCity = (e) => {
		this.setState({
			displayCityID: Number(e.target.id)
			});
		

	};

	onClickDeleteCity = (e) => {
		console.log('to delete is ' + e.target.id);
		this.communityCtrl.deleteCity(e.target.id);
		if(Number(e.target.id) === Number(this.state.displayCityID)) {
			console.log('same!');
			this.setState({
				displayCityID: 0
			});

		};

		this.reRender();
	};

	whichSphere = (cityID) => {
		console.log('cityID for sphere is ' + cityID);
		return (this.communityCtrl.whichSphere(cityID))
	};


	onSubmitClose = () => {
		this.setState({
			displayCityID: 0
		});
	};

	

	render () {


		const cityList = this.communityCtrl.cityArray.map((city) => {

			return(
				<tr key={city.cityID}>
					<td>{city.cityName}</td>
					<td>{city.cityLat}</td>
					<td>{city.cityLong}</td>
					<td>{city.cityPop}</td>
					<td colSpan='2'>
						<button id={city.cityID} onClick={this.onClickEditCity}>Edit</button>
						<button id={city.cityID} onClick={this.onClickDeleteCity}>Delete</button>
					</td>
				</tr>
			)
		});


		const currCityIndex = this.communityCtrl.findCityIndex(this.state.displayCityID);
		console.log('current ID is ' + this.state.displayCityID + 'curr index is ' + currCityIndex);
		const currCityObj = this.communityCtrl.cityArray[currCityIndex];
		console.log('curr city is '  + currCityObj);
		
		return(

			<div className='commContainer'>

				<div className='topContainer'>
					<h2>General Community Information</h2>
					<h3>Total Population is: {this.communityCtrl.getTotalPop()}</h3>
					<h3>Most Northern City is: {this.communityCtrl.getNorth().cityName}</h3>
					<h3>Most Southern City is: {this.communityCtrl.getSouth().cityName}</h3>
					

				</div>

				<div className='btmContainer'>

					<div className='leftContainer'>

						<h2>City Table</h2>
						

						<table className='cityTable'>
							
							<thead>
								<tr>
									<th>City Name</th>
									<th>Latitude (Deg.)</th>
									<th>Longitude (Deg.)</th>
									<th>Population</th>
									<th>
										<button onClick={this.onClickCreateCity}>New City</button>
									</th>
									
								</tr>
							</thead>
							<tbody>
								{cityList}

							</tbody>
							
						</table>

					</div>

											
					{this.state.displayCityID === 0 ? '': 
                		<CityDetailsComp
                			key={this.state.displayCityID}
                			cityObj={currCityObj}
	               			reRender={this.reRender} 
	               			whichSphere={this.whichSphere}
	               			onSubmitClose={this.onSubmitClose}

            			/>
        			}

					


				</div>

			</div>
		)
	};


};

export default CommunityComp;
