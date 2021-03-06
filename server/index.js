const express = require('express');
const bodyParser = require('body-parser');
const db = require('../database/index.js');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/listings/:id', express.static('public'));

app.listen(3003, () => console.log('Reviews Module listening on port 3003'));

app.get('/:id/reviews', (req, res) => {
  const id = parseInt(req.params.id, 10);
  db.returnReviews(id)
    .then(reviews => res.status(200).send(reviews))
    .catch(err => res.status(500).send(err));
});

app.post('/:id/reviews/query=:searchTerm', (req, res) => {
  const id = parseInt(req.params.id, 10);
  const searchTerm = req.params.searchTerm;
  db.returnSearch(id, searchTerm)
    .then(results => res.status(200).send(results))
    .catch(err => res.status(500).send(err));
});

module.exports = app;
