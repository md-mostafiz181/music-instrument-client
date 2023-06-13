import React from 'react';

const InstructorCard = ({singleIns}) => {
    const{image,name,email}=singleIns;
    return (
        <div className="card card-compact w-full bg-base-100 shadow-xl">
        <figure><img src={image} alt="Shoes" /></figure>
        <div className="card-body">
          <h2 className="card-title font-bold uppercase font-popins">{name}</h2>
          <p className='font-semibold font-semibold'>{email}</p>
        </div>
      </div>
    );
};

export default InstructorCard;