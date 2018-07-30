import React from "react";
import PageTabs from "../client/src/components/PageTabs.jsx";

const changePage = () => {}
const goNextPage = () => {}
const goPrevPage = () => {}

describe('PageTabs', () => {
  const wrapper = shallow(
    <PageTabs
      pageNum={2}
      totalReviews={new Array(98)}
      totalTabs={14}
      changePage={changePage}
      goNextPage={goNextPage}
      goPrevPage={goPrevPage}
    />
  ) 
  
  it('should correctly display the currentTab', () => {
    expect(wrapper.find('.currentTab').text()).toBe('2');
  });

  //expect clicking on right arrow and left arrow to run go next and go prev functions
  
});
