import React from 'react';
import errorImg from "../../assets/error.jpg"
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <div >
            <img  className='w-full h-[900px] relative' src={errorImg} alt="" />
            <Link to="/"><button className="btn font-bold text-white btn-primary hover:bg-blue-600 absolute bottom-[200px] left-[950px]">Back Home</button></Link>
            
            
        </div>
    );
};

export default NotFound;