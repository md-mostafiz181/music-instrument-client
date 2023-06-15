import React from "react";
import { useState } from "react";
import { useEffect } from "react";

const MyEnrolledClasses = () => {
  const [enroll, setEnroll] = useState([]);

  useEffect(() => {
    fetch("https://music-learning-server.vercel.app/enrollClass")
      .then((res) => res.json())
      .then((data) => setEnroll(data));
  }, []);

//   const { className, price, email, classImage, seat } = enroll;

  return (
    <div className="overflow-x-auto w-full">
      <table className="table">
        {/* head */}
        <thead>
          <tr className="bg-slate-200">
            <th>
              <label>#</label>
            </th>
            <th>Image & Name</th>
            <th>Instructor name</th>
            <th>Instructor email</th>
            <th>Available seats</th>
            <th>Price</th>

          </tr>
        </thead>
        <tbody>
          {enroll.map((cls, index) => (
            <tr key={cls._id}>
              <th>
                <label>{index + 1}</label>
              </th>
              <td>
                <div className="flex items-center space-x-3">
                  <div className="avatar">
                    <div className="mask mask-squircle w-12 h-12">
                      <img
                        src={cls.classImage}
                        alt="Avatar Tailwind CSS Component"
                      />
                    </div>
                  </div>
                  <div>
                    <div className="font-bold">{cls.className}</div>
                  </div>
                </div>
              </td>
              <td>{cls.instructorName}</td>
              <td>{cls.email}</td>
              <td>{cls.seats}</td>
              <td>{cls.price}</td>

            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MyEnrolledClasses;
