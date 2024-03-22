import TeamImg from '../../assets/about.banner.webp';
import SectionTitle from '../../shared/section-title/Sectiontitle';

const AboutUs = () => {
  return (
    <div className="hero bg-base-100 mt-20 border-t-2 pt-3">
      <div className="hero-content flex-col md:gap-12 lg:flex-row">
        <img src={TeamImg} className="lg:max-w-lg rounded-lg shadow-2xl" />
        <div>
          <SectionTitle></SectionTitle>
          <h1 className="text-2xl md:text-4xl text-center font-bold mb-10 ">
            About <span className="text-red-600">Us</span>
          </h1>
          <p className="py-6">
            Welcome to our comprehensive car website, your ultimate destination
            for all things automotive. Explore an extensive range of vehicle
            makes and models, from compact cars to rugged SUVs and luxurious
            sedans. Discover in-depth reviews, expert insights, and up-to-date
            information on the latest automotive trends. Whether you are a car
            enthusiast, a buyer looking for your next ride, or simply curious
            about the world of automobiles, our website is your go-to resource
            for all things on four wheels. Start your journey with us and find
            the perfect vehicle to match your lifestyle and preferences.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
