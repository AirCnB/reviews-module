import React from "react";
import ReviewStats from "../client/src/components/ReviewStats.jsx";


const reviews = () => {}
const accuracy = () => {}
const communication = () => {}
const cleanliness = () => {}
const location = () => {}
const checkin = () => {}
const value = () => {}

describe('ReviewStats', () => {
  const wrapper = shallow(
    <ReviewStats
      reviews={reviews}
      accuracy={accuracy}
      communication={communication}
      cleanliness={cleanliness}
      location={location}
      checkin={checkin}
      value={value}
    />
  ) 
  
  it('should correctly display the currentTab', () => {
    // expect(wrapper.find('.total').text()).toBe('98 Reviews');
  });
  
});
