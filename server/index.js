const express = require('express');
const bodyParser = require('body-parser');
const db = require('../database/index.js');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));
app.use((req, res) => {
  res.status(404).send("Sorry can't find that House");
});

db.addData();

app.listen(3003, () => console.log('Reviews Module listening on port 3003!'));
app.get('/:houseId/reviews', (req, res) => res.send('Hello World!'));
app.post('/:houseId/reviews', (req, res) => {
  const houseId = req.param('houseId');
  res.send('Post received');
});
