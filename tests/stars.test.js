import React from "react";
import Stars from "../client/src/components/Stars.jsx";

describe('Header', () => {
  const wrapper = shallow(
    <Stars
      rating={4.5}
    />
  ) 
  
  it('should correctly display the currentTab', () => {
    //createStars should be called at least once
    //create stars should create an array of length 5
  });
  
});


