import React from 'react';
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Home from './components/templates/Home/Home';
import CreateProducts from './components/templates/CreateProducts/CreateProducts';

export const App = () => (
  <Router>
    <Switch>
      <Route exact path="/articulos" component={Home} />
      <Route exact path="/articulos/crear" component={CreateProducts} />
      <Route exact path="/articulos/actualizar/:id" component={CreateProducts} />
    </Switch>
    <ToastContainer />
  </Router>
);

export default App;
