import React from 'react';
import renderer from "react-test-renderer";

import ItemShowCardView from "./ItemShowCard.view";
import { __mock_data__ } from '../../../config/jest/setupTests';

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  Link: () => <div />
}));


const mockShow = __mock_data__.shows[0];
describe('<ItemShowCardView />', () => {

  test('snapshot', () => {
    const tree = renderer.create(<ItemShowCardView { ...mockShow } />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
