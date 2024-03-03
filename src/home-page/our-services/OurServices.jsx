import ServiceBanner from '../../assets/Service-banner.png';
import MiddleBanner from '../../assets/middle-banner.png';
import SectionTitle from '../../shared/section-title/SectionTitle';
const OurServices = () => {
  return (
    <div
      className="min-h-[80vh] w-full"
      style={{
        backgroundImage: `url(${ServiceBanner})`,
      }}
    >
      <SectionTitle title="Our Services"></SectionTitle>
      <div className="  grid grid-cols-3 mx-auto max-w-[1680px]">
        <div className="max-w-md text-center justify-center ">
          <ul className="space-y-5 h- h-auto">
            <li>Online Marketplace Platform</li>
            <li>Online Marketplace Platform</li>
            <li>Online Marketplace Platform</li>
            <li>Online Marketplace Platform</li>
            <li>Online Marketplace Platform</li>
          </ul>
        </div>
        <div className="mb-10 ">
          <img src={MiddleBanner} alt="" />
        </div>
        <div className="max-w-md">
          <ul>
            <li>Online Marketplace Platform</li>
            <li>Online Marketplace Platform</li>
            <li>Online Marketplace Platform</li>
            <li>Online Marketplace Platform</li>
            <li>Online Marketplace Platform</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default OurServices;
