import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import user from './components/user';

const Routes = () => (
    <BrowserRouter>
        <Switch>
            <Route path='/user' component={user}/>
        </Switch>
    </BrowserRouter>
);

export default Routes;
