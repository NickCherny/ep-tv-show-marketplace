import React from 'react';
import { mount } from 'enzyme';
import renderer from "react-test-renderer";

import { __mock_data__ } from '../../setupTests';
import ShowDetails from './index';
import ShowDetailsView from './ShowDetails.view';

const mockItemShow = __mock_data__.shows[0];

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useParams: () => ({
    showId: '250',
  }),
  Link: () => <div />
}));

jest.mock('react-redux', () => ({ useSelector: () => mockItemShow }));

describe('<ShowDetails />', () => {
  test('view props', () => {
    const component = mount(<ShowDetails/>);
    const viewComponent = component.find(ShowDetailsView);
    const props = viewComponent.props();

    expect(props).toBeTruthy();
    expect(props.id).toBe(mockItemShow.id);
    expect(props.name).toBe(mockItemShow.name);
    expect(props.summary).toBe(mockItemShow.summary);
    expect(props.image).toBe(mockItemShow.image);
    expect(typeof props.episodes.length).not.toBe(0);
  });

  test('snapshot', () => {
    const tree = renderer.create(<ShowDetails/>).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
