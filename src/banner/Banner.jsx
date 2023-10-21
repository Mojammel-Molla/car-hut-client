import bannerImage from '../assets/34861221_8218093.jpg';
const Banner = () => {
  return (
    <>
      <div
        className="hero w-full  min-h-screen bg-cover mx-auto mt-5"
        style={{
          backgroundImage: `url(${bannerImage})`,
        }}
      >
        <div className=" "></div>
        <div className="hero-content text-center text-neutral-content">
          {/* <div className="max-w-md">
          <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
          <p className="mb-5">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
          <button className="btn btn-primary">Get Started</button>
        </div> */}
        </div>
      </div>
    </>
  );
};

export default Banner;
