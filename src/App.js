import React from 'react';
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import { QueryClient, QueryClientProvider } from 'react-query';
import 'react-toastify/dist/ReactToastify.css';
import Home from './components/templates/Home/Home';
import CreateProducts from './components/templates/CreateProducts/CreateProducts';

const queryClient = new QueryClient();

export const App = () => (
  <QueryClientProvider client={queryClient}>
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/articulos/crear" component={CreateProducts} />
        <Route
          exact
          path="/articulos/actualizar/:id"
          component={CreateProducts}
        />
      </Switch>
      <ToastContainer />
    </Router>
  </QueryClientProvider>
);

export default App;
