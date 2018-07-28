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
        <div>
        <div className={styles.background}>
        </div>
          <div className={styles.modal}>
            <button className={styles.close} onClick={this.props.closeFlag}> X </button>
            <header>
              Do you want to anonymously report this review?
            </header>
            <div className={styles.directions}>
              If so, please choose one of the following reasons. <span className={styles.learnMore}>Learn more</span>
            </div>
            <div>
            <form className={styles.form}>
              <div className={styles.option}> 
                <input className={styles.radio} type="radio" name="gender" value="inappropriate" /> 
                <div className={styles.title}>Inappropriate content </div>
                <span className={styles.text}>This review contains violent, graphic, promotional, or otherwise offensive content.</span>
                
              </div>
              <div className={styles.option}> 
                <input className={styles.radio} type="radio" name="gender" value="dishonest"/> 
                <div className={styles.title}>Dishonest or hateful content</div>
                <span className={styles.text}>This review is purposefully malicious and assaulting.</span>
                
              </div>
              <div className={styles.option}> 
                <input className={styles.radio} type="radio" name="gender" value="fake"/> 
                <div className={styles.title}> Fake content </div>
                <span className={styles.text}>This review contains false information or may be fake.</span>
              </div>
            </form>
            </div>
            <div className={styles.submit}> Submit </div>
          </div>  
        </div>
      )
		} else {
      return (
        <div></div>
      );
    }
	}
}

export default Flag;
