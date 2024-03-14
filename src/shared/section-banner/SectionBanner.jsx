import BannerImage from '../../assets/dashboard-banner.jpg';
const SectionBanner = ({ title, subTitle }) => {
  return (
    <div
      style={{ backgroundImage: `url(${BannerImage})` }}
      className="h-[30vh] flex s justify-center items-center"
    >
      <div>
        <h1 className="text-3xl text-white font-bold">
          {title} ❯ {subTitle}
        </h1>
      </div>
    </div>
  );
};

export default SectionBanner;
