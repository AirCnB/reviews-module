import React from 'react';
import ReactDOM from 'react-dom';
import styles from './StarStyles.css';

class Stars extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			
		}
	}


	createStars () {
		//repeat 5 times
		//if rating less i + .25, add empty star
		//if rating less than i + .75 add half star
		//if rating .755-full, add full star
		//for i
	}

	render () {
		if (this.props.rating !== 6) {
			return (
				<div className={styles.stars}>
					<img className={styles.stars} src="fivestars.png" alt="Star"/>
				</div>
			)
		} else if (this.props.rating === 0) {
			return (
				<div className={styles.stars}>
					<img className={styles.stars} src="fivestars.png" alt="Star"/>
				</div>
			)
		} else if (this.props.rating === 1) {
			return (
				<div className={styles.stars}>
					<img className={styles.stars} src="fivestars.png" alt="Star"/>
				</div>
			)
		}else if (this.props.rating === 2) {
			return (
				<div className={styles.stars}>
					<img className={styles.stars} src="fivestars.png" alt="Star"/>
				</div>
			)
		} else if (this.props.rating === 3) {
			return (
				<div className={styles.stars}>
					<img className={styles.stars} src="fivestars.png" alt="Star"/>
				</div>
			)
		} else if (this.props.rating === 4) {
			return (
				<div className={styles.stars}>
					<img className={styles.stars} src="fivestars.png" alt="Star"/>
				</div>
			)
		} else if (this.props.rating === 5) {
			return (
				<div className={styles.stars}>
					<img className={styles.stars} src="fivestars.png" alt="Star"/>
				</div>
			)	
		} else {	
			return (
					<div className={styles.stars}>
						<img className={styles.stars} src="fivestars.png" alt="no stars"/>
					</div>
				)
		}
	}
}

export default Stars;

