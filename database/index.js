var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/review');
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error'));
db.once('open', function()       {
	console.log("Connected to Server!")
});

var reviewSchema = mongoose.Schema({
	roomId: Number,
	//fill out schema
});

var Review = mongoose.model('Review', reviewSchema);
