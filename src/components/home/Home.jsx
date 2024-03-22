import ContactUs from '../../home-page/contactUs/ContactUs';
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
import CalculateLoan from '../../home-page/calculate-loan/CalculateLoan';

const Home = () => {
  return (
    <div className="">
      <Banner></Banner>
      <Greetings></Greetings>
      <AllBrands></AllBrands>
      <HowWeWorks></HowWeWorks>
      <Promotions></Promotions>
      <OurServices></OurServices>
      <CalculateLoan></CalculateLoan>
      <BlogSection></BlogSection>
      <AboutUs></AboutUs>
      <OurTeams></OurTeams>
      <Reviews></Reviews>
      <ContactUs></ContactUs>
    </div>
  );
};

export default Home;
