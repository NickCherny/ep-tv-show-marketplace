import React from 'react';
import renderer from 'react-test-renderer';

import MainLayout from "./MainLayout";

describe('<MainLayout />', () => {
  test('snapshot', () => {
    const tree = renderer.create(<MainLayout/>).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
