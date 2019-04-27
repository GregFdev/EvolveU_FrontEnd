

class City {
	constructor(cityID, cityName, cityLat, cityLong, cityPop) {
		this.cityID = cityID;
		this.cityName = cityName;
		this.cityLat = cityLat;
		this.cityLong = cityLong;
		this.cityPop = cityPop;
	};

	showCity = () => 
		`${this.cityName} ${this.cityLat} ${this.cityLong} ${this.cityPop}`;

	movedIn = (popAdded) => this.cityPop += Number(popAdded);

	movedOut = (popRemoved) => this.cityPop -= Number(popRemoved);

	howBig = () => {
		let size = this.cityPop;
		switch(true) {
			case size > 100000:
				return 'City';
			case (size <= 100000 && size > 20000):
				return 'Large Town';
			case (size <= 20000 && size > 1000):
				return 'Town';
			case (size <= 1000 && size > 100):
				return 'Village';
			case (size <= 100 && size > 0):
				return 'Hamlet';
			case (size <= 0):
				return 'No People Here!';
			default:
				return 'Unknown';
		};
	};
};


export default City;

