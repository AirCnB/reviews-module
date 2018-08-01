import React from 'react';
import PropTypes from 'prop-types';
import styles from './SearchStyles.css';

const Search = (props) => {
  const { searchReviews, handleChange } = props;
  return (
    <div className={styles.searchContainer}>
      <img src="search.svg" alt="searchIcon" className={styles.searchIcon} />
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
