import { Link, NavLink } from 'react-router-dom';

const Navbar = () => {
  const navLinks = (
    <>
      <li>
        <NavLink to="/" className="mr-5">
          Home
        </NavLink>
      </li>
      <li>
        <NavLink to="/myCart" className="mr-5">
          My Cart
        </NavLink>
      </li>
      <li>
        <NavLink to="/addProduct" className="mr-5">
          Add Product
        </NavLink>
      </li>
      <li>
        <NavLink to="login">Log in</NavLink>
      </li>
    </>
  );
  return (
    <>
      <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              {navLinks}
            </ul>
          </div>
          <a className="btn btn-ghost font-extrabold text-4xl">Car Hut</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{navLinks}</ul>
        </div>
        <div className="navbar-end">
          <Link to="/login">
            <a className="btn">Login</a>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Navbar;
