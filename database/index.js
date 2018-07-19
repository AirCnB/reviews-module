var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/review');
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error'));
db.once('open', function()       {
	console.log("Connected to Server!")
});

var reviewSchema = mongoose.Schema({
	roomId: Number,
	user: {
		name: String,
		picture: String, //url
	}
	text: String,
	rating: {
		accuracy: {type: Number, min: 0, max: 5},
		communication: {type: Number, min: 0, max: 5},
		cleanliness: {type: Number, min: 0, max: 5},
		location: {type: Number, min: 0, max: 5},
		check-in: {type: Number, min: 0, max: 5},
		value: {type: Number, min: 0, max: 5}
	}
	date: String
});

var Review = mongoose.model('Review', reviewSchema);
