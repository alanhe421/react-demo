import { call } from 'redux-saga/effects';

export function safe(sagaFn) {
  return function* (action) {
    try {
      yield call(sagaFn, action);
    } catch (e) {
      console.error('safer');
      console.error('-- ' + e + ' --');
    }
  };
}
