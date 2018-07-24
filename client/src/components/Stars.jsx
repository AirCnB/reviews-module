import React from 'react';
import ReactDOM from 'react-dom';

class Stars extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			
		}
	}

	render () {
		if (this.props.rating !== 6) {
			return (
				<div className="search">
				</div>
			)
		} else if (this.props.rating === 0) {
			return (
				<div className="search">
					<img src="fivestars.png" alt="Star"/>
				</div>
			)
		} else if (this.props.rating === 1) {
			return (
				<div className="search">

					<img src="fivestars.png" alt="Star"/>
				</div>
			)
		}else if (this.props.rating === 2) {
			return (
				<div className="search">
					<img src="fivestars.png" alt="Star"/>
				</div>
			)
		} else if (this.props.rating === 3) {
			return (
				<div className="search">
					<img src="fivestars.png" alt="Star"/>
				</div>
			)
		} else if (this.props.rating === 4) {
			return (
				<div className="search">
					<img src="fivestars.png" alt="Star"/>
				</div>
			)
		} else if (this.props.rating === 5) {
			return (
				<div className="search">
					<img src="fivestars.png" alt="Star"/>
				</div>
			)	
		} else {	
			return (
					<div className="search">
						<img src="fivestars.png" alt="no stars"/>
					</div>
				)
		}
	}
}

export default Stars;