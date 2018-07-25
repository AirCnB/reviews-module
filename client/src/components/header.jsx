import React from 'react';
import styles from './headerStyles.css';
import Stars from './Stars.jsx';
import Search from './Search.jsx';

const Header = (props) => {
		return (
			<div className={styles.wrapper}>
				<div className={styles.total}>
					{props.reviews.length} Reviews 
				</div>
				<div className={styles.col2}> 
					<Stars 
						rating={props.totalRating}
					/> 
				</div>
				<div className={styles.col3}>
					<Search
						searchReviews={props.searchReviews}
						handleChange={props.handleChange}
					/>
				</div>
			</div>
		);
}

export default Header;


