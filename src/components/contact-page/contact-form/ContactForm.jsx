import { useRef } from 'react';
import emailjs from '@emailjs/browser';

const ContactForm = () => {
  const form = useRef();
  const sendEmail = e => {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_q94iikh',
        'template_uu3q73a',
        form.current,
        'M8kMUdxUSwqGN3T7G'
      )
      .then(
        result => {
          console.log(result.text);
        },
        error => {
          console.log(error.text);
        }
      );
  };
  return (
    <div>
      <div className=" text-center ">
        <h1 className=" text-2xl md:text-4xl font-bold mt-5">Contact Us</h1>
        <p className="lg:text-xl font-medium mt-2">
          Want appointment? Fill in the form or send us.
        </p>
      </div>
      <form
        ref={form}
        onSubmit={sendEmail}
        className="card-body lg:w-1/2 mx-auto"
      >
        <div className="form-control">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input
            name="name"
            type="text"
            placeholder="Name"
            className="input input-bordered"
            required
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input
            name="email"
            type="email"
            placeholder="email"
            className="input input-bordered"
            required
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Your Massage</span>
          </label>
          <textarea
            name="massage"
            className=" rounded-md border-2 p-2"
            placeholder="Write here"
          ></textarea>
        </div>
        <div className="form-control mt-6">
          <button
            type="submit"
            className="btn hover:bg-slate-600 text-white bg-[#d01818]"
          >
            Sent Massage
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
