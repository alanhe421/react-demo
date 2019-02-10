import {call, put, takeEvery} from 'redux-saga/effects';
import {getUserInfo} from '../api';

function* fetchUser() {
    const user = yield call(getUserInfo);
    yield put({type: 'USER_FETCH_SUCCEEDED', user: user.data});
}

function* mySaga() {
    yield takeEvery('USER_FETCH', fetchUser);
}

export default mySaga;
