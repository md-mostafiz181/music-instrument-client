
import { useContext } from "react";
import useAxiosSecure from "./UseAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import { AuthContext } from "../Providers/AuthProvider";

const UseInstructor = () => {
  const [axiosSecure] = useAxiosSecure();
  const { user,loading } = useContext(AuthContext);
  // const { data: isInstructor = {}, isLoading } = useQuery(
  //   ["isInstructor"],
  //   async () => {
  //     const res = await axiosSecure.get(`/users/instructor/${user?.email}`);
  //     return res.data;
  //   }
  // );
  const { data: isInstructor = {}, isLoading } = useQuery({queryKey:['isInstructor'],enabled:!loading,queryFn:async()=>{
    const res = await axiosSecure.get(`/users/instructor/${user?.email}`);
     return res.data;
   }})
  return [isInstructor, isLoading];
};

export default UseInstructor;

