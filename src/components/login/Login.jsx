const Login = () => {
  const handleLogin = e => {
    e.preventDefault();
    const form = e.target;
    const name = form.email.value;
    const password = form.password.value;
    const user = { name, password };
    console.log(user);
  };
  return (
    <div className="card flex-shrink-0 w-full mx-auto  max-w-lg shadow-2xl bg-base-100">
      <form onClick={handleLogin} className="card-body">
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
            <a href="#" className="label-text-alt link link-hover">
              Forgot password?
            </a>
          </label>
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Login</button>
        </div>
      </form>
    </div>
  );
};

export default Login;
