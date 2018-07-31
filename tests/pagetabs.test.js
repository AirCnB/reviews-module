import React from "react";
import PageTabs from "../client/src/components/PageTabs.jsx";

const mockFn1 = jest.fn();
const mockFn2 = jest.fn();
const mockFn3 = jest.fn();

describe('PageTabs', () => {
  const wrapper = shallow(
    <PageTabs pageNum={2} totalReviews={new Array(98)} totalTabs={14} changePage={mockFn1} goNextPage={mockFn2} goPrevPage={mockFn3}/>
  ) 
  
  it('should render the component properly', () => {
    expect(wrapper.exists()).toEqual(true);
  });

  it('should correctly display the currentTab', () => {
    expect(wrapper.find('.currentTab').text()).toBe('2');
  });

  // it('runs function nextPage on click', () => {
  //   wrapper.find('.tab').simulate('click');
  //   expect(mockFn1).toHaveBeenCalled();
  // });

  it('runs function next Page on click', () => {
    wrapper.find('.next').simulate('click');
    expect(mockFn2).toHaveBeenCalled();
  });

  it('runs function prevPage on click', () => {
    wrapper.find('.prev').simulate('click');
    expect(mockFn3).toHaveBeenCalled();
  });

});
