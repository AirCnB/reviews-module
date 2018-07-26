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
	}

	componentDidMount () {

	}

	displayTab (tabNum) {
		return (
			<div className={styles.tab}>
				<span onClick={this.props.changePage}> {tabNum} </span>
			</div>
		);
	}

	render () {
		console.log(this.props.pageNum);
		console.log(this.props.totalTabs);

		return (
			<div className="pagetabs">
				Imagine {this.props.totalTabs} tabs are here
				{this.displayTab(2)}
				{this.displayTab(this.props.totalTabs)}
			</div>
		)
	}
}

export default PageTabs;
