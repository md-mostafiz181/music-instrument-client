import React from "react";
import { Link, NavLink, Outlet } from "react-router-dom";
import UseAdmin from "../Hooks/UseAdmin";
import UseInstructor from "../Hooks/UseInstructors";
import { FaAddressCard, FaAngellist, FaCalendarCheck, FaMendeley, FaSafari, FaUserCircle } from "react-icons/fa";
import { Helmet } from "react-helmet-async";



const Dashboard = () => {
  const [isAdmin]=UseAdmin();
  const [isInstructor]=UseInstructor();

  // const isAdmin=false;
  // const isInstructor=true;
  console.log(isAdmin,isInstructor)
  return (
    <div>
      <Helmet>
        <title>Music || Dashboard</title>
      </Helmet>
      <div className="drawer lg:drawer-open bg-slate-400 ">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col items-center justify-center ">
          {/* Page content here */}
          <label
            htmlFor="my-drawer-2"
            className="btn btn-primary drawer-button lg:hidden"
          >
            Open drawer
          </label>
          <Outlet />
        </div>
        <div className="drawer-side bg-slate-200 px-10">
          <label htmlFor="my-drawer-2" className="drawer-overlay"></label>

          {isAdmin?.admin ? (
            <>
              <li className="flex ">
                <NavLink className="mt-16 flex px-2 font-bold text-1xl uppercase font-popins " to="/dashboard/manageClass"> <FaMendeley className="mr-2 mt-1"></FaMendeley> Manage Classes</NavLink>
              </li>
              <li className="flex">
                <NavLink  className="mt-5 flex px-2 font-bold text-1xl uppercase font-popins "  to="/dashboard/menageUsers"> <FaCalendarCheck className="mr-2 mt-1"></FaCalendarCheck> Manage Users</NavLink>
              </li>
            </>
          ) : isInstructor?.instructor ? (
            <>
              <li className="flex ">
                <NavLink  className=" mt-16 font-bold flex px-2 text-1xl uppercase font-popins " to="/dashboard/addaClass"> <FaUserCircle className="mr-2 mt-1"></FaUserCircle > Add a Class</NavLink>
              </li>
              <li className="flex ">
                <NavLink  className=" mt-5 font-bold flex text-1xl uppercase font-popins " to="/dashboard/myClass"> <FaAddressCard className="mr-2 mt-1"></FaAddressCard> My Classes</NavLink>
              </li>
            </>
          ) : (
            <>
              <li className="flex ">
                <NavLink  className=" mt-16 font-bold flex text-1xl uppercase font-popins "> <FaSafari className="mr-2 mt-1"></FaSafari> My Selected Classes</NavLink>
              </li>
              <li className="flex ">
                <NavLink  className=" mt-5 font-bold flex text-1xl uppercase font-popins "> <FaAngellist className="mr-2 mt-1"></FaAngellist> My Enrolled Classes</NavLink>
              </li>
            </>
          )}

          <Link to="/"><button className="btn btn-primary mt-5">Back Home</button></Link>


        </div>
      </div>
    </div>
  );
};

export default Dashboard;
