import { call, delay, put, putResolve, select } from 'redux-saga/effects';
import { getUserInfo } from '../api';
import { setUserInfo } from '../actions';
import { fetchUser } from './thunk';
import { takeLeading } from '@redux-saga/core/effects';

function* fetchUserEffects() {
  console.log('Class: fetchUserEffects, Function: fetchUserEffects, Line 9 111(): ', 111);
  const user = (yield call(getUserInfo)).data;
  yield delay(3000);
  yield putResolve(fetchUser(user));
  console.log('Class: fetchUserEffects, Function: fetchUserEffects, Line 8 yield select(): ', yield select(state => state.user));

  var xhr = new XMLHttpRequest();
  xhr.open('GET', 'http://mock-api.com/wz2wL5gL.mock/test/bad-request', true);
  xhr.onload = e => {
    console.log('Class: fetchUserEffects, Function: onload, Line 14 xhr.response(): ', xhr.response);
  };
  xhr.onerror = e => {
    console.log('Class: fetchUserEffects, Function: onerror, Line 17 e(): ', e);
  };
  xhr.send();
}

function* fetchUserSuccessedEffects(action) {
  yield put(setUserInfo(action.user));
}


function* testSagaEffects() {
  console.log('test saga 1');
  const user = (yield call(getUserInfo)).data;
  return user;
}

function* mySaga() {
  yield takeLeading('USER_FETCH', fetchUserEffects);
  yield takeLeading('USER_FETCH_SUCCEEDED_ASYNC', fetchUserSuccessedEffects);
}

export default mySaga;
