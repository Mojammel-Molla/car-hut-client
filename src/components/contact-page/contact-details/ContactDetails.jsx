import { GrPhone, GrMailOption } from 'react-icons/gr';
import { MdLocationOn } from 'react-icons/md';
const ContactDetails = () => {
  return (
    <div className=" w-full mx-auto ">
      <section
        className=" mt-5 border-2 rounded-lg 
      max-w-xl p-5 h-[500px] space-y-10"
      >
        <div>
          <h1 className="text-2xl font-semibold mt-5">Contact Details</h1>
          <p>
            Easily reach out to us for any inquiries or assistance. Our contact
            details are readily available to provide you with swift and reliable
            support.
          </p>
        </div>
        <div className="flex gap-2 my-3">
          <MdLocationOn className="text-4xl"></MdLocationOn>
          <div>
            <h2 className="font-semibold">Address</h2>
            <p className="font-light">
              123 Queens berry Street, <br /> North Melbourne VIC3051,
              Australia.
            </p>
          </div>
        </div>
        <div className="flex gap-3 my-3">
          <GrMailOption className="text-3xl"></GrMailOption>
          <div>
            <h2 className="font-semibold">Email</h2>
            <p className="font-light">info@carhut.com</p>
          </div>
        </div>
        <div className="flex gap-3 my-3">
          <GrPhone className="  text-3xl"></GrPhone>
          <div>
            <h2 className="font-semibold">Phone</h2>
            <p className="font-light">+1300 138 892 221</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactDetails;
