import React from "react";
import errorImg from "../../assets/error.jpg";
import { Link } from "react-router-dom";
import "./NotFound.css"

const NotFound = () => {
  return (
    <div>
      <img className="w-full h-[900px]" src={errorImg} alt="" />
      <div className="box">
        <Link to="/">
          <button className="btn font-bold text-white btn-primary home hover:bg-blue-600 ">
            Back Home
          </button>
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
