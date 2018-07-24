import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import ReviewList from './components/ReviewList.jsx';
import ReviewStats from './components/ReviewStats.jsx';
import Search from './components/Search.jsx';
import TotalReviews from './components/TotalReviews.jsx';
import Flag from './components/Flag.jsx';
import PageTabs from './components/PageTabs.jsx';

class App extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			reviews: [{ text: "sample text" }],
		}
	}

  componentDidMount() {
  	const self = this;
    let id = window.location.pathname.slice(10);
    id = parseInt(id.substring(0, id.length));

    axios.get(`/${id}/reviews`)
    .then(function (response) {
    	self.setState({
    		reviews: response.data,
    	});
	  })
	  .catch(function (error) {
	    console.log(error);
	  });
  }

	render() {
		return (
			<div>
				<ReviewList reviews={this.state.reviews}/>
			</div>
		)
	}
}

ReactDOM.render(<App/>, document.getElementById('reviews'));

