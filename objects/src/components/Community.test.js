import Community from './Community.js';

// City params are (cityName, cityLat, cityLong, cityPop)

test('Community controller test', () => {

	const myCommunity = new Community();

	myCommunity.createCity('test', -80, 100, 10);
	myCommunity.createCity('test2', 90, 100, 10);
	myCommunity.createCity('test3', 70, 100, 10);


	expect(myCommunity.cityArray.length).toBe(3);

	const index = myCommunity.findCityIndex('test3');
	expect(index).toBe(2);

	myCommunity.deleteCity('test2');
	expect(myCommunity.cityArray.length).toBe(2);

	const sphere = myCommunity.whichSphere('test3');
	expect(sphere).toBe('Northern Hemisphere');

	const mostNorthCity = myCommunity.getNorth();
	expect(mostNorthCity).toBe('test3');

	const mostSouthCity = myCommunity.getSouth();
	expect(mostSouthCity).toBe('test');

});
