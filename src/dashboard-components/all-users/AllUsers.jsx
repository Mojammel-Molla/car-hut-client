import { useEffect, useState } from 'react';
import SectionBanner from '../../shared/section-banner/SectionBanner';
import useAxios from '../../hooks/useAxios';
import Swal from 'sweetalert2';

const AllUsers = () => {
  const axios = useAxios();
  const [users, setUsers] = useState([]);
  useEffect(() => {
    axios.get('/users').then(res => setUsers(res.data));
  }, [axios]);
  console.log(users);

  const handleDelete = id => {
    // console.log(id);
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!',
    }).then(result => {
      if (result.isConfirmed) {
        axios.delete(`/users/${id}`).then(res => {
          res.data;

          console.log(res.data);
          if (res.data.deletedCount > 0) {
            Swal.fire('Deleted!', 'User has been deleted.', 'success');
          }
        });
      }
    });
  };
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
                  <button
                    onClick={() => handleDelete(user._id)}
                    className=" bg-red-600 text-white font-medium p-1 rounded-md hover:bg-slate-600"
                  >
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
