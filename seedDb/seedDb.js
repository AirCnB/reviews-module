const fs = require('fs');
const db = require('./index.js');

const seedDb = () => {
  fs.readFile('./seedDb/sampleData.txt', (error, data) => {
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
