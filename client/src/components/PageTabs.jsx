import React from 'react';
import ReactDOM from 'react-dom';
import styles from './PageTabsStyles.css';

class PageTabs extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			totalTabs: 1,
		}
	}

	calculateTabs () {
		let totalTabs = Math.ceil(this.props.totalReviews/this.props.pageNum);
		this.setState({
			totalTabs: totalTabs,
		})
	}

	componentDidMount () {
		this.calculateTabs();
	}

	render () {
		return (
			<div className="pagetabs">
				Imagine {this.state.totalTabs} tabs are here
			</div>
		)
	}
}

export default PageTabs;
