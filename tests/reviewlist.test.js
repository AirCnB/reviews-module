import React from "react";
import ReviewList from "../client/src/components/ReviewList.jsx";
import PageTabs from "../client/src/components/PageTabs.jsx";

const reviews = [];
const searchResults = [{}, {}, {}];
const showSearch = true;
const showAllReviews = jest.fn();
const searchTerm = "test";
const renderFlagPopUp = jest.fn();
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
  
  it('should render the component properly', () => {
    expect(wrapper.exists()).toEqual(true);
  });

  it('should correctly display the searchTerm', () => {
    expect(wrapper.find('.topRow').text()).toBe('3 of our guests have mentioned "test"');
  });

  it('should render 1 PageTabs component', () => {
    expect(wrapper.find(PageTabs)).toHaveLength(1);
  });

  it('runs function showAllReviews on click of Back to All Reviews', () => {
    wrapper.find('.goback').simulate('click');
    expect(showAllReviews).toHaveBeenCalled();
  });
  
  // it('runs function renderFlagPopUp on click of Flag Icon', () => {
  //   wrapper.find('.flag').simulate('click');
  //   expect(renderFlagPopUp).toHaveBeenCalled();
  // });

});