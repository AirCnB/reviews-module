const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/review');
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error'));
db.once('open', () => {
  console.log('Connected to Database');
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

const returnReviews = id => (
  Review.find({ roomId: id })
);

const returnSearch = (id, searchTerm) => (
  Review.find({ roomId: id, text: { $regex: `.*${searchTerm}.*` } })
);

module.exports.Review = Review;
module.exports.db = db;
module.exports.returnReviews = returnReviews;
module.exports.returnSearch = returnSearch;
