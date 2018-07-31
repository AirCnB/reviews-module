import React from 'react';
import Header from '../client/src/components/Header.jsx';
import Stars from '../client/src/components/Stars.jsx';
import Search from '../client/src/components/Search.jsx';

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

  it('should render 1 <Stars/> components', () => {
    expect(wrapper.find(Stars)).toHaveLength(1);
  });

  it('should render 1 <Search/> components', () => {
    expect(wrapper.find(Search)).toHaveLength(1);
  });
  
});
