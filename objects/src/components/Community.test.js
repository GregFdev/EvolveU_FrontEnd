import Community from './Community.js';

// City params are (cityName, cityLat, cityLong, cityPop)

test('Community controller test', () => {

	const myCommunity = new Community();

	myCommunity.createCity('test', 70, 100, 10);
	myCommunity.createCity('test2', -10, 100, 100);
	myCommunity.createCity('test3', -34, 100, 1000);
	myCommunity.createCity('test4', -76, 100, 1000);

	expect(myCommunity.cityArray.length).toBe(4);

	const index = myCommunity.findCityIndex('test3');
	expect(index).toBe(2);

	myCommunity.deleteCity('test2');
	expect(myCommunity.cityArray.length).toBe(3);

	const sphere = myCommunity.whichSphere('test3');
	expect(sphere).toBe('Southern Hemisphere');

	const mostNorthCity = myCommunity.getNorth();
	expect(mostNorthCity.cityName).toBe('test');

	const mostSouthCity = myCommunity.getSouth();
	expect(mostSouthCity.cityName).toBe('test4');

	const totalPop = myCommunity.getTotalPop();
	// console.log(myCommunity.cityArray);
	expect(totalPop).toBe(2010);

});
