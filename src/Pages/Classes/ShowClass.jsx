import React, { useContext } from "react";
import Swal from "sweetalert2";
import { AuthContext } from "../../Providers/AuthProvider";

const ShowClass = ({ approvedCls }) => {

    const {user}=useContext(AuthContext)
  const { classImage, className, price, seats, totalStudent, instructorName,_id } =
    approvedCls;
  console.log(approvedCls);


  const handleSelectClass = () => {
    if (user && user.email) {
        // setIsClassSelected(true);

        const selectClass = {
            classImage, className, email: user.email, instructorName, price, seats, classId: _id
        }

        fetch('http://localhost:5000/selectedClass', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(selectClass)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    // setIsClassSelected(true)
                    // refetch();
                    Swal.fire({
                        position: 'center',
                        icon: 'success',
                        title: 'selected class added',
                        showConfirmButton: false,
                        timer: 1500
                    })
                }
            })
    }
    else {
        Swal.fire({
            title: 'Please Login First',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Login Now'
        }).then((result) => {
            if (result.isConfirmed) {
                navigate('/login', { state: { from: location } })
            }
        })
    }
};
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
        <button onClick={()=>handleSelectClass(approvedCls)} className="btn btn-primary text-white">Selected</button>
      </div>
    </div>
  );
};

export default ShowClass;
