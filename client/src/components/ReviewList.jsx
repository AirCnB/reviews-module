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
		return(
			<div> 
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
	}
}

export default ReviewList;