import React from 'react';
import UseAxiosSecure from './UseAxiosSecure';
import { useQuery } from '@tanstack/react-query';

const useUser = () => {
    const [axiosSecure] = UseAxiosSecure();

    const {
      data: users = [],
      refetch,
      isLoading,
      isError,
    } = useQuery(["users"], async () => {
      try {
        const res = await axiosSecure.get("/users");
        return res.data;
      } catch (error) {
        throw new Error("Failed to fetch users");
      }

    });

    return [users,refetch,isLoading,isError,]
};

export default useUser;