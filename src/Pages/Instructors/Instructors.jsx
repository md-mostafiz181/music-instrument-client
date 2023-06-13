import React from 'react';
import useUser from '../../Hooks/useUser';
import InstructorCard from '../Dashboard/Instructor/InstructorCard';

const Instructors = () => {
    const [users]=useUser();
    const instructor=users.filter(ins=>ins.role== 'instructor')
    console.log(instructor)
    return (
        <div className='grid md:grid-cols-3 sm:grid-cols-1 gap-3 py-5'>
            {
                instructor.map(singleIns=> <InstructorCard
                key={singleIns._id}
                singleIns={singleIns}
                ></InstructorCard>)
            }


            
            
        </div>
    );
};

export default Instructors;