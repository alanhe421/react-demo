import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import user from './components/user';
import {AgGridPage} from './components/ag-grid';
import FormPage from './components/form/formPage';
import SagaTestPage from './components/saga-test/saga-test-page';
import AntdPage from './components/antd/antd-page';

const description = 'hello world';
const Routes = () => (
    <BrowserRouter>
        <Switch>
            <Route path='/user' component={user} description={description}/>
            <Route path='/ag-grid' component={AgGridPage}/>
            <Route path='/form' component={FormPage}/>
            <Route path='/saga' component={SagaTestPage}/>
            <Route path='/antd' component={AntdPage}/>
        </Switch>
    </BrowserRouter>
);

export default Routes;
