import Home from '../../components/templates/Home/Home';
import CreateProducts from '../../components/templates/CreateProducts/CreateProducts';

const routes = [
  {
    path: '/',
    component: Home,
    exact: true,
  },
  {
    path: '/admin',
    component: CreateProducts,
    exact: true,
  },
];

export default routes;
