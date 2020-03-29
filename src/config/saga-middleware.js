import { call } from 'redux-saga/effects';

export function safe(sagaFn) {
  let wrapped = function* (action) {
    try {
      yield call(sagaFn, action);
    } catch (e) {
      console.error('[react-demo | Saga Unhandled Exception] This error should be fixed or do some pre check in saga effects function.');
      console.error(action);
      console.error(e);
    }
  };
  wrapped._original = sagaFn;
  return wrapped;
}
