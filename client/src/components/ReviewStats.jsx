import React from 'react';
import PropTypes from 'prop-types';
import styles from './ReviewStatsStyles.css';
import Stars from './Stars.jsx';

const ReviewStats = (props) => {
  const {
    accuracy, communication, cleanliness, location, checkin, value,
  } = props;

  return (
    <div className={styles.wrapper}>
      <div className={styles.leftCol}>
        <div className={styles.row1}>
          <div className={styles.label}>
            Accuracy
          </div>
          <div className={styles.stars}>
            <Stars rating={accuracy} />
          </div>
        </div>
        <div className={styles.row2}>
          <div className={styles.label}>
            Communication
          </div>
          <div className={styles.stars}>
            <Stars rating={communication} />
          </div>
        </div>
        <div className={styles.row3}>
          <div className={styles.label}>
            Cleanliness
          </div>
          <div className={styles.stars}>
            <Stars rating={cleanliness} />
          </div>
        </div>
      </div>
      <div className={styles.rightCol}>
        <div className={styles.row1}>
          <div className={styles.label}>
            Location
          </div>
          <div className={styles.stars}>
            <Stars rating={location} />
          </div>
        </div>
        <div className={styles.row2}>
          <div className={styles.label}>
            Check-in
          </div>
          <div className={styles.stars}>
            <Stars rating={checkin} />
          </div>
        </div>
        <div className={styles.row3}>
          <div className={styles.label}>
            Value
          </div>
          <div className={styles.stars}>
            <Stars rating={value} />
          </div>
        </div>
      </div>
    </div>
  );
};

ReviewStats.defaultProps = {
  accuracy: 3,
  communication: 2.5,
  cleanliness: 4.5,
  location: 3,
  checkin: 5,
  value: 3,
};

ReviewStats.propTypes = {
  accuracy: PropTypes.number,
  communication: PropTypes.number,
  cleanliness: PropTypes.number,
  location: PropTypes.number,
  checkin: PropTypes.number,
  value: PropTypes.number,
};

export default ReviewStats;
