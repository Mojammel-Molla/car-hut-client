import PromotionBanner from '../../assets/promotion-image.webp';

const Promotions = () => {
  return (
    <div
      className="hero min-h-[80vh] my-10"
      style={{
        backgroundImage: `url(${PromotionBanner})`,
      }}
    >
      <div className=" bg-opacity-30"></div>
      <div className="w-full lg:px-20  text-start text-white">
        <div className="max-w-xl w-full items-start ">
          <h3 className="mb-5 text-2xl font-bold">
            GET AN EXTRA 20% OFF YOUR FIRST ORDER
          </h3>
          <h1 className="mb-5 font-bold text-5xl">
            Enjoy your journey with our comfortable cars.
          </h1>
          <button className="btn ">Shop Now</button>
        </div>
      </div>
    </div>
  );
};

export default Promotions;
