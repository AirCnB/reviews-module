const express = require('express');
const bodyParser = require('body-parser');
const db = require('../database/index.js');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/listings/:id', express.static('public'));

db.addData();

app.listen(3003, () => console.log('Reviews Module listening on port 3003!'));

app.get('/:id/reviews', (req, res) => {
	let id = parseInt(req.params.id);
	db.returnReviews(id, (err, result) =>{
		if(err) {
			console.log(err);
		}
		res.send(result);
	});
});

app.post('/:id/reviews', (req, res) => {
  let id = parseInt(req.params.id);
  let searchTerm = req.body.searchTerm;

//   db.returnSearch(id, searchTerm, (err, result) => {
// 	if (err) {
// 		console.log(err)
// 	}
// 	res.send(result)
//   });

  res.send("Post Received")

});
