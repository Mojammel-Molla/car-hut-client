import ContactUs from '../../home-page/contactUs/ContactUs';
import useAxios from './../../hooks/useAxios';
import { useEffect, useState } from 'react';
import Reviews from '../../home-page/reviews.jsx/reviews';
import AllBrands from '../all-brands/AllBrands';
import Banner from '../../home-page/banner/Banner';
import AboutUs from '../../home-page/aboutUs/AboutUs';
import BlogSection from '../../home-page/blog-section/BlogSection';
import Promotions from '../../home-page/promotions/Promotions';
import OurServices from '../../home-page/our-services/OurServices';
import HowWeWorks from '../../home-page/how-we-works/HowWeWorks';
import Greetings from '../../home-page/greetings/Greetings';
import OurTeams from '../../home-page/our-teams/OurTeams';

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
      <Greetings></Greetings>
      <AllBrands brands={brands}></AllBrands>
      <HowWeWorks></HowWeWorks>
      <Promotions></Promotions>
      <OurServices></OurServices>
      <BlogSection></BlogSection>
      <AboutUs></AboutUs>
      <OurTeams></OurTeams>
      <Reviews></Reviews>
      <ContactUs></ContactUs>
    </div>
  );
};

export default Home;
