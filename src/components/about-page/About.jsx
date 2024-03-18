import SectionBanner from '../../shared/section-banner/SectionBanner';
import Services from './services/Services';
import AboutUs from './../../home-page/aboutUs/AboutUs';
import ProductStatus from './product-satus/ProductStatus';

const About = () => {
  return (
    <div>
      <SectionBanner title="Home" subTitle="About"></SectionBanner>
      <div className="md:h-[60vh] flex justify-center items-center">
        <Services></Services>
      </div>
      <AboutUs></AboutUs>
      <ProductStatus></ProductStatus>
    </div>
  );
};

export default About;
