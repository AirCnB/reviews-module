import React from "react";
import ReviewList from "../client/src/components/ReviewList.jsx";

const reviews = [];
const searchResults = [];
const showSearch = true;
const showAllReviews = () => {};
const searchTerm = "testsearch";
const renderFlagPopUp = () => {};
const changePage = () => {};
const goNextPage = () => {};
const goPrevPage = () => {};
const pageNum = 2;

describe('Header', () => {
  const wrapper = shallow(
    <ReviewList
      reviews={reviews} 
      searchResults={searchResults} 
      showSearch={showSearch}
      showAllReviews={showAllReviews}
      searchTerm={searchTerm}
      renderFlagPopUp={renderFlagPopUp}
      changePage={changePage}
      goNextPage={goNextPage}
      goPrevPage={goPrevPage}
      pageNum={pageNum}
    />
  ) 
  
  it('should correctly display the currentTab', () => {
    // expect(wrapper.find('.total').text()).toBe('98 Reviews');
    //expect showPopUp = false, means nothing renders
    //expect showpop Up true = something rendered
    //expect closing Flag is a function
    
  });
  
});