import React from 'react';
import ReactDOM from 'react-dom';
import styles from './headerStyles.css';
import Stars from './Stars.jsx';
import Search from './Search.jsx';

class Header extends React.Component {
	constructor(props){
		super(props);
		this.state = {

		}
	}
	render () {
		return (
			<div className={styles.wrapper}>
				<div className={styles.total}>
					{this.props.reviews.length} Reviews 
				</div>
				<div className={styles.col2}> 
					<Stars 
						rating={this.props.totalRating}
					/> 
				</div>
				<div className={styles.col3}>
					<Search
						searchReviews={this.props.searchReviews}
						handleChange={this.props.handleChange}
					/>
				</div>
			</div>
		)
	}
}

export default Header;


