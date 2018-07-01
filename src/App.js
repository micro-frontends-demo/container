import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import AppHeader from './AppHeader';
import MicroFrontend from './MicroFrontend';

const environments = {
  development: {
    browse: 'http://localhost:3001/static/js/bundle.js',
    order: 'http://localhost:3002/static/js/bundle.js',
    myAccount: 'http://localhost:3003/static/js/bundle.js',
  },
  production: {
    browse: 'https://browse.demo.microfrontends.com/static/js/bundle.js',
    order: 'https://restaurant.demo.microfrontends.com/static/js/bundle.js',
    myAccount: 'https://myAccount.demo.microfrontends.com/static/js/bundle.js',
  },
};
const apps = environments[process.env.NODE_ENV];

const Browse = ({ history }) => (
  <MicroFrontend history={history} src={apps.browse} name="Browse" />
);
const Restaurant = ({ history }) => (
  <MicroFrontend history={history} src={apps.order} name="Restaurant" />
);
const MyAccount = ({ history }) => (
  <MicroFrontend history={history} src={apps.myAccount} name="MyAccount" />
);

const Random = () => (
  <Redirect to={`/restaurant/${Math.floor(Math.random() * 10) + 1}`} />
);

const App = () => (
  <BrowserRouter>
    <React.Fragment>
      <AppHeader />
      <Switch>
        <Route exact path="/" component={Browse} />
        <Route exact path="/restaurant/:id" component={Restaurant} />
        <Route exact path="/my-account" component={MyAccount} />
        <Route exact path="/random" render={Random} />
      </Switch>
    </React.Fragment>
  </BrowserRouter>
);

export default App;
