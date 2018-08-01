import React from 'react';
import PropTypes from 'prop-types';
import styles from '../css/headerStyles.css';
import Stars from './Stars.jsx';
import Search from './Search.jsx';

const Header = (props) => {
  const { reviews, totalRating, handleChange, searchReviews } = props;
  return (
    <div className={styles.wrapper}>
      <div className={styles.leftcol}>
        <div className={styles.total}>
          {reviews.length} Reviews
        </div>
        <div className={styles.starsRating}>
          <Stars 
            rating={totalRating}
          /> 
        </div>
      </div>
      <div className={styles.rightcol}>
        <div className={styles.search}>
          <Search
            searchReviews={searchReviews}
            handleChange={handleChange}
          />
        </div>
      </div>
    </div>
  );
};

Header.defaultProps = {
  reviews: [{
    roomId: 1,
    user: {
      name: 'name',
      picture: 'url', 
    },
    text: 'text',
    rating: {
      accuracy: 4,
      communication: 5,
      cleanliness: 2,
      location: 5,
      checkin: 1,
      value: 5,
    },
    date: 'here',
  }],
  totalRating: 4.5,
};

Header.propTypes = {
  reviews: PropTypes.array,
  totalRating: PropTypes.number,
  handleChange: PropTypes.func,
  searchReviews: PropTypes.func,
};

export default Header;
