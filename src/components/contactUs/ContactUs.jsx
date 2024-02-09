import { GrPhone, GrMailOption } from 'react-icons/gr';
import { MdLocationOn } from 'react-icons/md';
const ContactUs = () => {
  return (
    <div>
      <h1 className="text-4xl text-center font-bold my-10">Contact Us</h1>
      <section className="grid mt-5 gap-3 lg:grid-cols-3  sm:grid-cols-1">
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
      </section>
    </div>
  );
};

export default ContactUs;
