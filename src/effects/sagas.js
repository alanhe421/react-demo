import { call, delay, put } from 'redux-saga/effects';
import { getUserHistory, getUserInfo } from '../api';
import { setUserHistory, setUserInfoAsync } from '../actions';
import { takeLatest } from '@redux-saga/core/effects';

function* fetchUserEffects(action) {
  console.log(`这是第${action.payload.count}次`);
  const userInfo = (yield call(getUserInfo)).data;
  yield put(setUserInfoAsync(userInfo));
  yield delay(1000);

  const userHistory = (yield call(getUserHistory)).data;
  yield put(setUserHistory(userHistory));
}

function* mySaga() {
  yield takeLatest('USER_FETCH', fetchUserEffects);
}

export default mySaga;
