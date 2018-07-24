import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import ReviewList from './components/ReviewList.jsx';
import ReviewStats from './components/ReviewStats.jsx';
import Search from './components/Search.jsx';
import Flag from './components/Flag.jsx';
import PageTabs from './components/PageTabs.jsx';
import Stars from './components/Stars.jsx';

class App extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			reviews: 
				[{
				  roomId: 1,
				  user: {
				    name: 'name',
				    picture: 'url', // url
				  },
				  text: 'text',
				  rating: {
				    accuracy: 4,
				    communication: 5,
				    cleanliness: 2,
				    location: 5,
				    checkin: 1,
				    value: 5,
				  },
				  date: 'here',
			}],
			totalRating: 5,
		}
		// this.getTotalRating = this.getTotalRating.bind(this);
	}

  calculateRating (reviews) {
  	var total;
  	var count = 0;
  	console.log("reviews:", reviews.rating)
  	for (var criteria in reviews.rating) {
  		total += reviews.rating[criteria];
  		count += 1;
  		console.log(reviews.rating)
  	}
  	
  	return total/count;
  }

  componentDidMount() {
  	const self = this;
    let id = window.location.pathname.slice(10);
    id = parseInt(id.substring(0, id.length));

    axios.get(`/${id}/reviews`)
    .then(function (response) {
    	var totalRating = self.calculateRating(response.data);
    	self.setState({
    		reviews: response.data,
    		totalRating: totalRating,
    	});

    	//self. other functions

	  })
	  .catch(function (error) {
	    console.log(error);
	  });
  }

	render() {
		return (
			<div>
				<div className="totalreviews">
					{this.state.reviews.length} Reviews
					<Stars rating={this.state.totalRating}/>
				</div>
				<ReviewList reviews={this.state.reviews}/>
			</div>
		)
	}
}

ReactDOM.render(<App/>, document.getElementById('reviews'));

