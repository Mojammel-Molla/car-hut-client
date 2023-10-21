import { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { AuthContext } from '../../provider/AuthProvider';
import UserImg from '../../assets/userImage.jpg';
const Navbar = () => {
  const { user, logOutUser } = useContext(AuthContext);

  const navLinks = (
    <>
      <li>
        <NavLink to="/" className="mr-5">
          Home
        </NavLink>
      </li>
      <li>
        <NavLink to="/cart" className="mr-5">
          My Cart
        </NavLink>
      </li>
      <li>
        <NavLink to="/addProduct" className="mr-5">
          Add Product
        </NavLink>
      </li>
      {/* <li>
        <NavLink to="/updateProduct">Update Product</NavLink>
      </li> */}
      <li>
        <NavLink to="/login">Log in</NavLink>
      </li>
    </>
  );

  const handleLogOut = () => {
    logOutUser();
  };
  return (
    <>
      <div className="navbar bg-base-100 shadow-md">
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
          {user ? (
            <div className="lg:mr-3">
              <img className="w-12 h-12 rounded-full" src={user?.photoURL} />
              <h1 className="font-medium mr-2">{user?.displayName}</h1>
            </div>
          ) : (
            <img className="w-12 h-12 rounded-full" src={UserImg} />
          )}
          <Link to="/login">
            <a onClick={handleLogOut} className="btn">
              {user ? 'Log out' : 'Login'}
            </a>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Navbar;
