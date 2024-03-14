import { NavLink, Outlet } from 'react-router-dom';

const Dashboard = () => {
  return (
    <div>
      <div className="flex">
        <div className="w-60 min-h-screen  bg-[#d01818] text-white">
          <ul className="p-4 font-medium space-y-4 text-lg">
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink
                className={({ isActive }) =>
                  isActive ? 'text-black underline' : ''
                }
                to="/dashboard/user-profile"
              >
                My Profile
              </NavLink>
            </li>

            <li>
              <NavLink
                className={({ isActive }) =>
                  isActive ? 'text-black underline' : ''
                }
                to="/dashboard/add-items"
              >
                Add Items
              </NavLink>
            </li>

            <li>
              <NavLink
                className={({ isActive }) =>
                  isActive ? 'text-black underline' : ''
                }
                to="/dashboard/"
              >
                Make Payment
              </NavLink>
            </li>
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
