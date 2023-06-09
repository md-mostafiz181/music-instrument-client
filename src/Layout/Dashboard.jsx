import React from "react";
import { NavLink, Outlet } from "react-router-dom";

const Dashboard = () => {
  const isAdmin = true;
  return (
    <div>
      <div className="drawer lg:drawer-open">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col items-center justify-center">
          {/* Page content here */}
          <label
            htmlFor="my-drawer-2"
            className="btn btn-primary drawer-button lg:hidden"
          >
            Open drawer
          </label>
          <Outlet />
        </div>
        <div className="drawer-side">
          <label htmlFor="my-drawer-2" className="drawer-overlay"></label>

          {isAdmin ? (
            <>
              <li>
                <NavLink to="/dashboard/manageclasses">Manage Classes</NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/manageusers">Manage Users</NavLink>
              </li>
            </>
          ) : isInstructor ? (
            <>
              <li>
                <NavLink to="/dashboard/addclass">Add a Class</NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/instructorhome">My Classes</NavLink>
              </li>
            </>
          ) : (
            <>
              <li>
                <NavLink>My Selected Classes</NavLink>
              </li>
              <li>
                <NavLink>My Enrolled Classes</NavLink>
              </li>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
