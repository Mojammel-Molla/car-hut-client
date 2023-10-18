import { createBrowserRouter } from 'react-router-dom';
import Root from '../root/Root';
import Home from '../home/Home';
import Login from '../login/Login';

const Router = createBrowserRouter([
  {
    path: '/',
    element: <Root></Root>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
      },
      {
        path: '/login',
        element: <Login></Login>,
      },
    ],
  },
]);

export default Router;
