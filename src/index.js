import React from 'react';
import ReactDOM from 'react-dom';
import {applyMiddleware, compose, createStore} from 'redux';
import Provider from 'react-redux/es/components/Provider';
import './App.css';
import rootReducer from './reducers';
import createSagaMiddleware from 'redux-saga';
import mySaga from './effects/sagas';
import Routes from './routes';

export const sagaMiddleware = createSagaMiddleware();

const reduxDevtools = window.devToolsExtension ? window.devToolsExtension() : f => f;
const middlewares = [sagaMiddleware];
const store = createStore(rootReducer, compose(applyMiddleware(...middlewares), reduxDevtools));

sagaMiddleware.run(mySaga);

ReactDOM.render(
    <Provider store={store}>
        <Routes />
    </Provider>,
    document.getElementById('root')
);
