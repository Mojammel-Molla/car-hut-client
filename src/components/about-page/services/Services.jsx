import { FaHandHoldingDollar } from 'react-icons/fa6';
import { FaCarRear } from 'react-icons/fa6';
import { BiSolidCheckShield } from 'react-icons/bi';
const Services = () => {
  return (
    <div className="grid md:grid-cols-3 lg:gap-20 my-4">
      <div className="w-72 text-center space-y-2">
        <FaHandHoldingDollar className="text-3xl w-full mx-auto" />
        <h3 className="text-2xl font-semibold">Easy Financing</h3>
        <p>
          Drive away stress-free with our seamless financing solutions, tailored
          to fit your budget and make owning your dream car a reality.
        </p>
      </div>
      <div className="w-72 text-center p-5 space-y-2 bg-slate-600 text-white">
        <FaCarRear className="text-3xl w-full mx-auto" />
        <h3 className="text-2xl font-semibold">All Brands Cars</h3>
        <p>
          Explore our diverse selection of top-quality vehicles from all major
          brands, ensuring you find the perfect car to match your style and
          preferences.
        </p>
      </div>
      <div className="w-72 text-center space-y-2">
        <BiSolidCheckShield className="text-3xl w-full mx-auto" />
        <h3 className="text-2xl font-semibold">Quality Services</h3>
        <p>
          Experience excellence with our comprehensive range of quality
          services, ensuring your vehicle receives the care and attention it
          deserves, every step of the way.
        </p>
      </div>
    </div>
  );
};

export default Services;
