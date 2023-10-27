import { Link } from "react-router-dom";
import regImg from "../../../src/assets/images/login/login.svg";
import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";

const Register = () => {
  const { createUser } = useContext(AuthContext);

  const handleRegister = (e) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);

    const name = form.get("name");
    const email = form.get("email");
    const password = form.get("password");

    const user = { name, email, password };

    console.log(user);

    // create user
    createUser(email, password)
      .then((result) => {
        console.log(result.user);

        //save user data in to mongodb
        // const createdAt = result.user?.metadata?.creationTime;
        // const user = { email, createdAt: createdAt };
        // fetch("https://brand-shop-server-inky.vercel.app/users", {
        //   method: "POST",
        //   headers: {
        //     "content-type": "application/json",
        //   },
        //   body: JSON.stringify(user),
        // })
        //   .then((res) => res.json())
        //   .then((data) => {
        //     if (data.insertedId) {
        //       console.log("user added to the database");
        //     }
        //   });

        // navigate(location?.state ? location.state : "/");
        // toast.success("You Registerd Successfuly");

        // update profile info
        // updateProfile(result.user, {
        //   displayName: name,
        //   photoURL: photo,
        // }).then(() => {
        //   console.log("profile info updated");
        //   window.location.reload();
        // });
        // .catch();
      })
      .catch((error) => {
        console.error(error);
        // toast.error(error.message);
      });
  };
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-row">
        <div className="text-center lg:text-left">
          <img src={regImg} alt="" />
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <h1 className="text-5xl font-bold text-center mt-5">Register now!</h1>
          <form onSubmit={handleRegister} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input type="text" placeholder="Name" name="name" className="input input-bordered" required />
            </div>
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
              {/* <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label> */}
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Register</button>
            </div>
          </form>
          <p className="text-center mb-7">
            Already have an Account ?{" "}
            <Link to="/login" className="text-blue-600 underline">
              Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
