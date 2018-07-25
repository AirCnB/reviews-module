import React from 'react';
import ReactDOM from 'react-dom';
import styles from './ReviewListStyles.css';

class ReviewList extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			
		};
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
				<div className={styles.noreviewswrapper}> 
					<span className={styles.noreviewsfound}>
						None of our guests have mentioned "<b>{this.props.searchTerm}</b>"
					</span>
					<span className={styles.goback}>
						Back to all reviews
					</span>
				</div>
			)
		} else {
			return(
				<div className={styles.wrapper}> 
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