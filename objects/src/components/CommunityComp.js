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
			displayCity: 'placeholder'
		};
	};

	onClickCreateCity = (e) => {
		this.communityCtrl.createCity('placeholder');
		this.setState({
			displayCity: 'placeholder'
		});

		this.reRender();
	};

	reRender = () => {
		this.setState({})
	};



	render () {


		const cityList = this.communityCtrl.cityArray.map((city) => {

			return(
				<tr key={city.cityName}>
					<td>{city.cityName}</td>
					<td>{city.cityLat}</td>
					<td>{city.cityLong}</td>
					<td>{city.cityPop}</td>
					<td colSpan='2'>
						<button>Edit</button>
						<button>Delete</button>
					</td>
				</tr>
			)
		})


		const currCityIndex = this.communityCtrl.findCityIndex(this.state.displayCity);
		console.log('current index is ' + currCityIndex);
		const currCity = this.communityCtrl.cityArray[currCityIndex];
		
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
									<th>Name</th>
									<th>Latitude</th>
									<th>Longitude</th>
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

					<div className='rightContainer'>
						<h2>Edit City Details</h2>
						{this.state.displayCity ? '': 
	                		<CityDetailsComp
	                			key={currCityIndex}
	                			city={currCity}
		               			reRender={this.reRender} 

	            			/>
            			}

					</div>


				</div>

			</div>
		)
	};


};

export default CommunityComp;
