import React from 'react';
import ReactDOM from 'react-dom';

class Stars extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			
		}
	}

	render () {
		return (
			<div className="search">
				{this.props.rating} stars
				
			</div>
		)
	}
}

export default Stars;