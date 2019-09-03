import { call } from 'redux-saga/effects';

export function safe(sagaFn) {
  return function* (action) {
    try {
      return yield call(sagaFn, action);
    } catch (e) {
      console.error('[react-demo | Saga Unhandled Exception] This error should be fixed or do some pre check in saga effects function.');
      console.error(e);
    }
  };
}
