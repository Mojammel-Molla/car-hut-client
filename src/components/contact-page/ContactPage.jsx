import ContactDetails from './contact-details/ContactDetails';
import ContactForm from './contact-form/ContactForm';
import ContactMap from './contact-map/ContactMap';

const ContactPage = () => {
  return (
    <div className="w-full ">
      <div className=" text-start p-3">
        <h1 className="lg:text-4xl font-bold mt-5">Contact Us</h1>

        <ContactMap></ContactMap>
      </div>
      <div className="flex  w-full">
        <div className="w-1/2">
          <ContactForm></ContactForm>
        </div>
        <div className="w-1/2">
          <ContactDetails></ContactDetails>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
