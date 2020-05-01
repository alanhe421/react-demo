import { call } from 'redux-saga/effects';
import { getBadRequest, getUserInfo } from '../api';
import { takeLatest, takeLeading } from '@redux-saga/core/effects';
import { fetchUserAction, fetchUserAction2 } from '../actions';
import { resolvePromiseAction } from '@adobe/redux-saga-promise';

function* fetchUserEffects(action) {
  yield* getNum();
}

function* getNum() {
  console.log(a.b);
  return yield 111;
}

function* testExceptionEffects() {
  console.log('Class: testExceptionEffects, Function: testExceptionEffects, Line 18 1(): ', 1);
  try {
    yield call(getBadRequest);
  } catch (e) {
    console.error('saga exception');
  }
}

function* testExceptionEffects2(action) {
  const userInfo = (yield call(getUserInfo)).data;
  console.log(1);
  yield call(resolvePromiseAction, action, userInfo);
}

function* mySaga() {
  yield takeLeading(fetchUserAction2, testExceptionEffects2);
  yield takeLatest(fetchUserAction, fetchUserEffects);
}

export default mySaga;
