import React from 'react';
import { mount } from 'enzyme';
import renderer from 'react-test-renderer';

import { __mock_data__ } from '../../../config/jest/setupTests';
import ShowList from './index';
import ShowListView from './ShowList.view';

const mockShows = __mock_data__.shows;

jest.mock('react-redux', () => ({ useSelector: () => mockShows }));

describe('<ShowList />', () => {
  test('view props', () => {
    const component = mount(<ShowList/>);
    const props = component.find(ShowListView).props();
    expect(props).toBeTruthy();
    expect(props.items.length).toBe(2);
    expect(props.items).not.toBe(expect.arrayContaining(mockShows));
    expect(props.items[0]).toHaveProperty('uuid');
    expect(props.dimensions).toBeTruthy();
    expect(props.dimensions).toHaveProperty('height');
    expect(props.dimensions).toHaveProperty('width');
  });

  test('snapshot', () => {
    const tree = renderer.create(<ShowList/>).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
