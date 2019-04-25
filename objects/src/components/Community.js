// community class is controller
import City from './City.js';
// City params are (cityName, cityLat, cityLong, cityPop)



class Community {
	constructor() {
		this.cityArray = [];

	};


	findCityIndex = (cityName) => {
		return (this.cityArray.findIndex(item => item.cityName === cityName))
	};

	createCity = (cityName, cityLat, cityLong, cityPop) => {
		// should add controls on value entered here.
		const myCity = new City(cityName, cityLat, cityLong, cityPop);
		this.cityArray.push(myCity);

	};

	deleteCity = (cityName) => {
		const index = this.findCityIndex(cityName); 
		this.cityArray.splice(index, 1);

	};


	whichSphere = (cityName) => {
		const cityIndex = this.findCityIndex(cityName);

		if (cityIndex < 0) {
			return 'City Does Not Exist'
		} else if (this.cityArray[cityIndex].cityLat >= 0 && this.cityArray[cityIndex].cityLat <= 90) {
			return 'Northern Hemisphere'
		} else if (this.cityArray[cityIndex].cityLat < 0 && this.cityArray[cityIndex].cityLat >= -90) {
			return 'Southern Hemisphere'
		} else {
			return 'Invalid Latitude Value'

		}
	};

	getNorth = () => {
		const mostNorthCity = this.cityArray.reduce((prev, next) => {
			if (prev.cityLat > next.cityLat) {
				return prev.cityName
			} else {
				return next.cityName
			};
		});

		return mostNorthCity;
	};

	getSouth = () => {
		const mostSouthCity = this.cityArray.reduce((prev, next) => {
			if (prev.cityLat < next.cityLat) {
				return prev.cityName
			} else {
				return next.cityName
			};
		});

		return mostSouthCity;
	};

	getPop = (cityName) => {

	};

	
};

export default Community;