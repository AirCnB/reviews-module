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
			totalRating: 5,
			searchResults: [],
			showSearch: false,
      searchTerm: undefined,
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
            <ReviewStats reviews={this.state.reviews}/>
          </div>
          <div className={styles.row3}>
            <ReviewList 
              reviews={this.state.reviews} 
              searchResults={this.state.searchResults} 
              showSearch={this.state.showSearch}
              searchTerm={this.state.searchTerm}
              showAllReviews={this.showAllReviews}
              renderFlagPopUp={this.renderFlagPopUp}
            />
          </div>
        </div>
      </div>
		)
	}
}

ReactDOM.render(<App/>, document.getElementById('reviews'));

