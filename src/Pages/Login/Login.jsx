import React from "react";
import loginImg from "../../assets/login.jpg";
import {Link} from "react-router-dom"

const Login = () => {
    const handleToLogin = event=>{
        event.preventDefault();
        const form =event.target;
        const email = form.email.value;
        const password=form.password.value;
        console.log(email,password)
    }
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left  w-1/2">
          <img className="rounded-lg " src={loginImg} alt="" />
        </div>
        <form onSubmit={handleToLogin} className="card flex-shrink-0 w-full h-[620px] max-w-sm shadow-2xl bg-base-100 ">
          <div className="card-body">
            <div className="form-control">
                <h2 className="text-center text-3xl font-bold font-popins">Please Login!!</h2>
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                name="email"
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
                type="password"
                placeholder="password"
                name="password"
                className="input input-bordered"
                required
              />

            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Login</button>
            </div>

            <div className="divider">OR</div>

            <p className="font-popins ">New in Music Hunt?? <Link to="/signUp">Sign Up</Link></p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
