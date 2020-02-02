import { call } from 'redux-saga/effects';
import { getBadRequest, getUserInfo } from '../api';
import { takeLeading } from '@redux-saga/core/effects';

function* fetchUserEffects(action) {
  const userInfo = (yield call(getUserInfo)).data;
  window.location.hash = 'hello';
  // yield put(setUserInfoAsync(userInfo));
  // yield delay(1000);
  //
  // const userHistory = (yield call(getUserHistory)).data;
  // yield put(setUserHistory(userHistory));
}

function sayHello() {

}

function* testExceptionEffects() {
  alert(1);
  console.log('Class: testExceptionEffects, Function: testExceptionEffects, Line 18 1(): ', 1);
  try {
    yield call(getBadRequest);
  } catch (e) {
    console.error('saga exception');
  }
}


function* mySaga() {
  yield takeLeading('USER_FETCH', testExceptionEffects);
}

export default mySaga;
