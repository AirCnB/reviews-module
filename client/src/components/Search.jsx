import React from 'react';
import PropTypes from 'prop-types';
import styles from '../css/SearchStyles.css';

const Search = (props) => {
  const { searchReviews, handleChange } = props;
  return (
    <div className={styles.searchContainer}>
      <img src="https://s3-us-west-1.amazonaws.com/hrsf99fec/icons/search.svg" alt="searchIcon" className={styles.searchIcon} />
      <input
        type="search"
        className={styles.searchBox}
        placeholder="Search Reviews"
        onChange={handleChange}
        onKeyPress={(event) => {
          if (event.key === 'Enter') {
            searchReviews();
          }
        }}
      />
    </div>
  );
};

Search.propTypes = {
  searchReviews: PropTypes.func,
  handleChange: PropTypes.func,
};

export default Search;
