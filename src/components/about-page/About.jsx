import SectionBanner from '../../shared/section-banner/SectionBanner';
import Services from './services/Services';

const About = () => {
  return (
    <div>
      <SectionBanner title="Home" subTitle="About"></SectionBanner>
      <div className="md:h-[50vh] flex justify-center items-center">
        <Services></Services>
      </div>
    </div>
  );
};

export default About;
