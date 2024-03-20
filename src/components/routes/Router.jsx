import { createBrowserRouter } from 'react-router-dom';
import Root from '../root/Root';
import Home from '../home/Home';
import Login from '../login/Login';
import Register from '../register/Register';
import MyCart from '../myCart/MyCart';
import PrivateRoute from '../../privateRoute/PrivateRoute';
import UpdateProduct from '../updateProduct/UpdateProduct';
import ErrorPage from '../errorPage/ErrorPage';
import CardDetails from '../cardDetails/CardDetails';
import ContactPage from '../contact-page/ContactPage';
import Reviews from '../../home-page/reviews.jsx/reviews';
import AddItems from '../../dashboard-components/add-items/AddItems';
import Dashboard from '../../dashboard-components/dashboard/DashboardLayOut';
import AllItems from '../all-items/AllItems';
import UpdateItems from '../../dashboard-components/update-items/UpdateItems';
import MyProfile from '../../dashboard-components/my-profile/MyProfile';
import Blogs from './../blogs-page/Blogs';
import About from '../about-page/About';

const Router = createBrowserRouter([
  {
    path: '/',
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
        loader: () => fetch('http://localhost:5000/brands'),
      },
      {
        path: '/blog',
        element: <Blogs></Blogs>,
      },
      {
        path: '/brand/:brand',
        element: <AllItems></AllItems>,
      },
      {
        path: '/contact-us',
        element: <ContactPage></ContactPage>,
      },
      {
        path: '/reviews',
        element: <Reviews></Reviews>,
      },
      {
        path: '/about',
        element: <About></About>,
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
            `https://car-hut-server-gqfbpbiz9-mojammel-mollas-projects.vercel.app/product/${params.id}`
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
        //   return fetch(`https://car-hut-server-gqfbpbiz9-mojammel-mollas-projects.vercel.app/cart/${params.id}`);
        // },
      },
    ],
  },
  {
    path: '/login',
    element: <Login></Login>,
  },
  {
    path: '/register',
    element: <Register></Register>,
  },
  {
    path: '/dashboard',
    element: <Dashboard></Dashboard>,
    children: [
      {
        path: 'my-profile',
        element: <MyProfile></MyProfile>,
      },
      {
        path: 'add-items',
        element: (
          <PrivateRoute>
            <AddItems></AddItems>
          </PrivateRoute>
        ),
      },
      {
        path: 'update-items',
        element: (
          <PrivateRoute>
            <UpdateItems></UpdateItems>
          </PrivateRoute>
        ),
      },
      {
        path: 'update-items/:id',
        element: (
          <PrivateRoute>
            <UpdateProduct></UpdateProduct>
          </PrivateRoute>
        ),
        loader: ({ params }) => {
          return fetch(
            `https://car-hut-server-gqfbpbiz9-mojammel-mollas-projects.vercel.app/update/${params.id}`
          );
        },
      },
    ],
  },
]);

export default Router;
