import React from 'react';
import ReactDOM from 'react-dom';
import { applyMiddleware, compose, createStore } from 'redux';
import Provider from 'react-redux/es/components/Provider';
import './App.css';
import rootReducer from './reducers';
import createSagaMiddleware from 'redux-saga';
import mySaga from './effects/sagas';
import Routes from './routes';
import thunk from 'redux-thunk';
import { createBrowserHistory } from 'history';
import { routerMiddleware } from 'connected-react-router';

import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-balham.css';
import { safe } from './config/saga-middleware';
import Promise from 'promise/lib/es6-extensions.js';
import './config/axios';
import { promiseMiddleware } from '@adobe/redux-saga-promise';
import * as moment from 'moment';
import 'moment-timezone';

window.Promise = Promise;

const effectMiddleware = next => effect => {
  if (effect.type === 'FORK') {
    effect.payload.args[1] = safe(effect.payload.args[1]);
  }
  return next(effect);
};
export const sagaMiddleware = createSagaMiddleware({
  onError: (e) => {
    console.error('onError');
    console.error(e);
  },
  effectMiddlewares: [effectMiddleware]
});

export const history = createBrowserHistory();

const reduxDevtools = window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : f => f;

const middleWares = [promiseMiddleware, sagaMiddleware, thunk, routerMiddleware(history)];

const store = createStore(rootReducer(history), compose(applyMiddleware(...middleWares), reduxDevtools));
sagaMiddleware.run(mySaga);

moment.tz.setDefault('America/Jujuy');

ReactDOM.render(
  <Provider store={store}>
    <Routes/>
  </Provider>,
  document.getElementById('root')
);

if (module.hot) {
  module.hot.accept('./routes', () => {
    const nextRoutes = require('./routes').default; // Again, depends on your project
    ReactDOM.render(
      <Provider store={store}>
        <Routes/>
      </Provider>,
      document.getElementById('root')
    );
  });
}
