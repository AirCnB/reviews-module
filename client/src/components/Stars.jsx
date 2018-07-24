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
<<<<<<< HEAD
					<img src="fivestars.png" alt="Star"/>
=======
					<img src="star.gif" alt="Star"/>
>>>>>>> 0efc78e33f2b0ba812dfd7bca6ffcc7861067237
				</div>
			)
		} else if (this.props.rating === 0) {
			return (
				<div className="search">
<<<<<<< HEAD
					<img src="fivestars.png" alt="Star"/>
=======
					<img src="star.gif" alt="Star"/>
>>>>>>> 0efc78e33f2b0ba812dfd7bca6ffcc7861067237
				</div>
			)
		} else if (this.props.rating === 1) {
			return (
				<div className="search">
<<<<<<< HEAD
					<img src="fivestars.png" alt="Star"/>
=======
					<img src="star.gif" alt="Star"/>
>>>>>>> 0efc78e33f2b0ba812dfd7bca6ffcc7861067237
				</div>
			)
		}else if (this.props.rating === 2) {
			return (
				<div className="search">
<<<<<<< HEAD
					<img src="fivestars.png" alt="Star"/>
=======
					<img src="star.gif" alt="Star"/>
>>>>>>> 0efc78e33f2b0ba812dfd7bca6ffcc7861067237
				</div>
			)
		} else if (this.props.rating === 3) {
			return (
				<div className="search">
<<<<<<< HEAD
					<img src="fivestars.png" alt="Star"/>
=======
					<img src="star.gif" alt="Star"/>
>>>>>>> 0efc78e33f2b0ba812dfd7bca6ffcc7861067237
				</div>
			)
		} else if (this.props.rating === 4) {
			return (
				<div className="search">
<<<<<<< HEAD
					<img src="fivestars.png" alt="Star"/>
=======
					<img src="star.gif" alt="Star"/>
>>>>>>> 0efc78e33f2b0ba812dfd7bca6ffcc7861067237
				</div>
			)
		} else if (this.props.rating === 5) {
			return (
				<div className="search">
<<<<<<< HEAD
					<img src="fivestars.png" alt="Star"/>
=======
					<img src="star.gif" alt="Star"/>
>>>>>>> 0efc78e33f2b0ba812dfd7bca6ffcc7861067237
				</div>
			)	
		} else {	
			return (
					<div className="search">
<<<<<<< HEAD
						<img src="fivestars.png" alt="no stars"/>

=======
						<img src="star.gif" alt="no stars"/>
>>>>>>> 0efc78e33f2b0ba812dfd7bca6ffcc7861067237
					</div>
				)
		}
	}
}

export default Stars;