import React from 'react';
import ReactDOM from 'react-dom';
import styles from './ReviewListStyles.css';
import PageTabs from './PageTabs.jsx';
import Flag from './Flag.jsx';

class ReviewList extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			pageNum: 1,
      reviewsPerPage: 7,
      displayedReviews: [],
		};
		this.renderSearchHeader = this.renderSearchHeader.bind(this);
    this.renderReviews = this.renderReviews.bind(this);
    this.changePage = this.changePage.bind(this);
    this.renderPageTabs = this.renderPageTabs.bind(this);
  }
  
	renderSearchHeader (numReviewsFound) {
		return (
			<div className={styles.searchheaderwrapper}> 
				<span className={styles.header}>
					{numReviewsFound} of our guests have mentioned "<b>{this.props.searchTerm}</b>" 
				</span>
				<span className={styles.goback} onClick={() => this.props.showAllReviews()}>
					Back to all reviews
				</span>
			</div>
		)
	}

	renderReviews (reviews) {
		return(
			<div className={styles.wrapper}> 
			{reviews.map((review, index) => {
				return (
					<div key={index} className={styles.review}>
					<div className={styles.userpic}> (add picture) </div>
					<div className={styles.username}> {review.user.name} </div>
					<div className={styles.date}> {review.date} </div>
					<div className={styles.text}> {review.text} </div>
					</div>
				);
			})}	
			</div>
		)
  }

  changeReviewsToDisplay (totalReviews, page num, reviewsperpage) {
    let displayedReviews = [];
    let total = totalReviews.length/length;

    let startIndex = total/reviewsPerPage*(pageNum - 1)
    let endIndex = total/reviewsPerPage *(pageNum)

    for (var i = startIndex; i < endIndex; i++) {
      if (totalReviews[i] !== undefined) {
        displayedReviews.push(totalReviews[i]);
      }
      
    }
    return displayedReviews
  }

  changePage (pageNum) {
    let displayedReviews = changeReviewsToDisplay();

    this.setState({
      pageNum: pageNum,
      displayedReviews: displayedReviews,
    });
  }

  renderPageTabs () {
    return (
      <PageTabs
        pageNum={this.state.pageNum}
        reviewsPerPage={this.state.reviewsPerPage}
        changePage={this.changePage}
      />
    )
  }

	render() {
		if (this.props.showSearch === false) {
			return(
				<div>
          {this.renderReviews(this.props.reviews)}
          {this.renderPageTabs()}
				</div>
      )
		} else if (this.props.searchResults.length === 0) {
			return(
				<div>
					{this.renderSearchHeader("None")}
				</div>
			)
		} else {
			return(
				<div>
          {this.renderSearchHeader(this.props.searchResults.length)}
          {this.renderReviews(this.props.searchResults)}
          {this.renderPageTabs()}
				</div>
			)
		}
	}
}

export default ReviewList;
