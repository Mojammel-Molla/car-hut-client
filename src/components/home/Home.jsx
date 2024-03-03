import ContactUs from '../contactUs/ContactUs';
import useAxios from './../../hooks/useAxios';
import { useEffect, useState } from 'react';
import Reviews from '../../home-page/reviews.jsx/reviews';
import AllBrands from '../all-brands/AllBrands';
import Banner from '../../home-page/banner/Banner';
import AboutUs from '../../home-page/aboutUs/AboutUs';
import BlogSection from '../../home-page/blog-section/BlogSection';
import Promotions from '../../home-page/promotions/Promotions';
import OurServices from '../../home-page/our-services/OurServices';

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
      <AllBrands brands={brands}></AllBrands>
      <Promotions></Promotions>
      <BlogSection></BlogSection>
      <AboutUs></AboutUs>
      <OurServices></OurServices>
      <Reviews></Reviews>
      <ContactUs></ContactUs>
    </div>
  );
};

export default Home;
