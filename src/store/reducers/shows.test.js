import configureStore from 'redux-mock-store';
import apiCallsManager from '../../utils/middlewares/fetchMiddleware';
import { initializeState, requestShowsList } from './shows';
import { startRequest, finishRequest } from './global';
import { __mock_data__ } from '../../../config/jest/setupTests';

const mockShows = __mock_data__.shows;
const mockEpisodes = __mock_data__.shows[0].episodes;
const mockStore = configureStore([apiCallsManager]);

jest.mock('../../utils/api', () => ({
  getShows: () => Promise.resolve({ data: mockShows }),
  getEpisodesByShow: () => Promise.resolve({ data: mockEpisodes }),
}));

describe('Entity: shows', () => {
  test('actions', async () => {
    const store = mockStore({});
    const action = requestShowsList();
    expect(action.type).toBe(requestShowsList.FETCH);
    store.dispatch(action);

    await new Promise(res => setTimeout(() => {
      const actions = store.getActions();
      expect(actions[0].type).toBe(startRequest.toString());
      expect(actions[2].type).toBe(finishRequest.toString());
      expect(actions[1].type).toBe(requestShowsList.RECEIVE);
      expect(actions[1].payload).toBeTruthy();
      expect(actions[1].meta).toBeTruthy();
      res()
    }, 10));
  });
});
