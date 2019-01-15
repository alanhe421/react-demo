import React from 'react';
import {Route, Router} from 'react-router-dom';

import App from './components/App';

const routes = () => (
    <Router>
        <Route path='/' component={App}/>
    </Router>
);

export default routes;
