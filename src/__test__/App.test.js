import React from 'react';

import { shallow } from 'enzyme';
import App from '../components/App';

describe('<App />', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<App />);
  });

  it('renders three <Nav /> components', () => {
    expect(wrapper.find('Nav')).toBeTruthy();
  });

  it('renders three <Display /> components', () => {
    expect(wrapper.find('Display')).toBeTruthy();
  });

  it('renders three <ButtonPanel /> components', () => {
    expect(wrapper.find('ButtonPanel')).toBeTruthy();
  });
});
