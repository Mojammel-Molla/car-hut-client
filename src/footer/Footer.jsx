const Footer = () => {
  return (
    <footer className="footer p-10 bg-base-200 text-base-content max-w-[1480px] mx-auto mt-10">
      <nav>
        <header className="footer-title">Best Services</header>
        <a className="link link-hover">Top Brand</a>
        <a className="link link-hover">Unique Design</a>
        <a className="link link-hover">Comfort First</a>
        <a className="link link-hover">First Hand</a>
      </nav>
      <nav>
        <header className="footer-title"> About us</header>
        <a className="link link-hover">Contact</a>
        <a className="link link-hover">Delivery</a>
        <a className="link link-hover">Warranty</a>
        <a className="link link-hover">Documents</a>
      </nav>
      <nav>
        <header className="footer-title">Legal Vehicles</header>
        <a className="link link-hover">Terms of use</a>
        <a className="link link-hover">Security policy</a>
        <a className="link link-hover">Safety policy</a>
      </nav>
      <form>
        <header className="footer-title">Newsletter</header>
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
            <button className="btn btn-primary absolute top-0 right-0 rounded-l-none">
              For query
            </button>
          </div>
        </fieldset>
      </form>
    </footer>
  );
};

export default Footer;
