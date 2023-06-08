import React from 'react';
import { useLoaderData } from 'react-router-dom';
import SingleInstructor from './SingleInstructor';

const Instructors = () => {
    const instructors=useLoaderData()
    return (
        <div className='py-10  grid lg:grid-cols-3 md:grid-cols-2 gap-10'>
            {
               instructors.map(SingleIns=> <SingleInstructor
               key={SingleIns._id}
               SingleIns={SingleIns}
               ></SingleInstructor>)
            }
            
        </div>
    );
};

export default Instructors;