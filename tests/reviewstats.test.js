import React from "react";
import ReviewStats from "../client/src/components/ReviewStats.jsx";


const reviews = [];
const accuracy = 3;
const communication = 5;
const cleanliness = 3.4;
const location = 5;
const checkin = 3;
const value = 2;

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
