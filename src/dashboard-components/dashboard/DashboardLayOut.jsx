import { useState } from 'react';
import { NavLink, Outlet } from 'react-router-dom';

const Dashboard = () => {
  const [show, setShow] = useState(false);
  const navLinks = (
    <>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink
          className={({ isActive }) =>
            isActive ? 'text-black underline px-6' : ''
          }
          to="/dashboard/my-profile"
        >
          My Profile
        </NavLink>
      </li>

      <li>
        <NavLink
          className={({ isActive }) =>
            isActive ? 'text-black underline px-6' : ''
          }
          to="/dashboard/add-items"
        >
          Add Items
        </NavLink>
      </li>

      <li>
        <NavLink
          className={({ isActive }) =>
            isActive ? 'text-black underline px-6' : ''
          }
          to="/dashboard/update-items"
        >
          Update Items
        </NavLink>
      </li>
      <li>
        <NavLink
          className={({ isActive }) =>
            isActive ? 'text-black underline px-6 ' : ''
          }
          to="/dashboard/all-users"
        >
          All Users
        </NavLink>
      </li>
    </>
  );
  return (
    <div>
      <div className="flex">
        <button onClick={() => setShow(!show)} className="btn absolute top-2">
          Show
        </button>
        <div
          className={`md:w-36 lg:w-60 min-h-screen  bg-[#d01818] text-white ${
            show ? '' : 'absolute -left-80'
          } `}
        >
          <ul className="p-2 md:p-5 mt-5 font-medium space-y-4 text-lg">
            {navLinks}
          </ul>
        </div>
        <div className="flex-1">
          <Outlet></Outlet>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
