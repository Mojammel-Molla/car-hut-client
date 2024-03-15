import PromotionBanner from '../../assets/promotion-image.webp';

const Promotions = () => {
  return (
    <div
      className="hero min-h-[80vh] mb-3"
      style={{
        backgroundImage: `url(${PromotionBanner})`,
      }}
    >
      <div className=" bg-opacity-30"></div>
      <div className="w-full lg:px-20  text-start text-white">
        <div className="max-w-xl w-full items-start p-2">
          <h3 className="mb-5 text-lg md:text-2xl font-bold">
            GET AN EXTRA <span className="text-[#d01818] font-bold">20%</span>{' '}
            OFF YOUR FIRST ORDER
          </h3>
          <h1 className="mb-5 font-bold text-3xl md:text-5xl">
            Enjoy your journey with our comfortable cars.
          </h1>
          <button className="btn hover:bg-[#d01818] hover:text-white">
            Shop Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Promotions;
