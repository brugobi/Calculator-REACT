import React from 'react';

import { shallow } from 'enzyme';
import ButtonPanel from '../components/ButtonPanel';

const onClick = () => ({ total: null, next: null, operation: null });

describe('<ButtonPanel />', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<ButtonPanel onClick={onClick} />);
  });

  it('<Button />', () => {
    expect(wrapper.find('Button')).toBeTruthy();
  });

  it('class btnPanel', () => {
    expect(wrapper.find('.btnPanel')).toBeTruthy();
  });

  it('class btnWide', () => {
    expect(wrapper.find('.btnWide')).toBeTruthy();
  });

  it('class btn25', () => {
    expect(wrapper.find('.btn25')).toBeTruthy();
  });

  it('class gray', () => {
    expect(wrapper.find('.gray')).toBeTruthy();
  });

  it('class orange', () => {
    expect(wrapper.find('.orange')).toBeTruthy();
  });
});
