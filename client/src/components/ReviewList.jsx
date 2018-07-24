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
			{this.props.reviews.map((review, index) => {
				return (
					<div key={index} className="review">
					<div className="userpic"> (add picture) </div>
					<div className="username"> {review.user.name} </div>
					<div className="reviewcreated"> {review.date} </div>
					<div className="reviewtext"> {review.text} </div>
					</div>
				);
			})}	
			</div>
		)
	}


}

export default ReviewList;