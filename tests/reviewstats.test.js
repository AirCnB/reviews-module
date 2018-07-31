import React from "react";
import ReviewStats from "../client/src/components/ReviewStats.jsx";
import Stars from '../client/src/components/Stars.jsx';

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

  it('should render the component properly', () => {
    expect(wrapper.exists()).toEqual(true);
  });
  
  it('should render 6 <Stars/> components', () => {
    expect(wrapper.find(Stars)).toHaveLength(6);
  });

});
