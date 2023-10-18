import { createBrowserRouter } from 'react-router-dom';
import Root from '../root/Root';
import Home from '../home/Home';
import Login from '../login/Login';
import Register from '../register/Register';
import AddProduct from '../addProduct/AddProduct';
import MyCart from '../myCart/MyCart';

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
        path: '/addProduct',
        element: <AddProduct></AddProduct>,
      },
      {
        path: '/myCart',
        element: <MyCart></MyCart>,
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
