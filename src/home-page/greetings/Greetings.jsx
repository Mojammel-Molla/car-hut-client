import GreetingsBanner from '../../assets/greetings-banner.png';
import { GiTakeMyMoney } from 'react-icons/gi';
import { FaCarOn } from 'react-icons/fa6';
import { MdOutlinePlaylistAddCheck } from 'react-icons/md';
const Greetings = () => {
  return (
    <div className="lg:h-[100vh] mb-20 ">
      {/* Section title */}
      <div className="text-center py-10">
        <h6 className="text-xs pb-3 font-bold">
          HELPS YOU TO FIND YOUR NEXT CAR EASILY
        </h6>
        <h2 className="text-2xl md:text-4xl font-bold">
          Welcome to <span className="text-[#d01818]">Car Hut</span>
        </h2>
      </div>
      <div className="max-w-7xl mx-auto grid lg:grid-cols-3 md:grid-cols-3 gap-5">
        <div className="lg:w-72 text-center mx-auto space-y-2 border-x-2 ">
          <GiTakeMyMoney className="text-5xl w-full justify-center" />
          <h4 className="text-xl font-semibold">
            WE OFFERS LOWER <br /> CARS PRICES
          </h4>
          <p>
            Unlock unbeatable prices on our extensive range of vehicles,
            ensuring affordability without compromising quality.
          </p>
        </div>
        <div className="lg:w-72 text-center mx-auto space-y-2 border-x-2">
          <FaCarOn className="text-5xl w-full justify-center" />
          <h4 className="text-xl font-semibold ">LARGEST CARS DEALERSHIP</h4>
          <p>
            Discover the vast selection at our premier dealership, offering the
            largest inventory of top-quality vehicles to suit every need.
          </p>
        </div>
        <div className="lg:w-72 text-center mx-auto space-y-2 border-x-2">
          <MdOutlinePlaylistAddCheck className="text-6xl w-full justify-center" />
          <h4 className="text-lg font-semibold ">
            MULTI POINT SAFETY <br /> CHECKS OFFERS
          </h4>
          <p>
            Experience peace of mind with our thorough multi point safety
            checks, ensuring your vehicles reliability and security.
          </p>
        </div>
      </div>
      <div className="my-5 max-w-7xl mx-auto">
        <img className="my-20 mx-auto" src={GreetingsBanner} alt="" />
      </div>
    </div>
  );
};

export default Greetings;
