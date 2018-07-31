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

  it('should render the component properly', () => {
    expect(wrapper.exists()).toEqual(true);
  });
  
});