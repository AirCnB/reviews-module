import React from "react";
import Flag from "../client/src/components/Flag.jsx";


const showPopUp = false;
const closeFlag = () => {}

describe('Header', () => {
  const wrapper = shallow(
    <Flag
    showPopUp={showPopUp}
    closeFlag={closeFlag}
    />
  ) 
  
  it('should correctly display the currentTab', () => {
    // expect(wrapper.find('.total').text()).toBe('98 Reviews');
    //expect showPopUp = false, means nothing renders
    //expect showpop Up true = something rendered
    //expect closing Flag is a function
    
  });

  it('should display Flag when showPopUp is true', () => {
   let wrap = shallow( <Flag showPopUp={true} closeFlag={closeFlag} />);
    expect(wrap.find('.flag').hasClass('#showsFlag')).toEqual(true);
  });

  it('should display Flag when showPopUp is false', () => {
    let wrap = shallow( <Flag showPopUp={false} closeFlag={closeFlag} />);
    expect(wrap.find('.flag').hasClass('#showsFlag')).toEqual(false);
  });
  
});
