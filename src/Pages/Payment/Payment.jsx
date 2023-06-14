import React, { useContext } from 'react';
import CheckOutForm from './CheckOutForm';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import { useQuery } from '@tanstack/react-query';
import UseAxiosSecure from '../../Hooks/UseAxiosSecure';
import { AuthContext } from '../../Providers/AuthProvider';
import { useParams } from 'react-router-dom';

// TODO:provide publishable key


const stripePromise=loadStripe(import.meta.env.VITE_Payment_Gateway_PK);

const Payment = () => {

    const {user,loading}=useContext(AuthContext);
    console.log(user)


    const {id}=useParams()


    const [axiosSecure]=UseAxiosSecure();
    const {data:selectedClass=[]}=useQuery({
        queryKey:['selectedClass'],
        enabled:!loading,
        queryFn:async()=>{
            const res=await axiosSecure.get(`/selectedClass?email=${user?.email}`);
            return res.data;
        

        }
    })

    // useQuery(['selectedClass'], async()=>{
    //    


    // })

    console.log(selectedClass)


    const singleClasses=selectedClass.find(cls=>cls._id===id);
    console.log(singleClasses)


    // const total = selectedClass.reduce((sum, cls) => sum + cls.price, 0);
    // const price = parseFloat(total.toString()).toFixed(2);
    return (
        <div className='w-full px-3 '>
            <h1 className='text-4xl text-center font-bold font-popins uppercase'>Payment Here</h1>
            <h1 className='text-3xl font-bold font-popins'>Payment first..... </h1>
            <Elements stripe={stripePromise}>
               <CheckOutForm
                    singleClass={singleClasses}
                   
               ></CheckOutForm>

            </Elements>
            
            
        </div>
    );
};

export default Payment;