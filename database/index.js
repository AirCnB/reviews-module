const mongoose = require('mongoose');
const dataGenerator = require('../dataGenerator.js');

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
const data = dataGenerator.makeData();

const addData = function () {
  Review.insertMany(data, (err) => {
    if (err) {
      console.log(err);
    }
  });
};
 
const returnReviews = function(id, callback) {
  Review.find({roomId: id}).exec(callback);
};

const returnSearch = function(id, searchTerm, callback) {
  Review.find({roomId: id, "text": /Tote/}).exec(callback);
};

module.exports.addData = addData;
module.exports.returnReviews = returnReviews;
module.exports.returnSearch = returnSearch;
