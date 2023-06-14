import React, { useContext } from 'react';
import CheckOutForm from './CheckOutForm';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import { useQuery } from '@tanstack/react-query';
import UseAxiosSecure from '../../Hooks/UseAxiosSecure';
import { AuthContext } from '../../Providers/AuthProvider';

// TODO:provide publishable key


const stripePromise=loadStripe(import.meta.env.VITE_Payment_Gateway_PK);

const Payment = () => {

    const {user}=useContext(AuthContext)


    const [axiosSecure]=UseAxiosSecure();
    const {data:selectedClass=[]}=useQuery(['selectedClass'], async()=>{
        const res=await axiosSecure.get(`/selected?email=${user?.email}`);
        return res.data;

    })

    const total = selectedClass.reduce((sum, cls) => sum + cls.price, 0);
    const price = parseFloat(total.toString()).toFixed(2);
    return (
        <div className='w-full px-3 '>
            <h1 className='text-4xl text-center font-bold font-popins uppercase'>Payment Here</h1>
            <h1 className='text-3xl'>Payment first..... </h1>
            <Elements stripe={stripePromise}>
               <CheckOutForm
                    selectedClass={selectedClass}
                    price={price}
               ></CheckOutForm>

            </Elements>
            
            
        </div>
    );
};

export default Payment;