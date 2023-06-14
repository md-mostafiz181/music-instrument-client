import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../Providers/AuthProvider";
import UseAxiosSecure from "../../../Hooks/UseAxiosSecure";
import { useQuery } from "@tanstack/react-query";

const MySelectedClass = () => {
    const {user,loading}=useContext(AuthContext)
//   const [classes, setClasses] = useState([]);

//   useEffect(() => {
//     fetch(`http://localhost:5000/selectedClass?email=${user?.email}`)
//       .then((res) => res.json())
//       .then((data) => setClasses(data));
//   }, []);

//   const { classImage, className, email, instructorName, price, seats } = classes;
//   console.log(classes)




const [axiosSecure]=UseAxiosSecure();
const {data:selectedClass=[]}=useQuery({
    queryKey:['selectedClass'],
    enabled:!loading,
    queryFn:async()=>{
        const res=await axiosSecure.get(`/selectedClass?email=${user?.email}`);
        return res.data;
    

    }
})

console.log(selectedClass)

  return (

    <div className="overflow-x-auto w-full">
    <table className="table">
        {/* head */}
        <thead >
            <tr className="bg-slate-200">
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
                selectedClass.map((cls, index) => <tr key={cls._id}>
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
                    <td>{cls.email}</td>
                    <td>{cls.seats}</td>
                    <td>{cls.price}</td>
                  <Link to={`/dashboard/payment/${cls._id}`}>  <button className="btn btn-primary font-semibold text-white mr-2 mt-2">Pay</button></Link>
                    <button className="btn btn-error font-semibold   text-white ">Delete</button>

                </tr >)
            }
        </tbody >
    </table >
</div >

  );
};

export default MySelectedClass;
