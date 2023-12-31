import React from 'react';
import { useContext } from 'react';
import { AuthContext } from '../../../Providers/AuthProvider';
import UseAxiosSecure from '../../../Hooks/UseAxiosSecure';
import { useQuery } from '@tanstack/react-query';
import { Link } from 'react-router-dom';

const MyClass = () => {

    const { user } = useContext(AuthContext);
    const [axiosSecure] = UseAxiosSecure();
    const { data: MyClasses = [] } = useQuery(['MyClasses'], async () => {
        const res = await axiosSecure.get(`/myClass?email=${user?.email}`)
        return res.data;
    })
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
                        <th>Instructor email</th>
                        <th>Available seats</th>
                        <th>Price</th>
                        <th>Status</th>
                        <th>Feedback</th>
                        <th>Enrolled Student</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        MyClasses.map((cls, index) => <tr key={cls._id}>
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
                            <td>{cls.instructorEmail}</td>
                            <td className="text-center">{cls.seats}</td>
                            <td>{cls.price}</td>
                            <td>{cls.status}</td>
                            <td>{cls.feedback}</td>
                            <td className="text-center">{cls.totalStudent}</td>
                            <td><button  className='btn btn-primary text-white'>update now</button></td>
                        </tr >)
                    }
                </tbody >
            </table >
        </div >



    );
    
   
};

export default MyClass;