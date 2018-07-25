import React from 'react';
import ReactDOM from 'react-dom';
import styles from './ReviewListStyles.css';

class ReviewList extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			pageNum: 1,
			reviewsPerPage: 7,
		};
		this.renderSearchHeader = this.renderSearchHeader.bind(this);
		this.renderReviews = this.renderReviews.bind(this);

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

	render() {
		if (this.props.showSearch === false) {
			return(
				<div>
				  {this.renderReviews(this.props.reviews)}
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
				</div>
			)
		}
	}
}


export default ReviewList;