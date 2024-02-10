import Brand from '../../brand/Brand';
import Banner from '../../banner/Banner';
import AboutUs from '../aboutUs/AboutUs';
import ContactUs from '../contactUs/ContactUs';
import useAxios from './../../hooks/useAxios';
import { useEffect, useState } from 'react';
import Reviews from '../reviews.jsx/reviews';

const Home = () => {
  const axios = useAxios();
  const [brands, setBrands] = useState([]);
  useEffect(() => {
    axios.get('/brand-name').then(res => {
      setBrands(res.data);
    });
  }, [axios]);
  return (
    <div className="">
      <Banner></Banner>
      <h1 className="text-center text-4xl font-bold my-5">Worlds top brands</h1>
      <div className=" max-w-[1480px] mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-5">
        {brands?.map(brand => (
          <Brand key={brand.id} brand={brand}></Brand>
        ))}
      </div>
      <AboutUs></AboutUs>
      <ContactUs></ContactUs>
      <Reviews></Reviews>
    </div>
  );
};

export default Home;
