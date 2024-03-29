const Footer = () => {
  return (
    <footer className="footer p-10 bg-base-300 shadow-2xl text-base-content w-full mx-auto flex-col justify-around ">
      <nav>
        <header className="footer-title">Best Services</header>
        <a className="link link-hover hover:text-red-600 font-medium">
          Top Brand
        </a>
        <a className="link link-hover hover:text-red-600 font-medium">
          Unique Design
        </a>
        <a className="link link-hover hover:text-red-600 font-medium">
          Comfort First
        </a>
        <a className="link link-hover hover:text-red-600 font-medium">
          First Hand
        </a>
      </nav>
      <nav>
        <header className="footer-title"> About us</header>
        <a className="link link-hover hover:text-red-600 font-medium">
          Contact
        </a>
        <a className="link link-hover hover:text-red-600 font-medium">
          Delivery
        </a>
        <a className="link link-hover hover:text-red-600 font-medium">
          Warranty
        </a>
        <a className="link link-hover hover:text-red-600 font-medium">
          Documents
        </a>
      </nav>
      <nav>
        <header className="footer-title">Legal Vehicles</header>
        <a className="link link-hover hover:text-red-600 font-medium">
          Terms of use
        </a>
        <a className="link link-hover hover:text-red-600 font-medium">
          Security policy
        </a>
        <a className="link link-hover hover:text-red-600 font-medium">
          Safety policy
        </a>
      </nav>
      <form>
        <header className="font-extrabold text-3xl text-[#d01818] ">
          Car Hut
        </header>
        <fieldset className="form-control w-80">
          <label className="label">
            <span className="label-text">Enter your email address</span>
          </label>
          <div className="relative">
            <input
              type="text"
              placeholder="username@site.com"
              className="input input-bordered w-full pr-16"
            />
            <button className="btn bg-[#d01818]  hover:bg-[#253241] text-white absolute top-0 right-0 rounded-l-none">
              For query
            </button>
          </div>
        </fieldset>
      </form>
    </footer>
  );
};

export default Footer;
