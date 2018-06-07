import React from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import AppHeader from './AppHeader';
import MicroFrontend from './MicroFrontend';

const App = () => (
  <BrowserRouter>
    <React.Fragment>
      <AppHeader />
      <Switch>
        <Route exact path="/" render={() =>
          <MicroFrontend name="Browse" src="http://localhost:3001/static/js/bundle.js" />
        }/>
          <Route exact path="/restaurant/:slug" render={() =>
            <MicroFrontend name="Restaurant" src="http://localhost:3002/static/js/bundle.js" />
          }/>
        <Route exact path="/my-account" render={() =>
          <MicroFrontend name="MyAccount" src="http://localhost:3003/static/js/bundle.js" />
        }/>
      </Switch>
    </React.Fragment>
  </BrowserRouter>
);

export default App;
