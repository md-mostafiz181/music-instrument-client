import React from 'react';
import UseAxiosSecure from '../../../Hooks/UseAxiosSecure';
import { useQuery } from '@tanstack/react-query';
import { data } from 'autoprefixer';
import Swal from 'sweetalert2';


const ManageClasses = () => {
    const [axiosSecure] = UseAxiosSecure();
    const { data: classes = [], refetch } = useQuery(['classes'], async () => {
        const res = await axiosSecure.get('/classes')
        console.log(data)
        return res.data;
        
    })

    const handleApprovedClass = (id) => {
        console.log(id);
        fetch(`https://music-learning-server.vercel.app/classes/${id}`, {
            method: 'PATCH'
        })
            .then(res => res.json())
            .then(data => {

                console.log(data)
                if (data.modifiedCount) {
                    refetch();
                    Swal.fire({
                        position: 'center',
                        icon: 'success',
                        title: 'Your class is approved',
                        showConfirmButton: false,
                        timer: 1500
                    })

                }
            })
    };
  
    

 

    return (

        <div className="overflow-x-auto w-full">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>
                                <label>
                                    #
                                </label>
                            </th>
                            <th>Image & Name</th>
                            <th>Instructor name</th>
                            <th>Instructor email</th>
                            <th>Available seats</th>
                            <th>Price</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            classes.map((cls, index) => <tr key={cls._id}>
                                <th>
                                    <label>
                                        {index + 1}
                                    </label>
                                </th>
                                <td>
                                    <div className="flex items-center space-x-3">
                                        <div className="avatar">
                                            <div className="mask mask-squircle w-12 h-12">
                                                <img src={cls.classImage}
                                                    alt="Avatar Tailwind CSS Component" />
                                            </div>
                                        </div>
                                        <div>
                                            <div className="font-bold">{cls.className}</div>

                                        </div>
                                    </div>
                                </td>
                                <td>
                                    {cls.instructorName}
                                </td>
                                <td>{cls.instructorEmail}</td>
                                <td>{cls.seats}</td>
                                <td>{cls.price}</td>
                                <th className='flex items-center gap-3'>
                                    <button onClick={()=> handleApprovedClass (cls._id)}  className="btn  btn-primary text-white">Approve</button>



                                </th >
                            </tr >)
                        }
                    </tbody >
                </table >
            </div >

    );
};

export default ManageClasses;