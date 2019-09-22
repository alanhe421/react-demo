import {call, put, putResolve, select, takeEvery} from 'redux-saga/effects';
import {getUserInfo} from '../api';
import {setUserInfo} from '../actions';
import {fetchUser} from './thunk';

function* fetchUserEffects() {
    const user = (yield call(getUserInfo)).data;
    yield putResolve(fetchUser(user));
    console.log('Class: fetchUserEffects, Function: fetchUserEffects, Line 8 yield select(): ', yield select(state => state.user));
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
    yield takeEvery('USER_FETCH', fetchUserEffects);
    yield takeEvery('USER_FETCH_SUCCEEDED_ASYNC', fetchUserSuccessedEffects);
    // yield takeEvery('TEST_SAGA', testSagaEffects);
    // yield takeEvery('TEST_SAGA', testSagaEffects2);
}

export default mySaga;
