import { call, put } from 'redux-saga/effects';
import { getBadRequest, getUserInfo } from '../api';
import { takeLatest, takeLeading } from '@redux-saga/core/effects';
import { fetchUserAction2, setUserInfo } from '../actions';
import { resolvePromiseAction } from '@adobe/redux-saga-promise';

function* fetchUserEffects(action) {
  const userInfo = (yield call(getUserInfo)).data;
  yield put(setUserInfo(userInfo));
}

function* getNum() {
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

  console.log(fetchUserAction2(111));

  yield takeLeading(fetchUserAction2, testExceptionEffects2);
  yield takeLatest('USER_FETCH', fetchUserEffects);
}

export default mySaga;
