import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import AppHeader from './AppHeader';
import MicroFrontend from './MicroFrontend';

const {
  REACT_APP_BROWSE_HOST: browseHost,
  REACT_APP_RESTAURANT_HOST: restaurantHost,
} = process.env;

const Browse = ({ history }) => (
  <MicroFrontend history={history} host={browseHost} name="Browse" />
);
const Restaurant = ({ history }) => (
  <MicroFrontend history={history} host={restaurantHost} name="Restaurant" />
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
        <Route exact path="/random" render={Random} />
      </Switch>
    </React.Fragment>
  </BrowserRouter>
);

export default App;
