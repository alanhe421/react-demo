import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import user from './components/user/user';
import { AgGridPage } from './components/ag-grid';
import FormPage from './components/form/formPage';
import SagaTestPage from './components/saga-test/saga-test-page';
import AntdPage from './components/antd/antd-page';
import ThunkPage from './components/thunk/thunk-page';
import XlsxPage from './components/xlsx/xlsx';
import HomePage from './components/home/home';

const description = 'hello world';
const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route path='/user' component={user} description={description}/>
      <Route path='/ag-grid' component={AgGridPage}/>
      <Route path='/form' component={FormPage}/>
      <Route path='/saga' component={SagaTestPage}/>
      <Route path='/antd' component={AntdPage}/>
      <Route path='/thunk' component={ThunkPage}/>
      <Route path='/xlsx' component={XlsxPage}/>
      <Route path='/' component={HomePage}/>
    </Switch>
  </BrowserRouter>
);

export default Routes;
