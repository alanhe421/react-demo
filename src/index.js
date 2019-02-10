import React from 'react';
import ReactDOM from 'react-dom';
import {compose, createStore} from 'redux';
import Provider from 'react-redux/es/components/Provider';
import './App.css';
import rootReducer from './reducers';
import App from './components/App';

const reduxDevtools = window.devToolsExtension ? window.devToolsExtension() : f => f;

const store = createStore(rootReducer, compose(reduxDevtools));

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);
