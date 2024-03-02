import PromotionBanner from '../../assets/promotion-image.webp';

const Promotions = () => {
  return (
    <div
      className="hero min-h-[70vh]"
      style={{
        backgroundImage: `url(${PromotionBanner})`,
      }}
    >
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-start text-neutral-content">
        <div className="max-w-md text-start">
          <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
          <p className="mb-5">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
          <button className="btn btn-primary">Get Started</button>
        </div>
      </div>
    </div>
  );
};

export default Promotions;
