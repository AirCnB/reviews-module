import React from 'react';
import styles from './SearchStyles.css';

const Search = (props) => {
	return (
		<div className={styles.searchContainer}>
			<i className={styles.searchIcon} ></i>
			<input 
				type="search"
				className={styles.searchBox}
				placeholder="Search Reviews" 
				onChange={props.handleChange} 
				onKeyPress={(event) => {
					if (event.key === 'Enter') {
						props.searchReviews();
					}
				}}
			/>
		</div>
	);
}

export default Search;

// "fa fa-search searchIcon"
