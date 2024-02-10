// import bannerImage from '../assets/34861221_8218093.jpg';
import BannerImage from '../assets/car-banner (2).jpg';
const Banner = () => {
  return (
    <>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img src={BannerImage} className="max-w-2xl rounded-lg shadow-2xl" />
          <div>
            <h1 className="text-5xl font-bold">Buy Your Dream Car Today!</h1>
            <p className="py-6">
              Welcome to Car Hut, your premier destination for buying and
              selling high-quality new and used cars in Bangladesh. Whether you
              are in the market for a sleek sedan, a rugged SUV, or a sporty
              coupe, we have an extensive inventory to suit every taste and
              budget.
            </p>
            <button className="btn bg-orange-900 text-white">Buy Now</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Banner;
