import React from 'react';
import ReactDOM from 'react-dom';
import styles from './ReviewListStyles.css';
import PageTabs from './PageTabs.jsx';

class ReviewList extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			pageNum: 1,
      reviewsPerPage: 7,
      displayedReviews: [],
		};
		
		this.renderSearchHeader = this.renderSearchHeader.bind(this);
    this.renderReviews = this.renderReviews.bind(this);
    this.getReviewsToDisplay = this.getReviewsToDisplay.bind(this);
		this.changePage = this.changePage.bind(this);
		this.goNextPage = this.goNextPage.bind(this);
		this.goPrevPage = this.goPrevPage.bind(this);
		this.renderPageTabs = this.renderPageTabs.bind(this);
  }
  
	renderSearchHeader (numReviewsFound) {
		return (
			<div className={styles.searchheaderwrapper}> 
				<span className={styles.topRow}>
					{numReviewsFound} of our guests have mentioned "<b>{this.props.searchTerm}</b>" 
				</span>
				<span className={styles.goback} onClick={this.props.showAllReviews}>
					Back to all reviews
				</span>
			</div>
		)
	}

	renderReviews (reviews) {
    let displayedReviews = this.getReviewsToDisplay(reviews);
		return (
			<div className={styles.wrapper}> 
			{displayedReviews.map((review, index) => {
				return (
					<div key={index} className={styles.review}>
						<div className={styles.row1}>
							<div className={styles.column1}> <img className={styles.userpic} src="profile.svg"/></div>
							<div className={styles.column2}>
								<div className={styles.username}> {review.user.name} </div>
								<div className={styles.date}> {review.date} </div>
							</div>
							<div className={styles.column3}> <img className={styles.flag} onClick={this.props.renderFlagPopUp} src="flag.gif"/> </div>
						</div>
						<div className={styles.row2}>
							<div className={styles.text}> {review.text} </div>
						</div>
					</div>
				);
			})}	
      {this.renderPageTabs(reviews)}
			</div>
		)
  }

  getReviewsToDisplay (totalReviews) {
    let pageNum = this.state.pageNum;
    let reviewsPerPage = this.state.reviewsPerPage;
    let displayedReviews = [];
    let startIndex = reviewsPerPage * (pageNum - 1);
    let endIndex = (reviewsPerPage * pageNum) - 1;
    for (let i = startIndex; i <= endIndex; i++) {
      if (totalReviews[i] !== undefined) {
        displayedReviews.push(totalReviews[i]);
      }
    }
    return displayedReviews;
  }

  changePage (event) {
		var pageNum = parseInt(event.target.innerHTML);
    this.setState({
      pageNum: pageNum,
    });
	}
	
	goPrevPage () {
		if (this.state.pageNum !== 1) {
			this.setState((prevState) => ({
				pageNum: prevState.pageNum - 1
				}));
		}
	}

	goNextPage (totalReviews) {
		if (this.state.pageNum !== Math.ceil(totalReviews.length/this.state.reviewsPerPage)) {
			this.setState((prevState) => ({
				pageNum: prevState.pageNum + 1
				}));
		}
	}

  renderPageTabs (totalReviews) {
    return (
      <PageTabs
        pageNum={this.state.pageNum}
        reviewsPerPage={this.state.reviewsPerPage}
        changePage={this.changePage}
				totalReviews={totalReviews}
				totalTabs={Math.ceil(totalReviews.length/this.state.reviewsPerPage)}
				goNextPage={this.goNextPage}
				goPrevPage={this.goPrevPage}
      />
    )
  }

	render() {
		if (this.props.showSearch === false) {
			return(
				<div>
          {this.renderReviews(this.props.reviews)}
				</div>
      )
		} else if (this.props.searchResults.length === 0) {
			return(
				<div>				
					{this.renderSearchHeader("None")}
				</div>
			)
		} else {
			return(
				<div>					
          {this.renderSearchHeader(this.props.searchResults.length)}
          {this.renderReviews(this.props.searchResults)}
				</div>
			)
		}
	}
}

export default ReviewList;
