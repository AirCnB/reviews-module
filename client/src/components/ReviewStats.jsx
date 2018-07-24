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
			<div className="reviewstats">
				<div className="leftcolreviews">
					<div> Accuracy <Stars rating={this.state.accuracy}/> </div> 
					<div> Communication <Stars rating={this.state.communication}/></div> 
					<div> Cleanliness <Stars rating={this.state.cleanliness}/></div> 
				</div>
				<div className="rightcolreviews">
					<div> Location <Stars rating={this.state.location}/></div> 
					<div> Check-in <Stars rating={this.state.checkin}/></div> 
					<div> Value <Stars rating={this.state.value}/></div> 
				</div>
			</div>
		)
	}
}

export default ReviewStats;
