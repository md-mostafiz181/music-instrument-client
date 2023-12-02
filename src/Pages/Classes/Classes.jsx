import React from "react";
import UseAxiosSecure from "../../Hooks/UseAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import ShowClass from "./ShowClass";
import { Helmet } from "react-helmet-async";


const Classes = () => {
  const [axiosSecure] = UseAxiosSecure();
  const { data: approvedClass = [] } = useQuery(["approvedClass"], async () => {
    const res = await axiosSecure.get("/approvedClass");
    return res.data;
  });
  return (
    <>
        <Helmet>
            <title>Music || Class</title>
        </Helmet>
   
      <div>
         
          <div className="bg-slate-300">
          <div className="py-5 grid md:grid-cols-3 gap-8">
            {approvedClass.map((approvedCls) => (
              <ShowClass
                key={approvedCls._id}
                approvedCls={approvedCls}
              ></ShowClass>
            ))}
          </div>
        </div>
          

      </div>

    </>
  );
};

export default Classes;
