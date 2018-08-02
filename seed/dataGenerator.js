const loremHipsum = require('lorem-hipsum');
const fs = require('fs');

const years = ['2018', '2017', '2016'];
const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
const users = ['Duss', 'Arthur', 'Edward', 'Diane', 'Shi-Hao', 'Rebecca', 'Sam'];

const randomDate = () => {
  const yearIndex = Math.floor(Math.random() * (years.length - 1));
  const monthsIndex = Math.floor(Math.random() * (months.length - 1));
  return `${years[yearIndex]} ${months[monthsIndex]}`;
};

const createReview = (roomId, counter) => ({
  id: counter,
  roomId,
  user: {
    name: users[Math.floor(Math.random() * (users.length - 1))],
    picture: 'sampleurl',
  },
  text: loremHipsum({
    count: Math.floor(Math.random() * 4),
    paragraphLowerBound: 3,
    paragraphUpperBound: 15,
    format: 'plain',
  }),
  rating: {
    accuracy: Math.floor(Math.random() * 5),
    communication: Math.floor(Math.random() * 5),
    cleanliness: Math.floor(Math.random() * 5),
    location: Math.floor(Math.random() * 5),
    checkin: Math.floor(Math.random() * 5),
    value: Math.floor(Math.random() * 5),
  },
  date: randomDate(),
});

const makeData = () => {
  const reviewsList = [];
  let counter = 0;
  for (let i = 0; i < 100; i += 1) {
    let repeat = Math.floor(Math.random() * (300 - 24)) + 24;
    while (repeat > 0) {
      reviewsList.push(createReview(i, counter));
      counter += 1;
      repeat -= 1;
    }
  }
  const JSONdata = JSON.stringify(reviewsList);

  fs.writeFile('./sampleData.txt', JSONdata, (error) => {
    if (error) {
      console.log(error);
    }
    console.log('sampleData.txt generated)');
  });
};

makeData();
