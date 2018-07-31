import React from "react";
import Stars from "../client/src/components/Stars.jsx";

describe('Header', () => {
  const wrapper = shallow(
    <Stars
      rating={4.5}
    />
  ) 
  
  it('should render the component properly', () => {
    expect(wrapper.exists()).toEqual(true);
  });
  
});


