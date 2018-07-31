import React from 'react';
import styles from './PageTabsStyles.css';
import PropTypes from 'prop-types';

class PageTabs extends React.Component {
	constructor(props){
		super(props);
		this.displayTab = this.displayTab.bind(this);
		this.displayLeftArrow = this.displayLeftArrow.bind(this);
		this.displayRightArrow = this.displayRightArrow.bind(this);
		this.displayAllTabs = this.displayAllTabs.bind(this);
	}

	displayTab (tabNum) {
		if (tabNum === this.props.pageNum) {
			return (
				<div className={styles.currentTab}>
					<span onClick={this.props.changePage}>{tabNum}</span>
				</div>
			);
		}
		return (
			<div className={styles.tab}>
				<span onClick={this.props.changePage}>{tabNum}</span>
			</div>
		);
	}
	displayLeftArrow(){
		return (
			<div className={styles.tab + " " + styles.prev} onClick={this.props.goPrevPage}>
				<button className={styles.arrow}><span>&lsaquo;</span></button>
			</div>
		)
	}
	displayRightArrow(){
		return (
			<div className={styles.tab + " " + styles.next} onClick={this.props.goNextPage}>
				<button className={styles.arrow}><span>&rsaquo;</span></button>
			</div>
		)
	}

	displayAllTabs () {
		if (this.props.totalTabs === 1) {
			return (
				<div> </div>
			)
		} else if (this.props.pageNum === 1) {
			return (
				<div className={styles.pageTabs}>
				{this.displayTab(this.props.pageNum)}
				{this.displayTab(this.props.pageNum + 1)}
				<div className={styles.tab}> ... </div>
				{this.displayTab(this.props.totalTabs)}
				{this.displayRightArrow()}
				</div>
			);
		} else if (this.props.pageNum === 2){
				return (
					<div className={styles.pageTabs}>
					{this.displayLeftArrow()}
					{this.displayTab(1)}
					{this.displayTab(this.props.pageNum)}
					{this.displayTab(this.props.pageNum + 1)}
					<div className={styles.tab}> ... </div>
					{this.displayTab(this.props.totalTabs)}
					{this.displayRightArrow()}
					</div>
				);
		} else if (this.props.pageNum === 3){
			return (
				<div className={styles.pageTabs}>
				{this.displayLeftArrow()}
				{this.displayTab(1)}
				{this.displayTab(2)}
				{this.displayTab(this.props.pageNum)}
				{this.displayTab(this.props.pageNum + 1)}
				<div className={styles.tab}> ... </div>
				{this.displayTab(this.props.totalTabs)}
				{this.displayRightArrow()}
				</div>
			);
		} else if (this.props.pageNum === this.props.totalTabs - 2) {
			return (
				<div className={styles.pageTabs}>
				{this.displayLeftArrow()}
				{this.displayTab(1)}
				<div className={styles.tab}> ... </div>
				{this.displayTab(this.props.pageNum)}
				{this.displayTab(this.props.pageNum + 1)}
				{this.displayTab(this.props.totalTabs)}
				{this.displayRightArrow()}
				</div>
			);
		} else if (this.props.pageNum === this.props.totalTabs - 1) {
				return (
					<div className={styles.pageTabs}>
					{this.displayLeftArrow()}
					{this.displayTab(1)}
					<div className={styles.tab}> ... </div>
					{this.displayTab(this.props.pageNum)}
					{this.displayTab(this.props.totalTabs)}
					{this.displayRightArrow()}
					</div>
				);
		} else if (this.props.pageNum === this.props.totalTabs) {
			return (
				<div className={styles.pageTabs}>
				{this.displayLeftArrow()}
				{this.displayTab(1)}
				<div className={styles.tab}> ... </div>
				{this.displayTab(this.props.pageNum - 1)}
				{this.displayTab(this.props.pageNum)}
				</div>
			);
		} else {
			return (
				<div className={styles.pageTabs}>
				{this.displayLeftArrow()}
				{this.displayTab(1)} 
				<div className={styles.tab}> ... </div>
				{this.displayTab(this.props.pageNum - 1)}
				{this.displayTab(this.props.pageNum)}
				{this.displayTab(this.props.pageNum + 1)}
				<div className={styles.tab}> ... </div>
				{this.displayTab(this.props.totalTabs)}
				{this.displayRightArrow()}
				</div>
			);
		}
	}

	render () {		
		return (
			<div>
				<div>
					{this.displayAllTabs()}
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
