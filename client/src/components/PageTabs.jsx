import React from 'react';
import styles from './PageTabsStyles.css';

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
			<div className={styles.tab} onClick={this.props.goPrevPage}>
				<button className={styles.arrow}><span>&lsaquo;</span></button>
			</div>
		)
	}
	displayRightArrow(){
		return (
			<div className={styles.tab} onClick={this.props.goNextPage}>
				<button className={styles.arrow}><span>&rsaquo;</span></button>
			</div>
		)
	}

	displayAllTabs () {
	
		if (this.props.pageNum === 1) {
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

export default PageTabs;
