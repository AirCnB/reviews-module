const mongoose = require('mongoose');
const dataGenerator = require('./dataGenerator.js');

mongoose.connect('mongodb://localhost/review');
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error'));
db.once('open', () => {
  console.log('Connected to Server!');
});

const reviewSchema = mongoose.Schema({
  roomId: Number,
  user: {
    name: String,
    picture: String, // url
  },
  text: String,
  rating: {
    accuracy: Number,
    communication: Number,
    cleanliness: Number,
    location: Number,
    checkin: Number,
    value: Number,
  },
  date: String,
});

const Review = mongoose.model('Review', reviewSchema);

const returnReviews = (id, callback) => {
  Review.find({ roomId: id }).exec(callback);
};

const returnSearch = (id, searchTerm, callback) => {
  Review.find({ roomId: id, text: { $regex: `.*${searchTerm}.*` } }).exec(callback);
};

module.exports.Review = Review;
module.exports.db = db;
module.exports.returnReviews = returnReviews;
module.exports.returnSearch = returnSearch;
