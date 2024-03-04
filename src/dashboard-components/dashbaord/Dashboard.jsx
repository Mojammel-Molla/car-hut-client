const Dashboard = () => {
  const navLinks = (
    <>
      <li>Add Product</li>
      <li>Update Product</li>
      <li>Total Sells</li>
      <li>Transactions</li>
      <li>All Users</li>
    </>
  );
  return (
    <div>
      <div className="navbar  w-full   ">
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
        </div>
        <div className="navbar-start hidden lg:flex font-semibold">
          <ul className=" gap-5 px-1">{navLinks}</ul>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
