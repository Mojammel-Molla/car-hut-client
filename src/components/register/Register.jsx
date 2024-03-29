import { useContext } from 'react';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../provider/AuthProvider';
import toast, { Toaster } from 'react-hot-toast';
import RegisterImage from '../../assets/20863876_6387974.jpg';
import useAxios from '../../hooks/useAxios';
import Swal from 'sweetalert2';
const Register = () => {
  const { createUser, handleUserProfile } = useContext(AuthContext);
  const navigate = useNavigate();
  const axios = useAxios();
  const handleRegister = e => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    const photo = form.photo.value;
    const newUser = {
      name: name,
      email: email,
      role: 'user',
    };
    console.log(name, email, password, photo);
    if (!/^.{6,32}$/.test(password)) {
      toast.error('password is too short');
      return;
    } else if (!/(?=.*\W)/.test(password)) {
      toast.error('password should have special character');
      return;
    } else if (!/(?=.*[A-Z])/.test(password)) {
      toast.error('password should have capital letter');
      return;
    } else {
      createUser(email, password)
        .then(res => {
          handleUserProfile(name, photo);
          console.log(res.user);
          navigate('/');
        })
        .catch(err => {
          console.log(err);
        });

      axios.post('/users', newUser).then(res => {
        console.log(res.data);
        toast.success('User created successfully!');
      });
    }
  };
  return (
    <div className="lg:flex h-screen  items-center ">
      <div className="card  lg:w-1/2 mx-auto lg:mt-20 max-w-lg shadow-2xl bg-base-100">
        <form onSubmit={handleRegister} className="card-body">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input
              name="name"
              type="text"
              placeholder="name"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Photo</span>
            </label>
            <input
              name="photo"
              type="text"
              placeholder="photo"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              name="email"
              type="email"
              placeholder="email"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              name="password"
              type="password"
              placeholder="password"
              className="input input-bordered"
              required
            />
            <label className="label">
              <p href="#" className=" ">
                Already have an account?
                <Link
                  className="text-blue-600 ml-2 label-text-alt link link-hover font-bold"
                  to="/login"
                >
                  Log in
                </Link>
              </p>
            </label>
          </div>
          <div className="form-control mt-6">
            <button className="btn bg-[#d01818] text-white hover:bg-[#253241]">
              Register
            </button>
          </div>
        </form>
        <Toaster position="top-center" reverseOrder={false} />
      </div>
      <div className="lg:w-1/2 mx-auto">
        <img className="md:max-w-3xl" src={RegisterImage} alt="" />
      </div>
    </div>
  );
};

export default Register;
