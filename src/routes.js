import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import user from './components/user';
import {AgGridPage} from './components/ag-grid';

const description = 'hello world';
const Routes = () => (
    <BrowserRouter>
        <Switch>
            <Route path='/user' component={user} description={description}/>
            <Route path='/ag-grid' component={AgGridPage}/>
        </Switch>
    </BrowserRouter>
);

export default Routes;
