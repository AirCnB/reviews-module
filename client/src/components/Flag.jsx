import React from 'react';
import ReactDOM from 'react-dom';
import styles from './FlagStyles.css';

class Flag extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			
		}
	}
	

	render () {
		if (this.props.showPopUp === true) {
			return ( 
        <div className={styles.flag}>
					SHOW FLAG POPUP
				</div>
      )
		} else {
			return (
				<div>
					
				</div>
			)
		}
	}
}

export default Flag;
