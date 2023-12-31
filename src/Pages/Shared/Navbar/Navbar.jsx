import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../Providers/AuthProvider";
import logoImg from "../../../assets/logo.jpg";
import useUser from "../../../Hooks/useUser";
import Container from "../../../components/Container/Container";
import "./Navbar.css"

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);

  const [users] = useUser();

  const userRole = users.find((us) => us?.email === user?.email);

  const handleLogOut = () => {
    logOut()
      .then(() => {})
      .catch((error) => console.log(error));
  };
  const navOptions = (
    <>
      <li>
        <Link className="uppercase font-xl font-bold text-white mr-1" to="/">
          Home
        </Link>
      </li>

      <li>
        <Link
          className="uppercase font-xl font-bold text-white mr-1"
          to="/instructors"
        >
          Instructors
        </Link>
      </li>
      <li>
        <Link
          className="uppercase font-xl font-bold text-white mr-1"
          to="/classes"
        >
          Classes
        </Link>
      </li>

      {userRole?.role == "student" && (
        <li>
          <Link
            className="uppercase font-xl font-bold text-white mr-1"
            to="/dashboard/enrollClass"
          >
            Dashboard
          </Link>
        </li>
      )}

      {userRole?.role == "instructor" && (
        <li>
          <Link
            className="uppercase font-xl font-bold text-white mr-1"
            to="/dashboard/myClass"
          >
            Dashboard
          </Link>
        </li>
      )}

      {userRole?.role == "admin" && (
        <li>
          <Link
            className="uppercase font-xl font-bold text-white mr-1"
            to="/dashboard/menageUsers"
          >
            Dashboard
          </Link>
        </li>
      )}
    </>
  );
  return (
    <div id="navbar-part">
      <Container>
        <div className="navbar  ">
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
                className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 z-30"
              >
                {navOptions}
              </ul>
            </div>
            <img className="w-[40px] h-[40px]" src={logoImg} alt="" />
            <a className=" normal-case text-2xl font-bold ml-2">
              {" "}
              <span className="text-blue-400">Music</span>{" "}
              <span className="text-blue-600"> Hunt</span>
            </a>
          </div>
          <div className="navbar-center hidden lg:flex ">
            <ul className="menu menu-horizontal px-1 ">{navOptions}</ul>
          </div>
          <div className="navbar-end pr-3">
            {user ? (
              <>
                <div className="avatar online">
                  <div className="w-[50px] h-[45px] rounded-full ring ring-primary ring-offset-base-100 ring-offset-2 mr-3">
                    <img src={user?.photoURL} alt="" />
                  </div>
                </div>
                <button onClick={handleLogOut}>
                  <Link className="btn btn-primary text-white font-semibold font-popins">
                    Logout
                  </Link>
                </button>
              </>
            ) : (
              <>
                <button>
                  <Link
                    className="btn btn-primary text-white font-semibold font-popins"
                    to="/login"
                  >
                    Login
                  </Link>{" "}
                </button>
              </>
            )}
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Navbar;
