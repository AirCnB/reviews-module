import React from 'react';
import styles from './SearchStyles.css';

const Search = (props) => (
	
		<div className={styles.searchContainer}>
			<img src="search.svg" className={styles.searchIcon} />
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

export default Search;
