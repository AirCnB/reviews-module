import React from 'react';
import ReactDOM from 'react-dom';
import styles from './ReviewListStyles.css';

class ReviewList extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			pageNum: 1,
			reviewsPerPage: 12,
		};
		this.renderSearchHeader = this.renderSearchHeader.bind(this);
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
	render() {
		if (this.props.showSearch === false) {
			return(
				<div className={styles.wrapper}> 
				{this.props.reviews.map((review, index) => {
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
				{this.props.searchResults.map((review, index) => {
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
		
	}
}


export default ReviewList;