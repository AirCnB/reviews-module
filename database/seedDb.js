const fs = require('fs');
const connection = require('./index.js');

const seedDb = () => {
  fs.readFile('./database/sampleData.txt', (error, data) => {
    if (error) {
      console.log(error);
    }
    const reviewsData = JSON.parse(data);
    connection.Review.insertMany(reviewsData)
      .then(() => {
        console.log("Sample Data Inserted into Database");
        connection.db.close( () => console.log('connection closed'));
      }).catch(err => console.log(err))
  });
};

seedDb();
