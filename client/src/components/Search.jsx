import React from 'react';
import ReactDOM from 'react-dom';
import styles from './SearchStyles.css';

class Search extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			placeholder: "Search Reviews",
		}
		this.clearSearch = this.clearSearch.bind(this);
	}
	
	clearSearch () {
		console.log("clicked clearSearch" );
		this.setState({
			placeholder: "Search Reviews",
		});
	}

	render () {
		return (
			<div className={styles.searchContainer}>
				<i className={styles.searchIcon} ></i>
				<input 
					type="search"
					className={styles.searchBox}
					placeholder={this.state.placeholder} 
					onChange={this.props.handleChange} 
					onKeyPress={(event) => {
						if (event.key === 'Enter') {
						  this.props.searchReviews();
						}
					}}
				/>
				<div className={styles.clearSearch} onClick={() => this.clearSearch()}> X </div>
			</div>
		)
	}
}

export default Search;

// "fa fa-search searchIcon"