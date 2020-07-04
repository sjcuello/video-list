import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from '../containers/Home';
import Layout from '../components/Layout';
import NotFound from '../containers/NotFound';
import DiplayComponent from '../containers/DiplayComponent';

const App = () => (
  <BrowserRouter>
    <Layout>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/video/:id" component={DiplayComponent} />
        <Route component={NotFound} />
      </Switch>
    </Layout>
  </BrowserRouter>
)
export default App;
