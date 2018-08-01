import React from 'react';
import PropTypes from 'prop-types';
import styles from './ReviewListStyles.css';
import PageTabs from './PageTabs.jsx';

class ReviewList extends React.Component {
  constructor(props) {
    super(props);
    this.renderReviews = this.renderReviews.bind(this);
    this.getReviewsToDisplay = this.getReviewsToDisplay.bind(this);
    this.renderSearchHeader = this.renderSearchHeader.bind(this);
    this.renderPageTabs = this.renderPageTabs.bind(this);
  }

  getReviewsToDisplay(totalReviews) {
    const pageNum = this.props.pageNum;
    const displayedReviews = [];
    const startIndex = 7 * (pageNum - 1);
    const endIndex = (7 * pageNum) - 1;
    for (let i = startIndex; i <= endIndex; i++) {
      if (totalReviews[i] !== undefined) {
        displayedReviews.push(totalReviews[i]);
      }
    }
    return displayedReviews;
  }

  renderReviews(reviews) {
    const displayedReviews = this.getReviewsToDisplay(reviews);
    return (
      <div className={styles.wrapper}> 
        {displayedReviews.map((review, index) => {
          return (
          <div key={index} className={styles.review}>
            <div className={styles.row1}>
              <div className={styles.column1}>
							  <img className={styles.userpic} src="profile.svg" />
							</div>
              <div className={styles.column2}>
                <div className={styles.username}> {review.user.name} </div>
                <div className={styles.date}> {review.date} </div>
              </div>
              <div className={styles.column3}> <img className={styles.flag} onClick={this.props.renderFlagPopUp} src="flag.gif"/> </div>
            </div>
            <div className={styles.row2}>
              <div className={styles.text}> {review.text} </div>
            </div>
          </div>
          );
        })}	
        {this.renderPageTabs(reviews)}
      </div>
    );
  }

  renderSearchHeader (numReviewsFound) {
    return (
      <div className={styles.searchheaderwrapper}> 
        <span className={styles.topRow}>
          {numReviewsFound} of our guests have mentioned "<b>{this.props.searchTerm}</b>" 
        </span>
      	<span className={styles.goback} onClick={this.props.showAllReviews}>
      		Back to all reviews
      	</span>
      </div>
    )
	}
	
  renderPageTabs (totalReviews) {
    return (
      <PageTabs
        pageNum={this.props.pageNum}
        changePage={this.props.changePage}
        totalTabs={Math.ceil(totalReviews.length/7)}
        goNextPage={this.props.goNextPage}
        goPrevPage={this.props.goPrevPage}
      />
    )
  }

  render() {
    if (this.props.showSearch === false) {
      return (
        <div>
          {this.renderReviews(this.props.reviews)}
        </div>
      );
    } else if (this.props.searchResults.length === 0) {
      return (
        <div>				
        	{this.renderSearchHeader("None")}
        </div>
      );
    } else {
      return (
      	<div>
          {this.renderSearchHeader(this.props.searchResults.length)}
          {this.renderReviews(this.props.searchResults)}
      	</div>
      )
    }
  }
}

ReviewList.defaultProps = {
  reviews: [{
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
    date: 'June 2017',
  }],
  searchResult: [{
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
    date: 'June 2017',
  }],
};

ReviewList.propTypes = {
  reviews: PropTypes.array,
  searchResults: PropTypes.array,
  searchTerm: PropTypes.string,
  showSearch: PropTypes.bool,
  pageNum: PropTypes.number,
  changePage: PropTypes.func,
  goPrevPage: PropTypes.func,
  goNextPage: PropTypes.func,
  showAllReview: PropTypes.func,
  renderFlagPopUp: PropTypes.func,
};

export default ReviewList;
