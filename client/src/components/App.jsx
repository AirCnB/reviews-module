import React from 'react';
import axios from 'axios';
import ReviewList from './ReviewList.jsx';
import ReviewStats from './ReviewStats.jsx';
import Header from './header.jsx';
import styles from './AppStyles.css';
import Flag from './Flag.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      reviews:
        [{
          roomId: null,
          user: {
            name: null,
            picture: null,
          },
          text: null,
          rating: {
            accuracy: null,
            communication: null,
            cleanliness: null,
            location: null,
            checkin: null,
            value: null,
          },
          date: null,
        }],

      accuracy: 4,
      communication: 5,
      cleanliness: 4,
      location: 5,
      checkin: 5,
      value: 4,

      totalRating: 5,

      pageNum: 1,
      searchResults: [],
      showSearch: false,
      searchTerm: null,
      showPopUp: false,
    };

    this.searchReviews = this.searchReviews.bind(this);
    this.showAllReviews = this.showAllReviews.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.renderFlagPopUp = this.renderFlagPopUp.bind(this);
    this.closeFlag = this.closeFlag.bind(this);
    this.changePage = this.changePage.bind(this);
    this.goNextPage = this.goNextPage.bind(this);
    this.goPrevPage = this.goPrevPage.bind(this);
  }

  componentDidMount() {
    let id = window.location.pathname.slice(10);
    id = parseInt(id.substring(0, id.length), 10)    
    axios.get(`/${id}/reviews`)
      .then((response) => {
        //calculate but it in another method
        const totalRating = this.calculateAvgRating(response.data);
        const accuracy = this.calculateRating(response.data, "accuracy");
        const communication = this.calculateRating(response.data, "communication");
        const cleanliness = this.calculateRating(response.data, "cleanliness");
        const location = this.calculateRating(response.data, "location");
        const checkin = this.calculateRating(response.data, "checkin");
        const value = this.calculateRating(response.data, "value");
        const reviews = response.data;
        this.setState({
          reviews, totalRating, accuracy, communication, cleanliness, location, checkin, value,
        });
      })
      .catch((error) => {
        console.log(error);
      });
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
    }
    return +whole + 1;
    
  }

  calculateAvgRating(reviews) {
    var total = 0;
    var count = 0; 
    for (let i = 0; i < reviews.length; i++) {
      for (let criteria in reviews[i].rating) {
        total += reviews[i].rating[criteria];
        count += 1;	
      }	
    }
    return this.roundRating(Math.floor(total/count*100)/100);
  }

  changePage(event) {
    let pageNum = parseInt(event.target.innerHTML, 10);
    this.setState({
      pageNum,
    });
  }

  goPrevPage() {
    if (this.state.pageNum !== 1) {
      this.setState((prevState) => ({
        pageNum: prevState.pageNum - 1
      }));
    }
  }

  goNextPage(totalReviews) {
    if (this.state.pageNum !== Math.ceil(totalReviews.length/7)) {
      this.setState((prevState) => ({
        pageNum: prevState.pageNum + 1
      }));
    }
  }

  calculateRating(reviews, label) {
    let total = 0;
    for (var i = 0; i < reviews.length; i++) {
      total += reviews[i].rating[label];				
    }
    let doubleRating = Math.floor(total/reviews.length*100)/100;
    let roundedRating = this.roundRating(doubleRating);
    return roundedRating;
  }


  showAllReviews() {
    this.setState({
      showSearch: false,
      searchResults: [],
      pageNum: 1,
    });
  }

  closeFlag() {
    this.setState({
      showPopUp: false,
    });
  }

  handleChange(event) {
    this.setState({
      searchTerm: event.target.value,
    });
  }

  searchReviews() {
    const searchTerm = this.state.searchTerm;
    let id = window.location.pathname.slice(10);
    id = parseInt(id.substring(0, id.length), 10);
    axios.post(`/${id}/reviews`, { searchTerm })
      .then((response) => {
        const searchResults = response.data;
        this.setState({
          showSearch: true,
          searchResults,
          pageNum: 1,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  renderFlagPopUp() {
    this.setState({
      showPopUp: true,
    });
  }

  render() {
    const {
      reviews, accuracy, communication, cleanliness,location,checkin, value,
      totalRating, pageNum, searchResults, showSearch, searchTerm, showPopUp } = this.state;
    return (
      <div className={styles.app}>
        <Flag
          showPopUp={showPopUp}
          closeFlag={this.closeFlag}
        />
        <div className={styles.container}>
          <div className={styles.row1}>
            <Header
              reviews={reviews}
              totalRating={totalRating}
              handleChange={this.handleChange}
              searchReviews={this.searchReviews}
            />
          </div>
          <div className={styles.row2}>
            <ReviewStats
              accuracy={accuracy}
              communication={communication}
              cleanliness={cleanliness}
              location={location}
              checkin={checkin}
              value={value}
            />
          </div>
          <div className={styles.row3}>
            <ReviewList
              reviews={reviews}
              searchResults={searchResults}
              searchTerm={searchTerm}
              showSearch={showSearch}
              pageNum={pageNum}
              changePage={this.changePage}
              goPrevPage={this.goPrevPage}
              goNextPage={this.goNextPage}
              showAllReviews={this.showAllReviews}
              renderFlagPopUp={this.renderFlagPopUp}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
