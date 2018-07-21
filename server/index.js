const express = require('express');
const bodyParser = require('body-parser');
const db = require('../database/index.js');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/aircnb/:id', express.static('public'));

db.addData();

app.listen(3003, () => console.log('Reviews Module listening on port 3003!'));

app.get('/reviews/:id', (req, res) => {
	let id = parseInt(req.params.id);
	db.returnReviews(id, (err, result) =>{
		if(err) {
			console.log(err);
		}
		res.send(result);
	});
});

app.post('/reviews/:id', (req, res) => {
  const houseId = req.param('houseId');
  res.send('Post received');
});
