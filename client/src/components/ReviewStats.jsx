import React from 'react';
import ReactDOM from 'react-dom';
import Stars from './Stars.jsx'
import styles from './ReviewStatsStyles.css';

class ReviewStats extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			accuracy: 5,
			communication: 5,
			cleanliness: 5,
			location: 5,
			checkin: 5,
			value: 5,

		}
		this.calculateRating = this.calculateRating.bind(this);
	}

	calculateRating (reviews, label) {
		let total = 0;
		let count = 0;
		for (var i = 0; i < reviews.length; i++) {
				total += reviews[i].rating[label]
				count += 1;
		return total/count;
		}
	}

	componentDidMount () {
		
		let accuracy = this.calculateRating(this.props.reviews, "accuracy");
		let communication = this.calculateRating(this.props.reviews, "communication");
		let cleanliness = this.calculateRating(this.props.reviews, "cleanliness");
		let location = this.calculateRating(this.props.reviews, "location");
		let checkin = this.calculateRating(this.props.reviews, "checkin");
		let value = this.calculateRating(this.props.reviews, "value");

		this.setState({
			accuracy: accuracy,
			communication: communication,
			cleanliness: cleanliness,
			location: location,
			checkin: checkin,
			value: value,
		});
	}

	render () {
		return (
			<div className={styles.wrapper}>
					<div className={styles.label1}> Accuracy </div>
					<div className={styles.stars1}><Stars rating={this.state.accuracy}/> </div> 
					<div className={styles.label2}> Communication </div>
					<div className={styles.stars2}><Stars rating={this.state.communication}/></div> 
					<div className={styles.label3}> Cleanliness </div>
					<div className={styles.stars3}><Stars rating={this.state.cleanliness}/></div> 
				
					<div className={styles.label4}> Location </div>
					<div className={styles.stars4}><Stars rating={this.state.location}/></div> 
					<div className={styles.label5}> Check-in </div>
					<div className={styles.stars5}><Stars rating={this.state.checkin}/></div> 
					<div className={styles.label6}> Value </div>
					<div className={styles.stars6}> <Stars rating={this.state.value}/></div> 
				
			</div>
		)
	}
}

export default ReviewStats;
