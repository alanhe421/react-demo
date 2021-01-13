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
import 'regenerator-runtime';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-balham.css';
import './config/axios';
import { promiseMiddleware } from '@adobe/redux-saga-promise';
import * as moment from 'moment';
import 'moment-timezone';
import ErrorBoundary from './components/base/error-boundary';
import { BrowserRouter, Link } from 'react-router-dom';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';

const effectMiddleware = next => effect => {
  // if (effect.type === 'FORK') {
  //   effect.payload.args[1] = safe(effect.payload.args[1]);
  // }
  return next(effect);
};
export const sagaMiddleware = createSagaMiddleware({
  onError: (e, { sagaStack }) => {
    console.error(e);
    console.error(sagaStack);
  },
  effectMiddlewares: [effectMiddleware]
});

export const history = createBrowserHistory();

const reduxDevtools = window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : f => f;

const middleWares = [promiseMiddleware, sagaMiddleware, thunk, routerMiddleware(history)];

const store = createStore(rootReducer(history), compose(applyMiddleware(...middleWares), reduxDevtools));
sagaMiddleware.run(mySaga);

moment.tz.setDefault('America/Jujuy');

const render = (root) => ReactDOM.render(
  <Provider store={store}>
    <DndProvider backend={HTML5Backend}>
      <BrowserRouter>
        <main>
          <nav>
            menu list
            <Link to={'/home'}>
              home
            </Link>
            <Link to={'/user'}>
              user
            </Link>
            <Link to={'/form'}>
              form
            </Link>
            <Link to={'/pro-table'}>
              pro table
            </Link>
          </nav>
          <div>
            <ErrorBoundary>
              <Routes />
            </ErrorBoundary>
          </div>
        </main>
      </BrowserRouter>
    </DndProvider>
  </Provider>,
  root
);

render(document.getElementById('root'));

if (module.hot) {
  module.hot.accept('./routes', () => {
    const nextRoutes = require('./routes').default; // Again, depends on your project
    render(nextRoutes);
  });
}
