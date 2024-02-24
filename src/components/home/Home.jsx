import ContactUs from '../contactUs/ContactUs';
import useAxios from './../../hooks/useAxios';
import { useEffect, useState } from 'react';
import Reviews from '../../home-page/reviews.jsx/reviews';
import AllBrands from '../all-brands/AllBrands';
import Banner from '../../home-page/banner/Banner';
import AboutUs from '../../home-page/aboutUs/AboutUs';
import BlogSection from '../../home-page/blog-section/BlogSection';

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
      <AboutUs></AboutUs>
      <ContactUs></ContactUs>
      <BlogSection></BlogSection>
      <Reviews></Reviews>
    </div>
  );
};

export default Home;
