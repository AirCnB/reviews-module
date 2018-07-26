import React from 'react';
import ReactDOM from 'react-dom';
import styles from './PageTabsStyles.css';

class PageTabs extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			totalTabs: 1,
		};
		this.displayTab = this.displayTab.bind(this);
		this.displayAllTabs = this.displayAllTabs.bind(this);
		
	}

	componentDidMount () {

	}

	displayTab (tabNum) {
		if (tabNum === this.props.pageNum) {
			return (
				<div className={styles.currenttab}>
					<span onClick={this.props.changePage}> {tabNum} </span>
				</div>
			);
		}
		return (
			<div className={styles.tab}>
				<span onClick={this.props.changePage}> {tabNum} </span>
			</div>
		);
	}

	displayAllTabs () {
		if (this.props.pageNum === 1){
			return (
				<div className={styles.pageTabs}>
				{this.displayTab(this.props.pageNum)}
				{this.displayTab(this.props.pageNum + 1)}
				<div className={styles.tab}> ... </div>
				{this.displayTab(this.props.totalTabs)}
				</div>
			);
		} else if (this.props.pageNum === 2){
				return (
					<div className={styles.pageTabs}>
					{this.displayTab(1)}
					{this.displayTab(this.props.pageNum)}
					{this.displayTab(this.props.pageNum + 1)}
					<div className={styles.tab}> ... </div>
					{this.displayTab(this.props.totalTabs)}
					</div>
				);

		} else if (this.props.pageNum === this.props.totalTabs) {
			return (
				<div className={styles.pageTabs}>
				{this.displayTab(1)}
				<div className={styles.tab}> ... </div>
				{this.displayTab(this.props.pageNum - 1)}
				{this.displayTab(this.props.pageNum)}
				</div>
			);
			
		} else {
			return (
				<div className={styles.pageTabs}>
				{this.displayTab(1)} 
				<div className={styles.tab}> ... </div>
				{this.displayTab(this.props.pageNum - 1)}
				{this.displayTab(this.props.pageNum)}
				{this.displayTab(this.props.pageNum + 1)}
				<div className={styles.tab}> ... </div>
				{this.displayTab(this.props.totalTabs)}
				</div>
			);
		}
	}

	render () {
		console.log(this.props.pageNum);
		console.log(this.props.totalTabs);

		return (
			<div>
				Imagine {this.props.totalTabs} tabs are here
				<div>
					{this.displayAllTabs()}
				</div>
			</div>
		)
	}
}

export default PageTabs;
