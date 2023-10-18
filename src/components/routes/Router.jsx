import { createBrowserRouter } from 'react-router-dom';
import Root from '../root/Root';
import Home from '../home/Home';
import Login from '../login/Login';
import Register from '../register/Register';

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
      {
        path: '/register',
        element: <Register></Register>,
      },
    ],
  },
]);

export default Router;
