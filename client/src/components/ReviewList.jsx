import React from 'react';
import ReactDOM from 'react-dom';

class ReviewList extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			
		};
	}
	render() {
		return(
			<div> 
			{this.props.reviews.map((review) => {
				return (
					<div className="review">{review.text}</div>
				);
			})}	
			</div>
		)
	}


}

export default ReviewList;