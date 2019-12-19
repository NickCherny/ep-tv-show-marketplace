import uuid from 'uuid';
import get from 'lodash/get';
import dayjs from "dayjs";

import { startRequest, finishRequest } from '../../store/reducers/global';

const apiCallsManager = store => next => async (action) => {
  const isRequest = get(action, 'meta.isRequest', false);

  if (!isRequest) {
    return next(action);
  }

  const payload = get(action, 'payload');
  const request = get(action, 'meta.request', Function.prototype);
  const { resolve, reject } = get(action, 'meta.actions');
  const requestId = uuid();

  try {
    store.dispatch(startRequest({ id: requestId, contractor: action.type, startAt: dayjs().toDate() }));

    const response = await request(payload);
    store.dispatch(resolve(response));
  } catch (e) {
    store.dispatch(reject(e));
  } finally {
    store.dispatch(finishRequest({ id: requestId, contractor: action.type, finishAt: dayjs().toDate() }));
  }
};

export default apiCallsManager;
