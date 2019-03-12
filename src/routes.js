import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import user from './components/user';

const description = 'hello world';
const Routes = () => (
    <BrowserRouter>
        <Switch>
            <Route path='/user' component={user} description={description}/>
        </Switch>
    </BrowserRouter>
);

export default Routes;
