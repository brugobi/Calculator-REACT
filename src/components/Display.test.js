import React from 'react';
import renderer from 'react-test-renderer';
import Display from './Display';

describe('Display Component', () => {
  it('matches snapshot', () => {
    const tree = renderer.create(<Display />);
    expect(tree).toMatchSnapshot();
  });
});
