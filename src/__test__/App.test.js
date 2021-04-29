import React from 'react';

import { shallow } from 'enzyme';
import App from '../components/App';

describe('renders correctly components', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<App />);
  });

  it('render Navbar component', () => {
    expect(wrapper.find('Nav')).toBeTruthy();
  });

  it('render Display component', () => {
    expect(wrapper.find('Display')).toBeTruthy();
  });

  it('render the ButtonPanel component', () => {
    expect(wrapper.find('ButtonPanel')).toBeTruthy();
  });
});
