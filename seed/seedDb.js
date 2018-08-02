const fs = require('fs');
const db = require('../reviewsComponent/database/index.js');

const seedDb = () => {
  fs.readFile('./sampleData.txt', (error, data) => {
    if (error) {
      console.log(error);
    }
    const reviewsData = JSON.parse(data);
    db.Review.insertMany(reviewsData, (err) => {
      if (err) {
        console.log(err);
      }
      console.log('Reviews database seeded');
    });
  });
};

seedDb();
