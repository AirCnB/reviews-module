import React from 'react';
import PropTypes from 'prop-types';
import styles from './StarStyles.css';

class Stars extends React.Component {
  constructor(props) {
    super(props);
  }

  createStars(rating) {
    const starRating = [];
    const array = rating.toString().split('.');
    const whole = +array[0];
    for (let i = 1; i <= whole; i+= 1) {
      starRating.push('star_full.svg');
    }
    if (array.length > 1) {
      starRating.push('star_half.svg');
    }
    while (starRating.length < 5) {
      starRating.push('star_empty.svg');
    }
    return starRating;
  }

  render() {
    return (
      <div className={styles.stars}>
        { 
          this.createStars(this.props.rating).map((star, index) => (<img key={index} className={styles.categorystar} src={star} alt="Star" />))
        }
      </div>
    );
  }
}

Stars.defaultProps = {
  rating: 5,
};

Stars.propTypes = {
  rating: PropTypes.number,
};

export default Stars;
