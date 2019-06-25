// community class is controller
import City from './City.js';
// City params are (cityName, cityLat, cityLong, cityPop)



class Community {
	constructor() {
		this.cityArray = [];
		this.cityID = 0;

	};


	findCityIndex = (cityID) => {
		// console.log('city array is ', this.cityArray);
		
		return (this.cityArray.findIndex(item => Number(item.cityID) === Number(cityID)))
	};

	createCity = (cityName, cityLat, cityLong, cityPop=0) => {
		// should add controls on value entered here.
		this.cityID ++;
		const myCity = new City(this.cityID, cityName, cityLat, cityLong, cityPop);
		this.cityArray.push(myCity);

	};

	deleteCity = (cityID) => {

		const index = this.findCityIndex(cityID); 
		// console.log('delete - cityID is ' + cityID, ' index is ' + index);
		this.cityArray.splice(index, 1);

	};


	whichSphere = (cityID) => {
		const cityIndex = this.findCityIndex(cityID);

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
		const filterArray = this.cityArray.filter(item => item.cityLat != null);
		// console.log('filtered array is ', filterArray);
		const mostNorthCity = filterArray.reduce((prev, next) => {
			if (prev.cityLat > next.cityLat) {
				return prev
			} else {
				return next
			};
		});

		return mostNorthCity;
	};

	getSouth = () => {
		const filterArray = this.cityArray.filter(item => item.cityLat != null);
		const mostSouthCity = filterArray.reduce((prev, next) => {
			if (prev.cityLat < next.cityLat) {
				return prev
			} else {
				return next
			};
		});

		return mostSouthCity;
	};

	getTotalPop = () => {
		const totalPop = this.cityArray.reduce((accum, item) => {
			return (accum + item.cityPop)
		}, 0);
		return totalPop;
	};

	
};

export default Community;