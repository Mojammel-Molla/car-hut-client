import { GrPhone, GrMailOption } from 'react-icons/gr';
import { MdLocationOn } from 'react-icons/md';
import SectionTitle from '../../shared/section-title/SectionTitle';
import ContactImage from '../../assets/Contact-image.jpg';
import { Link } from 'react-router-dom';
const ContactUs = () => {
  return (
    <div>
      <SectionTitle title="Get Into Us"></SectionTitle>
      {/* <section className="grid mt-5 gap-3 lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1">
        <div className="lg:p-20 shadow-2xl text-center rounded-2xl mx-auto">
          <GrMailOption className="text-2xl ml-20"></GrMailOption>

          <h2 className="font-semibold lg:ml-6">info@carhut.com</h2>
        </div>
        <div className="lg:p-20 shadow-2xl  text-center rounded-2xl  mx-auto">
          <MdLocationOn className="text-2xl ml-20"></MdLocationOn>
          <h2 className="font-semibold">Dhaka</h2>
          <p className="font-light">kuril chowrasta, badda, 1212</p>
        </div>
        <div className="lg:p-20 shadow-2xl rounded-2xl text-center  mx-auto">
          <GrPhone className=" ml-10 text-2xl"></GrPhone>

          <h2 className="font-semibold">+1300 138 892</h2>
          <p className="font-light">Monday - Saturday</p>
          <p className="font-light">9 AM - 6 PM</p>
        </div>
        <div className="lg:p-20 shadow-2xl rounded-2xl text-center  mx-auto">
          <GrPhone className=" ml-10 text-2xl"></GrPhone>

          <h2 className="font-semibold">+1300 138 892</h2>
          <p className="font-light">Monday - Saturday</p>
          <p className="font-light">9 AM - 6 PM</p>
        </div>
      </section> */}
      <div className="hero min-h-[80vh] bg-base-200">
        <div className="hero-content flex-col lg:flex-row gap-5">
          <img
            src={ContactImage}
            alt="Image"
            className="max-w-xl rounded-lg shadow-2xl"
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
