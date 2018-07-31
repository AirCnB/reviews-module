import React from "react";
import App from "../client/src/components/App.jsx";

import Flag from '../client/src/components/Flag.jsx';
import ReviewStats from '../client/src/components/ReviewStats.jsx';
import ReviewList from '../client/src/components/ReviewList.jsx';

describe('App', () => {
  const wrapper = shallow(<App/>);
  
  it('should render the component properly', () => {
    expect(wrapper.exists()).toEqual(true);
  });

  it('should render 1 <Flag/> components', () => {
    expect(wrapper.find(Flag)).toHaveLength(1);
  });

  it('should render 1 <ReviewStats/> components', () => {
    expect(wrapper.find(ReviewStats)).toHaveLength(1);
  });

  it('should render 1 <ReviewList/> components', () => {
    expect(wrapper.find(ReviewList)).toHaveLength(1);
  });
  
});