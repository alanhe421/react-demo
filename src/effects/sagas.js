import { call, put } from 'redux-saga/effects';
import { getBadRequest, getUserInfo } from '../api';
import { takeLatest, takeLeading } from '@redux-saga/core/effects';
import { fetchUserAction2, setUserInfo } from '../actions';
import { resolvePromiseAction } from '@adobe/redux-saga-promise';

function* fetchUserEffects(action) {
  const userInfo = (yield call(getUserInfo)).data;
  yield put(setUserInfo(userInfo));
  yield game();
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

function* playLevelOne() {
  console.log('playLevelOne');
}

function* playLevelTwo() {
  console.log('playLevelTwo');
}

function* playLevelThree() {
  console.log('playLevelThree');
}

function* game() {
  const score1 = yield playLevelOne()

  const score2 = yield playLevelTwo()

  const score3 = yield playLevelThree()
}

function* mySaga() {
  yield takeLeading(fetchUserAction2, testExceptionEffects2);
  yield takeLatest('USER_FETCH', fetchUserEffects);
}



export default mySaga;
