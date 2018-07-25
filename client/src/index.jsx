import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import ReviewList from './components/ReviewList.jsx';
import ReviewStats from './components/ReviewStats.jsx';
import Search from './components/Search.jsx';
import Flag from './components/Flag.jsx';
import PageTabs from './components/PageTabs.jsx';
import Stars from './components/Stars.jsx';
import Header from './components/header.jsx';
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
				    picture: 'url', 
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
			searchResults: [],
			showSearch: false,
			searchTerm: undefined,
		}
		this.searchReviews = this.searchReviews.bind(this);
		this.showAllReviews = this.showAllReviews.bind(this);
		this.handleChange = this.handleChange.bind(this);

	}

	handleChange (event) {
    this.setState({
			searchTerm: event.target.value 
		});
	}

	searchReviews () {
		let self = this;
		let searchTerm = this.state.searchTerm;
		let id = window.location.pathname.slice(10);
		id = parseInt(id.substring(0, id.length));

		axios.post(`/${id}/reviews`, {
			searchTerm: searchTerm,
		})
    .then(function (response) {
		let searchResults = response.data;
    	self.setState({
			showSearch: true,
    		searchResults: searchResults,
    	});
	})
	.catch(function (error) {
	    console.log(error);
		});
	event.preventDefault();
	}

	showAllReviews () {
		this.setState({
			showSearch: false,
			searchResults: [],
		})
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
	  })
	  .catch(function (error) {
	    console.log(error);
	  });
  }

	render() {
		return (
			<div className={styles.container}>
				<div className={styles.row1}>
					<Header 
						reviews={this.state.reviews} 
						totalRating={this.state.totalRating}
						handleChange={this.handleChange}
						searchReviews={this.searchReviews}
					/>
				</div>
				<div className={styles.row2}>
					<ReviewStats reviews={this.state.reviews}/>
				</div>
				<div className={styles.row3}>
					<ReviewList 
						reviews={this.state.reviews} 
						searchResults={this.state.searchResults} 
						showSearch={this.state.showSearch}
						showAllReviews={this.showAllReviews}
						searchTerm={this.state.searchTerm}
					/>
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

