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
					<div className={styles.background}>
          </div>
          <div className={styles.modal}>
            <button onClick={this.props.closeFlag}> X </button>
            <header>
              Do you want to anonymously report this review?
            </header>
            <div className={styles.directions}>
              If so, please choose one of the following reasons. <span className={styles.learnMore}>Learn more</span>
            </div>
            <div>
            <form>
              <input type="radio" name="gender" value="male" checked/> 
                Inappropriate content
                This review contains violent, graphic, promotional, or otherwise offensive content.
                <br/>
              <input type="radio" name="gender" value="female"/> 
                Dishonest or hateful content
                This review is purposefully malicious and assaulting.
                <br/>
              <input type="radio" name="gender" value="other"/> 
              Fake content
              This review contains false information or may be fake.
            </form>
            </div>
            <button> Submit </button>
          </div>
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
