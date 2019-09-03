import React from 'react';
import ReactDOM from 'react-dom';
import {applyMiddleware, compose, createStore} from 'redux';
import Provider from 'react-redux/es/components/Provider';
import './App.css';
import rootReducer from './reducers';
import createSagaMiddleware from 'redux-saga';
import mySaga from './effects/sagas';
import Routes from './routes';
import thunk from 'redux-thunk';

import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-balham.css';

export const sagaMiddleware = createSagaMiddleware({
    onError: (e) => {
        console.log('onError');
        console.log(e);
    }
});

const reduxDevtools = window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : f => f;
const middleWares = [sagaMiddleware, thunk];
const store = createStore(rootReducer, compose(applyMiddleware(...middleWares), reduxDevtools));

sagaMiddleware.run(mySaga).toPromise()
    .then(r => console.log(r))
    .catch(e => () => {
        console.error('sagaMiddleware try catch');
        console.error(e);
    });

ReactDOM.render(
    <Provider store={store}>
        <Routes/>
    </Provider>,
    document.getElementById('root')
);
