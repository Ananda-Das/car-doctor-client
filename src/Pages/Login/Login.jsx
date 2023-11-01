import { Link, useLocation, useNavigate } from "react-router-dom";
import logImg from "../../../src/assets/images/login/login.svg";
import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import axios from "axios";

const Login = () => {
  const { signIn } = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();
  // console.log(location);

  const handleLogin = (e) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);

    const email = form.get("email");
    const password = form.get("password");

    // const user = { email, password };

    // console.log(user);
    // sign in user
    signIn(email, password)
      .then((result) => {
        const logedInUser = result.user;
        console.log(logedInUser);
        const user = { email };
        //get access token
        axios.post("http://localhost:5000/jwt", user, { withCredentials: true })
        .then((res) => {
          console.log(res.data);
          if (res.data.success) {
            navigate(location?.state ? location?.state : "/");
          }
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-row">
        <div className="text-center lg:text-left">
          <img src={logImg} alt="" />
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <h1 className="text-5xl font-bold text-center mt-5">Login now!</h1>
          <form onSubmit={handleLogin} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input type="email" placeholder="email" name="email" className="input input-bordered" required />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input type="password" placeholder="password" name="password" className="input input-bordered" required />
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
          <p className="text-center mb-7">
            Do not have an Account ?{" "}
            <Link to="/register" className="text-blue-600 underline">
              Register
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
