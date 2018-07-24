import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import ReviewList from './components/ReviewList.jsx';
import ReviewStats from './components/ReviewStats.jsx';
import Search from './components/Search.jsx';
import Flag from './components/Flag.jsx';
import PageTabs from './components/PageTabs.jsx';
import Stars from './components/Stars.jsx';
import styles from './components/indexStyles.css';

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

	
  calculateAvgRating (reviews) {
  	var total = 0;
  	var count = 0;
  	for (var i = 0; i < reviews.length; i++) {
	  	for (var criteria in reviews[i].rating) {
	  		total += reviews[i].rating[criteria];
	  		count += 1;	
	  	}	
  	}
  	return Math.floor(total/count*100)/100;
  }

  componentDidMount() {
  	const self = this;
    let id = window.location.pathname.slice(10);
    id = parseInt(id.substring(0, id.length));

    axios.get(`/${id}/reviews`)
    .then(function (response) {
    	var totalRating = self.calculateAvgRating(response.data);
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
			<div className={styles.container}>
				<div className={styles.row1}>
					<div className={styles.total}> 
					{this.state.reviews.length} Reviews
					</div>
					<Stars rating={this.state.totalRating}/>
					<Search/>
				</div>
				<div className={styles.row2}>
					<ReviewStats reviews={this.state.reviews}/>
				</div>
				<div className={styles.row3}>
					<ReviewList reviews={this.state.reviews}/>
					<Flag/>
				</div>
				<div className={styles.row4}>
					<PageTabs/>
				</div>
			</div>
		)
	}
}

ReactDOM.render(<App/>, document.getElementById('reviews'));

