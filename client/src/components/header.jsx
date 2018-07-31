import React from 'react';
import styles from './headerStyles.css';
import Stars from './Stars.jsx';
import Search from './Search.jsx';
import PropTypes from 'prop-types';

const Header = (props) => {
		return (
			<div className={styles.wrapper}>
				<div className={styles.leftcol}>
					<div className={styles.total}>
						{props.reviews.length} Reviews 
					</div>
					<div className={styles.starsRating}> 
						<Stars 
							rating={props.totalRating}
						/> 
					</div>
				</div>
				<div className={styles.rightcol}>
					<div className={styles.search}>
						<Search
							searchReviews={props.searchReviews}
							handleChange={props.handleChange}
						/>
					</div>
				</div>
			</div>
		);
}

Header.defaultProps = {
  reviews: [{}],
	totalRating: 4.5,
};

Header.propTypes = {
  reviews: PropTypes.array,
	totalRating: PropTypes.number,
	handleChange: PropTypes.func,
	searchReviews: PropTypes.func,
};

export default Header;


