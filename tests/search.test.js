import React from "react";
import Search from "../client/src/components/Search.jsx";


const searchReviews = () => {}
const handleChange = () => {}

describe('Header', () => {
  const wrapper = shallow(
    <Search
      searchReviews={searchReviews}
      handleChange={handleChange}
    />
  ) 
  
  it('should correctly display the currentTab', () => {
    // expect(wrapper.find('.total').text()).toBe('98 Reviews');
    //expect showPopUp = false, means nothing renders
    //expect showpop Up true = something rendered
    //expect closing Flag is a function
    
  });
  
});