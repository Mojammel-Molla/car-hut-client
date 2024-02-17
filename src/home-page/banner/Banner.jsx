import BannerImage from '../../assets/car-banner.jpg';
const Banner = () => {
  return (
    <>
      <div className="hero min-h-[90vh] bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img
            src={BannerImage}
            className="md:max-w-2xl rounded-lg shadow-2xl"
          />
          <div>
            <h1 className="text-5xl font-bold">Buy Your Dream Car Today!</h1>
            <p className="py-6">
              Welcome to Car Hut, your premier destination for buying and
              selling high-quality new and used cars in Bangladesh. Whether you
              are in the market for a sleek sedan, a rugged SUV, or a sporty
              coupe, we have an extensive inventory to suit every taste and
              budget.
            </p>
            <button className="btn bg-orange-800 text-white hover:bg-orange-500">
              Buy Now
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Banner;