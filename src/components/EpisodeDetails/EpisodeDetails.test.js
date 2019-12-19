import React from 'react';
import { mount } from 'enzyme';
import renderer from 'react-test-renderer';

import { __mock_data__ } from '../../setupTests';
import EpisodeDetails from "./index";
import EpisodeDetailsView from './EpisodeDetails.view';

const mockEpisode = __mock_data__.shows[0].episodes[0];

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useParams: () => ({
    showId: '250',
    episodeId: '100'
  }),
  Link: () => <div />
}));

jest.mock('react-redux', () => ({ useSelector: () => mockEpisode }));

describe('<EpisodeDetails />', () => {
  test('props', () => {
    const component = mount(<EpisodeDetails/>);
    const componentView = component.find(EpisodeDetailsView);
    const viewProps = componentView.props();
    expect(viewProps.id).toBe(mockEpisode.id);
  });

  test('snapshot', () => {
    const tree = renderer.create(<EpisodeDetails/>).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
