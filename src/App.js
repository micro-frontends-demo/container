import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import AppHeader from './AppHeader';
import MicroFrontend from './MicroFrontend';

const Browse = ({ history }) => (
  <MicroFrontend history={history} src="http://localhost:3001/static/js/bundle.js" name="Browse" />
);
const Restaurant = ({ history }) => (
  <MicroFrontend history={history} src="http://localhost:3002/static/js/bundle.js" name="Restaurant" />
);
const MyAccount = ({ history }) => (
  <MicroFrontend history={history} src="http://localhost:3003/static/js/bundle.js" name="MyAccount" />
);

const randomRestaurantId = () => (
  Math.floor(Math.random() * 10) + 1
);

const App = () => (
  <BrowserRouter>
    <React.Fragment>
      <AppHeader />
      <Switch>
        <Route exact path="/" component={Browse}/>
        <Route exact path="/restaurant/:id" component={Restaurant}/>
        <Route exact path="/my-account" component={MyAccount}/>
        <Route exact path="/random" render={() => <Redirect to={`/restaurant/${randomRestaurantId()}`}/>} />
      </Switch>
    </React.Fragment>
  </BrowserRouter>
);

export default App;
