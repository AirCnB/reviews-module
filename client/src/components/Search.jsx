import React from 'react';
import ReactDOM from 'react-dom';

class Search extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			
		}
	}

	render () {
		return (
			<div className="search">
				<input 
					placeholder="Search Reviews" 
					onChange={this.props.handleChange} 
					onKeyPress={(event) => {
						if (event.key === 'Enter') {
						  this.props.searchReviews();
						}
					}}
				/>
			</div>
		)
	}
}

export default Search;
