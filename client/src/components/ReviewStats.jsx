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

	calculateRating () {

	}

	ComponentDidMount () {
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
