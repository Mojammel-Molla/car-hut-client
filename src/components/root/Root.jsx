import { Outlet } from 'react-router-dom';

import Navbar from '../../home-page/navbar/Navbar';
import Footer from './../../home-page/footer/Footer';

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
