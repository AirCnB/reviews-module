import React from 'react';
import ReactDOM from 'react-dom';
import Stars from './Stars.jsx'
import styles from './ReviewStatsStyles.css';

const ReviewStats = (props) => {
	return (
		<div className={styles.wrapper}>
				<div className={styles.leftCol}>
					<div className={styles.row1}>
						<div className={styles.label}> Accuracy </div>
						<div className={styles.stars}><Stars rating={props.accuracy}/> </div> 
					</div>
					<div className={styles.row2}>
						<div className={styles.label}> Communication </div>
						<div className={styles.stars}><Stars rating={props.communication}/></div>
					</div>
					<div className={styles.row3}>
						<div className={styles.label}> Cleanliness </div>
						<div className={styles.stars}><Stars rating={props.cleanliness}/></div> 
					</div>
				</div>
				<div className={styles.rightCol}>
					<div className={styles.row1}>
						<div className={styles.label}> Location </div>
						<div className={styles.stars}><Stars rating={props.location}/></div> 
					</div>
					<div className={styles.row2}>
						<div className={styles.label}> Check-in </div>
						<div className={styles.stars}><Stars rating={props.checkin}/></div> 
					</div>
					<div className={styles.row3}>
						<div className={styles.label}> Value </div>
						<div className={styles.stars}> <Stars rating={props.value}/></div> 
					</div>	
				</div>
		</div>
	)
}

export default ReviewStats;
