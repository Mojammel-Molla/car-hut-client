import { createBrowserRouter } from 'react-router-dom';
import Root from '../root/Root';
import Home from '../home/Home';
import Login from '../login/Login';
import Register from '../register/Register';
import AddProduct from '../addProduct/AddProduct';
import MyCart from '../myCart/MyCart';
import PrivateRoute from '../../privateRoute/PrivateRoute';
import UpdateProduct from '../updateProduct/UpdateProduct';
import AllProducts from '../allProducts/AllProducts';
import ErrorPage from '../errorPage/ErrorPage';
import CardDetails from '../cardDetails/CardDetails';

const Router = createBrowserRouter([
  {
    path: '/',
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
        loader: () => fetch('/brands.json'),
      },
      {
        path: '/products/:brand',
        element: <AllProducts></AllProducts>,
      },
      {
        path: '/product/:id',
        element: (
          <PrivateRoute>
            <CardDetails></CardDetails>
          </PrivateRoute>
        ),
        loader: ({ params }) => {
          return fetch(
            `https://car-hut-server-nkl9gnsf2-mojammel-mollas-projects.vercel.app/product/${params.id}`
          );
        },
      },
      {
        path: '/addProduct',
        element: (
          <PrivateRoute>
            <AddProduct></AddProduct>
          </PrivateRoute>
        ),
      },
      {
        path: '/updateProduct/:id',
        element: <UpdateProduct></UpdateProduct>,
        loader: ({ params }) => {
          return fetch(
            `https://car-hut-server-nkl9gnsf2-mojammel-mollas-projects.vercel.app/update/${params.id}`
          );
        },
      },
      {
        path: '/cart',
        element: (
          <PrivateRoute>
            <MyCart></MyCart>
          </PrivateRoute>
        ),
        // loader: ({ params }) => {
        //   return fetch(`https://car-hut-server-nkl9gnsf2-mojammel-mollas-projects.vercel.app/cart/${params.id}`);
        // },
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
