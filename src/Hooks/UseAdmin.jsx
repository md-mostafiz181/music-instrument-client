import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./UseAxiosSecure";
import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProvider";

const UseAdmin = () => {
  const [axiosSecure] = useAxiosSecure();
  const { user,loading } = useContext(AuthContext)
  const { data: isAdmin = {}, isLoading } = useQuery({queryKey:['isAdmin'],enabled:!loading,queryFn:async()=>{
   const res = await axiosSecure.get(`/users/admin/${user?.email}`);
    return res.data;
  }})
  
  // useQuery(["isAdmin"], enable, async () => {
  
  // });
  return [isAdmin, isLoading];
};

export default UseAdmin;
