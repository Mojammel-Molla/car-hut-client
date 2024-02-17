import { Outlet } from 'react-router-dom';
import Footer from '../footer/Footer';
import Navbar from '../../home-page/navbar/Navbar';

const Root = () => {
  return (
    <div>
      <Navbar></Navbar>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default Root;
