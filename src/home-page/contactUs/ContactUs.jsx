import SectionTitle from '../../shared/section-title/SectionTitle';
import ContactImage from '../../assets/Contact-image.jpg';
import { Link } from 'react-router-dom';
const ContactUs = () => {
  return (
    <div>
      {/* <SectionTitle title="Get Into Us"></SectionTitle> */}
      <div className="hero min-h-[80vh] bg-base-200">
        <div className="hero-content flex-col lg:flex-row gap-5">
          <img
            src={ContactImage}
            alt="Image"
            className="md:max-w-xl rounded-lg shadow-2xl"
          />
          <div>
            <h1 className=" text-2xl md:text-5xl font-semibold">
              Have More Questions? Don't Hesitate To Reach Us
            </h1>
            <p className="py-6">
              123 Queensberry Street, North <br /> Melbourne VIC3051, Australia.
            </p>

            <Link to="/contact-us">
              <button className="btn hover:bg-slate-600 text-white bg-[#d01818]">
                Get Started
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
