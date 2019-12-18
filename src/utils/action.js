import flowRight from 'lodash/flowRight';
import dayjs from "dayjs";

const constValue = v => v;

const prepareTransformer = maps => Array.isArray(maps) ? flowRight(maps) : maps;

/**
 * @description
 * @param {Object[]} options
 * @param {string} options.prefix
 * @param {Function} options.request
 * @param {?Function} options.mapPayload,
 * @param {?Function} options.mapMeta
 * @return {Function}
 */
export const createFetchAction = ({ prefix, request, mapPayload = constValue, mapMeta }) => {
  const FETCH = `${prefix}_FETCH`;
  const RECEIVE = `${prefix}_RECEIVE`;
  const ERROR = `${prefix}_ERROR`;

  mapPayload = prepareTransformer(mapPayload);
  mapMeta = mapMeta ? prepareTransformer(mapMeta) : null;

  function call(payload = {}) {
    const action = {
      type: FETCH,
      payload,
      meta: {
        isRequest: true,
        request,
        actions: {
          resolve: (data) => {
            return {
              type: RECEIVE,
              payload: mapPayload(data),
              meta: Object.assign(
                { payload },
                mapMeta ? mapMeta(data) : {},
                ),
            };
          },
          reject: error => ({
            type: ERROR,
            payload: error,
            meta: {
              action: {
                type: FETCH,
                payload,
              },
              at: dayjs().toDate()
            },
          }),
        },
      },
      [Symbol.toPrimitive]() {
        return prefix
      }
    };

    Object.defineProperties(action, {
      type: {
        writable: false,
        configurable: false,
      },
      meta: {
        writable: false,
      }
    });

    return action;
  }

  call.FETCH = FETCH;
  call.RECEIVE = RECEIVE;
  call.ERROR = ERROR;

  return call;
};
