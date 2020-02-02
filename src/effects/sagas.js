import { call } from 'redux-saga/effects';
import { getBadRequest, getUserInfo } from '../api';
import { takeLeading } from '@redux-saga/core/effects';
import { fetchUserAction2 } from '../actions';
import { resolvePromiseAction } from '@adobe/redux-saga-promise';

function* fetchUserEffects(action) {
  const userInfo = (yield call(getUserInfo)).data;
  // yield put(setUserInfoAsync(userInfo));
  // yield delay(1000);
  //
  // const userHistory = (yield call(getUserHistory)).data;
  // yield put(setUserHistory(userHistory));
}

function sayHello() {

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
}

export default mySaga;
