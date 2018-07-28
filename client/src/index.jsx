import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import ReviewList from './components/ReviewList.jsx';
import ReviewStats from './components/ReviewStats.jsx';
import Header from './components/header.jsx';
import styles from './components/indexStyles.css';
import Flag from './components/Flag.jsx';


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
			accuracy: 5,
			communication: 5,
			cleanliness: 5,
			location: 5,
			checkin: 5,
			value: 5,
			
			totalRating: 5,
			searchResults: [],
			showSearch: false,
      searchTerm: null,
      showPopUp: false,

		}
		this.searchReviews = this.searchReviews.bind(this);
		this.showAllReviews = this.showAllReviews.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.renderFlagPopUp = this.renderFlagPopUp.bind(this);
    this.closeFlag = this.closeFlag.bind(this);
	}

	handleChange (event) {
    this.setState({
			searchTerm: event.target.value 
		});
	}

	searchReviews () {
		let searchTerm = this.state.searchTerm;
		let id = window.location.pathname.slice(10);
		id = parseInt(id.substring(0, id.length));

		axios.post(`/${id}/reviews`, {
			searchTerm: searchTerm,
		})
    .then((response) => {
		let searchResults = response.data;
    	this.setState({
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
  
	roundRating(rating) {
		let string = rating.toString();
		let array = string.split('.');
		let whole = array[0];
		let float = parseInt(array[1]);
		if (float < 25 ) {
		  return +whole;
		} else if (float >= 25 && float < 75) {
		  let output = whole + ".5";
		  return +output;
		} else if (parseInt(whole) === 5) {
        return 5;
    } else {
		  return +whole + 1 ;
		}
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
  	return this.roundRating(Math.floor(total/count*100)/100);
	}
	
	calculateRating (reviews, label) {
		let total = 0;
		for (var i = 0; i < reviews.length; i++) {
			total += reviews[i].rating[label];				
   		 }
		let doubleRating = Math.floor(total/reviews.length*100)/100;
    let roundedRating = this.roundRating(doubleRating);
		return roundedRating;
	}

  componentDidMount() {
  	const self = this;
    let id = window.location.pathname.slice(10);
		id = parseInt(id.substring(0, id.length));

    axios.get(`/${id}/reviews`)
    .then((response) => {
			let totalRating = this.calculateAvgRating(response.data);
			let accuracy = this.calculateRating(response.data, "accuracy");
			let communication = this.calculateRating(response.data, "communication");
			let cleanliness = this.calculateRating(response.data, "cleanliness");
			let location = this.calculateRating(response.data, "location");
			let checkin = this.calculateRating(response.data, "checkin");
			let value = this.calculateRating(response.data, "value");
    	this.setState({
    		reviews: response.data,
				totalRating: totalRating,
				accuracy: accuracy,
				communication: communication, 
				cleanliness: cleanliness,
				location: location,
				checkin: checkin,
				value: value,
    	});
	  })
	  .catch(function (error) {
	    console.log(error);
	  });
  }

	renderFlagPopUp() {
		this.setState({
      showPopUp: true,
    });
  }
  
  closeFlag() {
    this.setState({
      showPopUp: false,
    });
  }

	render() {
		return (
      <div className={styles.app}>
        <Flag
          showPopUp={this.state.showPopUp}
          closeFlag={this.closeFlag}
        />
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
					<ReviewStats 
					reviews={this.state.reviews}
					accuracy={this.state.accuracy}
					communication={this.state.communication}
					cleanliness={this.state.cleanliness}
					location={this.state.location}
					checkin={this.state.checkin}
					value={this.state.value}
					/>
				</div>
				<div className={styles.row3}>
					<ReviewList 
						reviews={this.state.reviews} 
						searchResults={this.state.searchResults} 
						showSearch={this.state.showSearch}
						showAllReviews={this.showAllReviews}
						searchTerm={this.state.searchTerm}
            renderFlagPopUp={this.renderFlagPopUp}
					/>
				</div>
				<div className={styles.row4}>
				</div>
			</div>
			</div>
		)
	}
}

ReactDOM.render(<App/>, document.getElementById('reviews'));

