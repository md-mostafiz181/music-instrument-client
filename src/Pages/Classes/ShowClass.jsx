import React from "react";

const ShowClass = ({ approvedCls }) => {
  const { classImage, className, price, seats, totalStudent, instructorName } =
    approvedCls;
  console.log(approvedCls);
  return (
    <div className="card w-full bg-base-100 shadow-xl">
      <figure>
        <img src={classImage} alt="" />

      </figure>
      <div className="card-body">
        <h2 className="card-title uppercase font-bold">Class name: {className}</h2>
        <p className="font-bold">Price: <span className="text-blue-400">${price}</span></p>
        <p className="font-bold">Available seats: <span className="text-blue-400">{seats}</span></p>
        <p className="font-bold">Total Students: <span className="text-blue-400">{totalStudent}</span></p>
        <p className="font-bold">{instructorName}</p>
        <button className="btn btn-primary text-white">Selected</button>
      </div>
    </div>
  );
};

export default ShowClass;
