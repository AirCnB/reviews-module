const loremHipsum = require('lorem-hipsum');
const fs = require('fs');


const years = ['2018', '2017', '2016'];
const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
const users = ['Arthur', 'Diane', 'Duss', 'Edward', 'Fred', 'Marcus', 'Rebecca', 'Sam', 'Shi-hao', 'Toby'];

const randomDate = () => {
  const yearIndex = Math.floor(Math.random() * (years.length - 1));
  const monthsIndex = Math.floor(Math.random() * (months.length - 1));
  return `${years[yearIndex]} ${months[monthsIndex]}`;
};

const randomUser = () => {
  const userIndex = Math.floor(Math.random() * (users.length - 1));
  return users[userIndex];
}

const createReview = (roomId, counter) => {
  let username = randomUser();
  return ({
    id: counter,
    roomId,
    user: {
      name: username,
      picture: `https://s3-us-west-1.amazonaws.com/hrsf99fec/profile_pics/${username}.jpg`
    },
    text: loremHipsum({
      count: Math.floor(Math.random() * 4),
      paragraphLowerBound: 3,
      paragraphUpperBound: 15,
      format: 'plain',
    }),
    rating: {
      accuracy: Math.floor(Math.random() * 3) + 2,
      communication: Math.floor(Math.random()) + 4,
      cleanliness: Math.floor(Math.random()) + 4,
      location: Math.floor(Math.random() * 2) + 3,
      checkin: Math.floor(Math.random()) + 4,
      value: Math.floor(Math.random()) + 4,
    },
    date: randomDate(),
  });
};

const makeData = () => {
  const reviewsList = [];
  let counter = 0;
  for (let i = 0; i < 100; i += 1) {
    let repeat = Math.floor(Math.random() * (150 - 24)) + 24;
    while (repeat > 0) {
      reviewsList.push(createReview(i, counter));
      counter += 1;
      repeat -= 1;
    }
  }
  const JSONdata = JSON.stringify(reviewsList);

  fs.writeFile('./database/sampleData.txt', JSONdata, (error) => {
    if (error) {
      console.log(error);
    }
    console.log('sampleData.txt generated)');
  });
};

makeData();
