import React from 'react';
import renderer from 'react-test-renderer';
import { BrowserRouter } from 'react-router-dom';
import Nav from './Nav';

describe('Nav component', () => {
  it('matches the snapshot', () => {
    const tree = renderer.create(<BrowserRouter><Nav /></BrowserRouter>);
    expect(tree).toMatchSnapshot();
  });
});
