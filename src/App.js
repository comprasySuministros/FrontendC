import React from 'react';
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom';
import routes from './utils/routes/routes';

export const App = () => (
  <Router>
    <Switch>
      {routes.map((route) => (
        <RoutesWithSubroutes key={route.component} {...route} />
      ))}
    </Switch>
  </Router>
);

function RoutesWithSubroutes(route) {
  return (
    <Route
      path={route.path}
      exact={route.exact}
      render={(props) => <route.component routes={route.routes} {...props} />}
    />
  );
}

export default App;
