import React from 'react';
import styles from './PageTabsStyles.css';
import PropTypes from 'prop-types';

class PageTabs extends React.Component {
	constructor(props){
		super(props);
		this.displayTab = this.displayTab.bind(this);
		this.displayLeftArrow = this.displayLeftArrow.bind(this);
		this.displayFirstTab = this.displayFirstTab.bind(this);
		this.displayFirstEllipses = this.displayFirstEllipses.bind(this);
		this.displayPrevTab = this.displayPrevTab.bind(this);
		this.displayCurrentTab = this.displayCurrentTab.bind(this);
		this.displayNextTab = this.displayNextTab.bind(this);
		this.displayLastEllipses = this.displayLastEllipses.bind(this);
		this.displayLastTab = this.displayLastTab.bind(this);
		this.displayRightArrow = this.displayRightArrow.bind(this);
	}

	displayTab (tabNum) {
			return (
				<div>
					<span onClick={this.props.changePage}>{tabNum}</span>
				</div>
			);
	}

	displayLeftArrow(){
		if(this.props.pageNum !== 1) {
			return(
				<div className={styles.tab + " " + styles.prev} onClick={this.props.goPrevPage}>
					<button className={styles.arrow}><span>&lsaquo;</span></button>
				</div>
			)
		}
	}

	displayFirstTab() {
    if(this.props.pageNum - 1 >= 1) {
			return (
				<div className={styles.tab}>
					{this.displayTab(1)}
				</div>
				)
		}
	}

	displayFirstEllipses() {
		if(this.props.pageNum - 3 >= 1) {
			return (
				<div className={styles.tab}>
					<div>...</div>
				</div>
				)
		}
	}

	displayPrevTab() {
		if(this.props.pageNum - 1 > 1) {
			return(
				<div className={styles.tab}>
					{this.displayTab(this.props.pageNum - 1)}
				</div>
			)
		}
	}
	
	displayCurrentTab() {
		return (
			<div className={styles.currentTab}>
				{this.displayTab(this.props.pageNum)}
			</div>
		);
	}

	displayNextTab() {
		if(this.props.pageNum < this.props.totalTabs - 1) {
			return (
				<div className={styles.tab}>
					{this.displayTab(this.props.pageNum + 1)}
				</div>
				)
		}
	}

	displayLastEllipses() {
		if(this.props.pageNum < this.props.totalTabs - 2) {
			return (
			<div className={styles.tab}>
				<div>...</div>
			</div>
			)
		}
	}

	displayLastTab() {
		if(this.props.pageNum !== this.props.totalTabs) {
			return (
				<div className={styles.tab}>
					{this.displayTab(this.props.totalTabs)}
				</div>
			);
		}
	}
	
	displayRightArrow() {
		if(this.props.pageNum !== this.props.totalTabs) {
			return(
				<div className={styles.tab + " " + styles.next} onClick={this.props.goNextPage}>
					<button className={styles.arrow}><span>&rsaquo;</span></button>
				</div>
			)
		}
	}

	render () {		
		return (
			<div>
				<div className={styles.pageTabs}>
					{this.displayLeftArrow()}
					{this.displayFirstTab()}
					{this.displayFirstEllipses()}
					{this.displayPrevTab()}
					{this.displayCurrentTab()}
					{this.displayNextTab()}
					{this.displayLastEllipses()}
					{this.displayLastTab()}
					{this.displayRightArrow()}
				</div>
			</div>
		)
	}
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
