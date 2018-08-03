import React from 'react';
import PropTypes from 'prop-types';
import styles from '../css/StarStyles.css';

const Stars = (props) => {
  const { rating } = props;
  const createStars = (numRating) => {
    const starRating = [];
    const array = numRating.toString().split('.');
    const whole = +array[0];
    for (let i = 1; i <= whole; i += 1) {
      starRating.push('https://s3-us-west-1.amazonaws.com/hrsf99fec/icons/star_full.svg');
    }
    if (array.length > 1) {
      starRating.push('https://s3-us-west-1.amazonaws.com/hrsf99fec/icons/star_half.svg');
    }
    while (starRating.length < 5) {
      starRating.push('https://s3-us-west-1.amazonaws.com/hrsf99fec/icons/star_empty.svg');
    }
    return starRating;
  };

  return (
    <div className={styles.stars}>
      {createStars(rating).map((star, index) => (
        <img key={index} className={styles.categorystar} src={star} alt="Star" />
      ))}
    </div>
  );
};

Stars.defaultProps = {
  rating: 5,
};

Stars.propTypes = {
  rating: PropTypes.number,
};

export default Stars;
