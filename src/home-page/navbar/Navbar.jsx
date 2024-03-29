import { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { AuthContext } from '../../provider/AuthProvider';
import UserImg from '../../assets/userImage.jpg';
import Logo from '../../assets/logo.png';
const Navbar = () => {
  const { user, logOutUser } = useContext(AuthContext);

  const navLinks = (
    <>
      <NavLink
        className={({ isActive }) =>
          isActive ? 'font-bold underline text-red-600' : ' '
        }
        to="/"
      >
        <li>Home</li>
      </NavLink>
      <NavLink
        className={({ isActive }) =>
          isActive ? 'font-bold underline text-red-600' : ' '
        }
        to="/cart"
      >
        <li>Wishlist</li>
      </NavLink>

      <NavLink
        className={({ isActive }) =>
          isActive ? 'font-bold underline text-red-600' : ' '
        }
        to="/about"
      >
        <li>About Us</li>
      </NavLink>

      {/* <NavLink to="/reviews">
        <li>Reviews</li>
      </NavLink> */}

      <NavLink
        className={({ isActive }) =>
          isActive ? 'font-bold underline text-red-600' : ' '
        }
        to="/blog"
      >
        <li>Blogs</li>
      </NavLink>

      <NavLink
        to="/contact-us"
        className={({ isActive }) =>
          isActive ? 'font-bold underline text-red-600' : ' '
        }
      >
        <li>Contact Us</li>
      </NavLink>
      <NavLink
        to="/dashboard/my-profile"
        className={({ isActive }) =>
          isActive ? 'font-bold underline text-red-600' : ' '
        }
      >
        <li>Dashboard</li>
      </NavLink>

      <NavLink to="/login">
        {' '}
        <li>{user ? 'Log out' : 'Log in'}</li>
      </NavLink>
    </>
  );

  const handleLogOut = () => {
    logOutUser();
  };
  return (
    <>
      <div className="navbar px-5 w-full bg-base-200 shadow-md">
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
          <div className="w-26">
            <img className="h-10 w-13  mx-auto " src={Logo} alt="" />
            <a className="font-extrabold md:text-4xl text-[#d01818]">Car Hut</a>
          </div>
        </div>
        <div className="navbar-center hidden lg:flex font-semibold">
          <ul className="menu menu-horizontal gap-5 px-1">{navLinks}</ul>
        </div>
        <div className="navbar-end">
          {user ? (
            <div className="lg:mr-3">
              <img
                className="w-12 h-12 mx-auto rounded-full"
                src={user?.photoURL}
              />
              <h1 className="font-medium">{user?.displayName}</h1>
            </div>
          ) : (
            <img className="w-12 h-12 rounded-full" src={UserImg} />
          )}
          <Link to="/login">
            <button
              onClick={handleLogOut}
              className="btn text-white bg-red-600 hover:bg-slate-600"
            >
              {user ? 'Log out' : 'Login'}
            </button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Navbar;
