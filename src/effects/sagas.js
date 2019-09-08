import {call, delay, put, takeEvery} from 'redux-saga/effects';
import {getBooks, getUserHistory, getUserInfo} from '../api';
import {setBooksInfo} from '../actions';

function* fetchUserEffects() {
    console.log('fetchUserEffects');
    const user = (yield call(getUserInfo));
    return user;
    // yield put({type: 'USER_FETCH_SUCCEEDED', user: user.data});
}

function* testSagaEffects() {
    console.log('test saga 1');
    const user = (yield call(getUserInfo)).data;
    console.log('step 1');
    const books = (yield call(getBooks)).data;
    yield put(setBooksInfo(books));
    console.log('step 2');
    yield call(getUserHistory);
    console.log('step 3');
    return user;
}

function* testSagaEffects2() {
    yield delay(500);
    console.log('test saga 2');
}


function* mySaga() {
    yield takeEvery('USER_FETCH', fetchUserEffects);
    yield takeEvery('TEST_SAGA', testSagaEffects);
    yield takeEvery('TEST_SAGA', testSagaEffects2);
}

export default mySaga;
