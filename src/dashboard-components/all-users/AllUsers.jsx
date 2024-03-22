import { useEffect, useState } from 'react';
import SectionBanner from '../../shared/section-banner/SectionBanner';
import useAxios from '../../hooks/useAxios';

const AllUsers = () => {
  const axios = useAxios();
  const [users, setUsers] = useState([]);
  useEffect(() => {
    axios.get('/users').then(res => setUsers(res.data));
  }, [axios]);
  console.log(users);
  return (
    <div>
      <SectionBanner title="Dashboard" subTitle="All Users"></SectionBanner>

      <div className="overflow-x-auto max-w-7xl mx-auto">
        <table className="table table-zebra">
          <thead>
            <tr>
              <th>No:</th>
              <th>Name</th>
              <th>Email</th>
              <th>Role</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr key={user._id}>
                <th>{index + 1}</th>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.role}</td>
                <td>
                  <button className=" bg-red-600 text-white font-medium p-1 rounded-md hover:bg-slate-600">
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllUsers;
