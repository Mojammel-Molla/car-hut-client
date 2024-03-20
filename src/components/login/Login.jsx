import { Link, useNavigate } from 'react-router-dom';
import { FcGoogle } from 'react-icons/fc';
import { FaGithub } from 'react-icons/fa';
import { useContext } from 'react';
import { AuthContext } from '../../provider/AuthProvider';
import toast, { Toaster } from 'react-hot-toast';
import LoginImage from '../../assets/20863876_6387974.jpg';
const Login = () => {
  const { user, logInUser, handleGoogleLogIn, handleGithubLogIn } =
    useContext(AuthContext);
  const navigate = useNavigate();
  const handleLogin = e => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    const user = { email, password };
    console.log(user);
    logInUser(email, password)
      .then(res => {
        console.log(res.user);
        toast.success('Log in successful');
        navigate('/');
      })
      .catch(err => {
        console.log(err);
        toast.error('Please provide a valid user');
      });
  };

  // google log in
  const handleGoogle = () => {
    handleGoogleLogIn();
  };
  // Github log in
  const handleGithub = () => {
    handleGithubLogIn();
    // navigate('/');
  };
  return (
    <div className="lg:flex h-screen items-center ">
      <div className="card flex w-full mx-auto lg:mt-20 max-w-lg shadow-2xl bg-base-100">
        <form onSubmit={handleLogin} className="card-body">
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
              <p>
                Do not have account?
                <Link
                  className=" text-blue-600 ml-2 label-text-alt link link-hover font-bold"
                  to="/register"
                >
                  Register
                </Link>
              </p>
            </label>
          </div>
          <div className="form-control mt-6">
            <button className="btn bg-[#d01818] text-white hover:bg-[#253241]">
              Login
            </button>
          </div>
          <div className="flex justify-center mt-5">
            <button onClick={handleGoogle} className="btn">
              <FcGoogle className="text-2xl mt-1"></FcGoogle>Google
            </button>
            {/* <button onClick={handleGithub} className="btn">
            <FaGithub></FaGithub> Github
          </button> */}
          </div>
        </form>
        <Toaster position="top-center" reverseOrder={false} />
      </div>
      <div className="lg:w-1/2 ">
        <img className="md:max-w-3xl" src={LoginImage} alt="" />
      </div>
    </div>
  );
};

export default Login;
