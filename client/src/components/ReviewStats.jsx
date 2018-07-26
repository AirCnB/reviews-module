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
	}

	calculateRating (reviews, label) {
		let total = 0;
		for (var i = 0; i < reviews.length; i++) {
			total += reviews[i].rating[label];			
			return total/reviews.length;
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
			accuracy,
			communication,
			cleanliness,
			location,
			checkin,
			value,
		});
	}

	render () {
		return (
			<div className={styles.wrapper}>
					<div className={styles.leftCol}>
						<div className={styles.row1}>
							<div className={styles.label}> Accuracy </div>
							<div className={styles.stars}><Stars rating={this.state.accuracy}/> </div> 
						</div>
						<div className={styles.row2}>
							<div className={styles.label}> Communication </div>
							<div className={styles.stars}><Stars rating={this.state.communication}/></div>
						</div>
						<div className={styles.row3}>
							<div className={styles.label}> Cleanliness </div>
							<div className={styles.stars}><Stars rating={this.state.cleanliness}/></div> 
						</div>
					</div>
					<div className={styles.rightCol}>
						<div className={styles.row1}>
							<div className={styles.label}> Location </div>
							<div className={styles.stars}><Stars rating={this.state.location}/></div> 
						</div>
						<div className={styles.row2}>
							<div className={styles.label}> Check-in </div>
							<div className={styles.stars}><Stars rating={this.state.checkin}/></div> 
						</div>
						<div className={styles.row3}>
							<div className={styles.label}> Value </div>
							<div className={styles.stars}> <Stars rating={this.state.value}/></div> 
						</div>	
					</div>
			</div>
		)
	}
}

export default ReviewStats;
