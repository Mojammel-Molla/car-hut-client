import { createBrowserRouter } from 'react-router-dom';
import Root from '../root/Root';
import Home from '../home/Home';
import Login from '../login/Login';
import Register from '../register/Register';
import AddProduct from '../addProduct/AddProduct';
import MyCart from '../myCart/MyCart';
import PrivateRoute from '../../privateRoute/PrivateRoute';

const Router = createBrowserRouter([
  {
    path: '/',
    element: <Root></Root>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
        loader: () => fetch('/brands.json'),
      },
      {
        path: '/addProduct',
        element: <AddProduct></AddProduct>,
      },
      {
        path: '/myCart',
        element: (
          <PrivateRoute>
            <MyCart></MyCart>
          </PrivateRoute>
        ),
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
