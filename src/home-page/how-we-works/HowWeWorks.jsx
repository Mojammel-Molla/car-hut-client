import BgImage from '../../assets/how-we-works-banner.jpg';

const HowWeWorks = () => {
  return (
    <div
      className="h-[60vh] mt-10"
      style={{ backgroundImage: `url(${BgImage})` }}
    >
      <div className="text-center py-10">
        <h6 className="text-xs pb-3 font-bold">HELPS YOU TO FIND PERFECT</h6>
        <h2 className="md:text-4xl font-bold">
          How <span className="text-[#d01818]">Car Hut</span> Works
        </h2>
      </div>
      <div className="max-w-7xl mx-auto grid lg:grid-cols-4 md:grid-cols-2 gap-5">
        <div className="w-64 text-center space-y-2">
          <h1 className="text-6xl font-bold ">01</h1>
          <h4 className="text-xl font-semibold">Search Our Inventory</h4>
          <p>
            Browse our curated inventory to discover the ideal vehicle tailored
            to your preferences.
          </p>
        </div>
        <div className="w-64 text-center space-y-2">
          <h1 className="text-6xl font-bold">02</h1>
          <h4 className="text-xl font-semibold ">Choose The Car You Like</h4>
          <p>
            Pick from our carefully selected vehicles, tailored to match your
            preferences and lifestyle.
          </p>
        </div>
        <div className="w-64 text-center space-y-2">
          <h1 className="text-6xl font-bold">03</h1>
          <h4 className="text-xl font-semibold ">Apply For Auto Finance</h4>
          <p>
            Secure hassle-free auto financing tailored to your needs with our
            streamlined application process.
          </p>
        </div>
        <div className="w-64 text-center space-y-2">
          <h1 className="text-6xl font-bold">04</h1>
          <h4 className="text-xl font-semibold ">Get Approved & Drive</h4>
          <p>
            Experience seamless approval and drive away with your dream car
            today.
          </p>
        </div>
      </div>
    </div>
  );
};

export default HowWeWorks;
