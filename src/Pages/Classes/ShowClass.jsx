import React from "react";

const ShowClass = ({ approvedCls }) => {
  const { classImage, className, price, seats, totalStudent, instructorName } =
    approvedCls;
  console.log(approvedCls);
  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <figure>
        <img src={classImage} alt="" />

      </figure>
      <div className="card-body">
        <h2 className="card-title">Class name:{className}</h2>
        <p>Price: {price}</p>
        <p>Available seats: {seats}</p>
        <p>Total Students: {totalStudent}</p>
        <p>{instructorName}</p>
      </div>
    </div>
  );
};

export default ShowClass;
