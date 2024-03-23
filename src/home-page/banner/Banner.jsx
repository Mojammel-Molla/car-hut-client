import BannerImage from '../../assets/banner-image-1.png';
import BackgroundImage from '../../assets/car-hut-banner.jpg';
const Banner = () => {
  return (
    <>
      <div
        style={{
          backgroundImage: `url(${BackgroundImage})`,
        }}
        className="hero min-h-[90vh]  border-2 "
      >
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img
            src={BannerImage}
            className="md:max-w-2xl rounded-lg shadow-xl"
          />
          <div className="text-white">
            <h1 className="text-5xl font-bold">Buy Your Dream Car Today!</h1>
            <p className="py-6 font-medium">
              Welcome to Car Hut, your premier destination for buying and
              selling high-quality new and used cars in Bangladesh. Whether you
              are in the market for a sleek sedan, a rugged SUV, or a sporty
              coupe, we have an extensive inventory to suit every taste and
              budget.
            </p>
            <button className="font-bold py-3 px-5 rounded-lg relative overflow-hidden bg-[#d01818] text-white  hover:shadow-md hover:bg-[#253241] transition duration-500">
              Buy Now
              <span className="absolute inset-0 bg-gradient-to-tr from-[#d01818] to-[#253241] opacity-20  duration-3000"></span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Banner;
