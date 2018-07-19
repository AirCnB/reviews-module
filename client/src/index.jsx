import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
	constructor(props){
		super(props);
	}
	render() {
		return (
			<div>
				Reviews App Renders correctly
			</div>
		)
	}
}

ReactDOM.render(<App/>, document.getElementById('reviews'));

