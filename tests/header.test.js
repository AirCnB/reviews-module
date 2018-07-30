import React from "react";
import Header from "../client/src/components/Header.jsx";

const handleChange = () => {}
const searchReviews = () => {}

describe('Header', () => {
  const wrapper = shallow(
    <Header
      reviews={new Array(98)} 
      totalRating={4.5}
      handleChange={handleChange}
      searchReviews={searchReviews}
    />
  ) 
  
  it('should correctly display the currentTab', () => {
    expect(wrapper.find('.total').text()).toBe('98 Reviews');
  });
  
});
