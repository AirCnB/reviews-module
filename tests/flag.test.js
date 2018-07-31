import React from "react";
import Flag from "../client/src/components/Flag.jsx";

const closeFlag = () => {}

describe('Flag Component', () => {
  
  it('should render the component properly', () => {
    const wrapper = shallow( <Flag showPopUp={true} closeFlag={closeFlag} /> ); 
    expect(wrapper.exists()).toEqual(true);
  });

  it('runs function closeFlag on click', () => {
  	const mockFn = jest.fn();
    const wrapper = shallow(<Flag showPopUp={true} closeFlag={mockFn}/>);
    wrapper.find('.close').simulate('click');
    expect(mockFn).toHaveBeenCalled();
  });

  it('should display Flag when showPopUp is true', () => {
   let wrap = shallow( <Flag showPopUp={true} closeFlag={closeFlag} />);
    expect(wrap.find('.modal')).toHaveLength(1);
  });

  it('should display Flag when showPopUp is false', () => {
    let wrap = shallow( <Flag showPopUp={false} closeFlag={closeFlag} />);
    expect(wrap.find('.modal')).toHaveLength(0);
  });
  
});
