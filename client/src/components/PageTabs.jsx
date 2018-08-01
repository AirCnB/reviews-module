import React from 'react';
import PropTypes from 'prop-types';
import styles from './PageTabsStyles.css';

const PageTabs = (props) => {
  const {
    pageNum, changePage, totalTabs, goNextPage, goPrevPage
  } = props;

  const displayTab = (tabNum) => {
    return (
      <div>
        <span onClick={changePage}>
          {tabNum}
        </span>
      </div>
    );
  };

  const displayLeftArrow = () => {
    if (pageNum !== 1) {
      return (
        <div className={styles.tab + " " + styles.prev} onClick={goPrevPage}>
          <button className={styles.arrow}>
            <span>
              &lsaquo;
            </span>
          </button>
        </div>
      );
    }
  };

  const displayFirstTab = () => {
    if (pageNum - 1 >= 1) {
      return (
        <div className={styles.tab}>
          {displayTab(1)}
        </div>
      );
    }
  };

  const displayFirstEllipses = () => {
    if (pageNum - 3 >= 1) {
      return (
        <div className={styles.tab}>
          <div>...</div>
        </div>
      );
    }
  };

  const displayPrevTab = () => {
    if (pageNum - 1 > 1) {
      return (
        <div className={styles.tab}>
          {displayTab(pageNum - 1)}
        </div>
      );
    }
  };

  const displayCurrentTab = () => {
    return (
      <div className={styles.currentTab}>
        {displayTab(pageNum)}
      </div>
    );
  };

  const displayNextTab = () => {
    if (pageNum < totalTabs - 1) {
      return (
        <div className={styles.tab}>
          {displayTab(pageNum + 1)}
        </div>
      );
    }
  };

  const displayLastEllipses = () => {
    if (pageNum < totalTabs - 2) {
      return (
        <div className={styles.tab}>
          <div>...</div>
        </div>
      );
    }
  };

  const displayLastTab = () => {
    if (pageNum !== totalTabs) {
      return (
        <div className={styles.tab}>
          {displayTab(totalTabs)}
        </div>
      );
    }
  };

  const displayRightArrow = () => {
    if (pageNum !== totalTabs) {
      return (
        <div className={styles.tab + " " + styles.next} onClick={goNextPage}>
          <button className={styles.arrow}><span>&rsaquo;</span></button>
      </div>
      );
    }
  };

  return (
    <div>
      <div className={styles.pageTabs}>
        {displayLeftArrow()}
        {displayFirstTab()}
        {displayFirstEllipses()}
        {displayPrevTab()}
        {displayCurrentTab()}
        {displayNextTab()}
        {displayLastEllipses()}
        {displayLastTab()}
        {displayRightArrow()}
      </div>
    </div>
  );
}

PageTabs.defaultProps = {
  pageNum: 1,
  totalTabs: 2,
};

PageTabs.propTypes = {
  pageNum: PropTypes.number,
  totalTabs: PropTypes.number,
  goNextPag: PropTypes.func,
  goPrevPage: PropTypes.func,
  changePage: PropTypes.func,
};

export default PageTabs;
