import ServiceBanner from '../../assets/Service-banner.png';
import MiddleBanner from '../../assets/middle-banner.png';
import SectionTitle from '../../shared/section-title/SectionTitle';
const OurServices = () => {
  return (
    <div
      className="min-h-[80vh] w-full py-2"
      style={{
        backgroundImage: `url(${ServiceBanner})`,
      }}
    >
      <SectionTitle title="Our Services"></SectionTitle>
      <div className="  grid lg:grid-cols-3 mx-auto max-w-[1680px]">
        <div className="max-w-md text-center mx-auto py-6  lg:text-end gap-3 space-y-5">
          <div className="">
            <h1 className="text-2xl font-semibold">Experience support team</h1>
            <p className="px-3">
              Our dedicated team of experts is committed to providing
              unparalleled assistance and guidance, ensuring a seamless and
              satisfying experience for every customer interaction.
            </p>
          </div>
          <div>
            <h1 className="text-2xl font-semibold">
              Handle emergency situations
            </h1>
            <p>
              Handling emergency situations with swift and decisive action is
              our priority. Our trained team is equipped to respond promptly and
              effectively, ensuring safety and peace of mind during unexpected
              events.
            </p>
          </div>
          <div>
            <h1 className="text-2xl font-semibold">Insurance Included</h1>
            <p className="px-3">
              Rest assured with insurance included in every purchase, providing
              comprehensive coverage and peace of mind against unforeseen
              events. Drive confidently knowing that your investment is
              protected with our inclusive insurance policy.
            </p>
          </div>
          <div>
            <h1 className="text-2xl font-semibold">Car Customization</h1>
            <p className="px-3">
              Tailor your ride to perfection with our extensive customization
              options. From performance upgrades to personalized aesthetics,
              unlock the potential to create a vehicle that truly reflects your
              style and preferences.
            </p>
          </div>
        </div>
        <div className="mb-10 mx-auto">
          <img src={MiddleBanner} alt="" />
        </div>
        <div className="max-w-md text-center mx-auto py-6  lg:text-start gap-3 space-y-5">
          <div>
            <h1 className="text-2xl font-semibold">Delivery Services</h1>
            <p className="px-3">
              Experience the convenience of doorstep delivery with our reliable
              and efficient delivery services. From purchase to handover, trust
              us to ensure your vehicle arrives safely and promptly, wherever
              you are.
            </p>
          </div>
          <div>
            <h1 className="text-2xl font-semibold">Virtual Showroom</h1>
            <p className="px-3">
              Step into the future of car shopping with our immersive virtual
              showroom experience. Explore an extensive range of vehicles from
              the comfort of your home, with interactive features to help you
              make informed decisions.
            </p>
          </div>
          <div>
            <h1 className="text-2xl font-semibold">Car Valuation</h1>
            <p className="px-3">
              Unlock the true worth of your vehicle with our precise car
              valuation tool. Input key details and receive an accurate
              estimate, empowering you to make informed decisions about selling
              or trading in your car.
            </p>
          </div>
          <div>
            <h1 className="text-2xl font-semibold">Vehicle History Reports</h1>
            <p className="px-3">
              Gain peace of mind with our detailed vehicle history reports,
              offering comprehensive insights into a car's past. Uncover crucial
              information such as accident history, ownership records, and
              maintenance logs to make confident purchasing decisions.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurServices;
