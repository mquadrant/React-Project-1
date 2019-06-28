import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Layout from './components/layouts/index';
import './App.css';
import Dashboard from './components/pages/dashboard';
import Drivers from './components/pages/drivers';
import Trips from './components/pages/trips';

function App() {
  return (
    <BrowserRouter>
      <React-Fragment>
        <Layout>
          <Switch>
            <Route path="/" exact component={Dashboard} />
            <Route path="/drivers" exact component={Drivers} />
            <Route path="/trips" exact component={Trips} />
          </Switch>
        </Layout>
      </React-Fragment>
    </BrowserRouter>
  );
}

export default App;
