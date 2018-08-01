import React from 'react';
import PropTypes from 'prop-types';
import styles from '../css/ReviewListStyles.css';
import PageTabs from './PageTabs.jsx';

const ReviewList = (props) => {
  const {
    reviews, searchResults, searchTerm, showSearch, pageNum,
    changePage, goPrevPage, goNextPage, showAllReviews, renderFlagPopUp,
  } = props;

  const getReviewsToDisplay = (totalReviews) => {
    const displayedReviews = [];
    const startIndex = 7 * (pageNum - 1);
    const endIndex = (7 * pageNum) - 1;
    for (let i = startIndex; i <= endIndex; i += 1) {
      if (totalReviews[i] !== undefined) {
        displayedReviews.push(totalReviews[i]);
      }
    }
    return displayedReviews;
  };

  const renderPageTabs = totalReviews => (
    <PageTabs
      pageNum={pageNum}
      changePage={changePage}
      totalTabs={Math.ceil(totalReviews.length / 7)}
      goNextPage={goNextPage}
      goPrevPage={goPrevPage}
    />
  );

  const renderReviews = (renderedReviews) => {
    const displayedReviews = getReviewsToDisplay(renderedReviews);
    return (
      <div className={styles.wrapper}>
        {displayedReviews.map((review, index) => (
          <div key={index} className={styles.review}>
            <div className={styles.row1}>
              <div className={styles.column1}>
                <img className={styles.userpic} src="profile.svg" alt="profilePic" />
              </div>
              <div className={styles.column2}>
                <div className={styles.username}>
                  {review.user.name}
                </div>
                <div className={styles.date}>
                  {review.date}
                </div>
              </div>
              <div className={styles.column3}>
                <img className={styles.flag} alt="flagIcon" onClick={renderFlagPopUp} src="flag.gif" />
              </div>
            </div>
            <div className={styles.row2}>
              <div className={styles.text}>
                {review.text}
              </div>
            </div>
          </div>
        ))}
        {renderPageTabs(renderedReviews)}
      </div>
    );
  };

  const renderSearchHeader = numReviewsFound => (
    <div className={styles.searchheaderwrapper}>
      <span className={styles.topRow}>
        {numReviewsFound} of our guests have mentioned "
        <b>
          {searchTerm}
        </b>
        "
      </span>
      <span className={styles.goback} onClick={showAllReviews}>
        Back to all reviews
      </span>
    </div>
  );

  const renderReviewList = () => {
    if (showSearch === false) {
      return (
        <div>
          {renderReviews(reviews)}
        </div>
      );
    } else if (searchResults.length === 0) {
      return (
        <div>
          {renderSearchHeader('None')}
        </div>
      );
    } else {
      return (
        <div>
          {renderSearchHeader(searchResults.length)}
          {renderReviews(searchResults)}
        </div>
      );
    }
  };

  return (
    renderReviewList()
  );
};

ReviewList.defaultProps = {
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
    date: 'June 2017',
  }],
  searchResult: [{
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
    date: 'June 2017',
  }],
};

ReviewList.propTypes = {
  reviews: PropTypes.array,
  searchResults: PropTypes.array,
  searchTerm: PropTypes.string,
  showSearch: PropTypes.bool,
  pageNum: PropTypes.number,
  changePage: PropTypes.func,
  goPrevPage: PropTypes.func,
  goNextPage: PropTypes.func,
  showAllReview: PropTypes.func,
  renderFlagPopUp: PropTypes.func,
};

export default ReviewList;
