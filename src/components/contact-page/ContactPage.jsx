import SectionBanner from '../../shared/section-banner/SectionBanner';
import ContactDetails from './contact-details/ContactDetails';
import ContactForm from './contact-form/ContactForm';
import ContactMap from './contact-map/ContactMap';

const ContactPage = () => {
  return (
    <div className="w-full ">
      <SectionBanner title="Home" subTitle="Contact Us"></SectionBanner>
      <div className=" text-start p-3">
        <h1 className="lg:text-4xl font-bold mt-5">Contact Us</h1>

        <ContactMap></ContactMap>
      </div>
      <div className="md:flex gap-5  w-full p-2">
        <div className="md:w-1/2">
          <ContactForm></ContactForm>
        </div>
        <div className="md:w-1/2">
          <ContactDetails></ContactDetails>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
