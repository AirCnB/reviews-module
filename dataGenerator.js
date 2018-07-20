const loremHipsum = require('lorem-hipsum'); 
const loremIpsum = require('lorem-ipsum');

const years = ["2018", "2017", "2016",];
const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December",];
const users = ["Duss", "Arthur", "Edward", "Diane", "Shi-Hao", "Rebecca", "Sam"];

const randomDate = function() {
	var yearIndex = Math.floor(Math.random() * (years.length - 1));
	var monthsIndex = Math.floor(Math.random() * (months.length - 1));
	return years[yearIndex] + " " + months[monthsIndex];
}

const createReview = function(roomId, counter) {
	return {
		id: counter,
		roomId: roomId,
		user: {
			name: users[Math.floor(Math.random() * (users.length - 1))],
			picture: "sampleurl",
		},
		text: loremHipsum({
			count: Math.floor(Math.random()*4), 
			paragraphLowerBound: 3,
			paragraphUpperBound: 15,  
			format: 'plain',
		}),
		rating: [
			{accuracy: {type: [Math.floor(Math.random() * 5)], min: 0, max: 5} },
			{communication: {type: [Math.floor(Math.random() * 5)], min: 0, max: 5} },
			{cleanliness: {type: [Math.floor(Math.random() * 5)], min: 0, max: 5} },
			{location: {type: [Math.floor(Math.random() * 5)], min: 0, max: 5} },
			{checkin: {type: [Math.floor(Math.random() * 5)], min: 0, max: 5} },
			{value: {type: [Math.floor(Math.random() * 5)], min: 0, max: 5} }
		],
		date: randomDate(),
	}
}; 

const makeData = function () {
	const reviewsList = [];
	var counter = 0;
	for (var i = 0; i < 100; i++){
		var repeat = Math.floor(Math.random() * 17);
		while (repeat > 0) {
			reviewsList.push(createReview(i, counter));
			counter++;
			repeat--;
		}
	}
	return reviewsList;
}

module.exports.makeData = makeData;

