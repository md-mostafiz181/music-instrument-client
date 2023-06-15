import React, { useContext } from "react";
import signUpImg from "../../assets/login.jpg";
import { Link, useNavigate } from "react-router-dom";
import { FaGoogle } from "react-icons/fa";
import { useForm } from "react-hook-form";
import { Helmet } from "react-helmet-async";
import { AuthContext } from "../../Providers/AuthProvider";
import Swal from "sweetalert2";
import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";

const SignUp = () => {

  const {signIn}=useContext(AuthContext)

  const auth=getAuth();
  const googleProvider= new GoogleAuthProvider();

  const handleGoogleSignIn=()=>{
    signInWithPopup(auth,googleProvider)
    .then(result=>{})
    
    .catch(error=>{
      console.log("error",error.message)
    })
  }
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const {createUser,updateUserProfile}=useContext(AuthContext);
  const navigate = useNavigate();

  const onSubmit = (data) => {
    console.log(data);
    createUser(data.email, data.password)
    .then(result=>{
      const loggedUser =result.user;
      console.log(loggedUser)
      updateUserProfile(data.name, data.photo)
      .then(()=>{
        console.log("user profile updated.")

        const addUser = {
          email: loggedUser.email,
          name: loggedUser.displayName,
          image: loggedUser.photoURL,
          role:"student"
         
        };
        fetch("http://localhost:5000/users", {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(addUser),
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.insertedId) {
              // alert("User added successfully");
            }
          });

        reset();
        Swal.fire({
          position: 'center',
          icon: 'success',
          title: 'User Profile Update successfully...',
          showConfirmButton: false,
          timer: 1500
        });

        navigate('/')



      })
      .catch(error=>console.log(error))
    })
  };

  // console.log(watch("example"));

  return (
    <>

    <Helmet>
      <title>Music || signUp</title>
    </Helmet>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left w-full">
            <img className="h-[780px] " src={signUpImg} alt="" />
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={handleSubmit(onSubmit)} className="card-body">
              <h1 className="text-3xl font-semibold text-center font-popins">
                Sign Up
              </h1>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name*</span>
                </label>
                <input
                  type="text"
                  name="name"
                  {...register("name", { required: true })}
                  placeholder="Name"
                  className="input input-bordered"
                />
                {errors.name && (
                  <span className="text-red-500 font-popins">
                    Name field is required
                  </span>
                )}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email*</span>
                </label>
                <input
                  type="email"
                  name="email"
                  {...register("email", { required: true })}
                  placeholder="email"
                  className="input input-bordered"
                />
                {errors.email && (
                  <span className="text-red-500 font-popins">
                    Email field is required
                  </span>
                )}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password*</span>
                </label>
                <input
                  type="password"
                  name="password"
                  {...register("password", {
                    required: true,
                    minLength: 6,
                    maxLength: 20,
                    pattern: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])/,
                  })}
                  placeholder="password"
                  className="input input-bordered"
                />
                {errors.password?.type === "required" && (
                  <p className="text-red-600">Password is required</p>
                )}
                {errors.password?.type === "minLength" && (
                  <p className="text-red-600">
                    Password must be six characters
                  </p>
                )}
                {errors.password?.type === "maxLength" && (
                  <p className="text-red-600">
                    Password must be less than 20 characters
                  </p>
                )}
                {errors.password?.type === "pattern" && (
                  <p className="text-red-600">
                    Password must have a lowercase, an uppercase a number and a
                    special character.
                  </p>
                )}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Confirm Password*</span>
                </label>
                <input
                  type="password"
                  name="confirm"
                  {...register("confirm", { required: true })}
                  placeholder="confirm password"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Photo Url*</span>
                </label>
                <input
                  type="text"
                  name="photo"
                  {...register("photo", { required: true })}
                  placeholder="photo url"
                  className="input input-bordered"
                />
                {errors.photo && (
                  <span className="text-red-500 font-popins">
                    Photo field is required
                  </span>
                )}
              </div>
              <div className="form-control mt-6 ">
                <input
                  className="btn btn-primary text-white font-popins"
                  type="submit"
                  value="Sign Up"
                />
              </div>

              <div className="divider">OR</div>

              <div className="form-control">
                <button onClick={handleGoogleSignIn} className="btn btn-primary text-white font-popins ">
                  {" "}
                  <FaGoogle></FaGoogle> Google{" "}
                </button>
              </div>
              <p className="font-popins font-bold">
                Already Have An Account?{" "}
                <Link to="/login" className="text-blue-800 underline">
                  Login
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignUp;
