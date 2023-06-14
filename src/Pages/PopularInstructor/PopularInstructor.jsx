import React, { useEffect, useState } from "react";
import { Slide } from "react-awesome-reveal";
import AOS from "aos"
import 'aos/dist/aos.css'

const PopularInstructor = () => {


  const [instructor, setInstructor] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/instructors")
      .then((res) => res.json())
      .then((data) => setInstructor(data));
  }, []);

  useEffect(()=>{
    
    AOS.init();
    },[])


  return (
    <div className="py-10 ">
      <Slide>
        <h1 className="text-center font-bold text-4xl font-popins uppercase text-blue-400 ">
          Popular Instructor
        </h1>
        <p className="text-center font-xl font-semibold font-popins">They are our popular instructor. They are always dedicated <br /> them self for their students.</p>
      </Slide>

      <div className="grid md:grid-cols-3 sm:grid-cols-1 gap-5 mt-5 " data-aos="fade-up">
        {instructor.slice(0, 6).map((ins) => (
          <div key={ins._id} className="card w-full bg-orange-300 shadow-xl">
            <figure>
              <img
                src={ins.image}
                alt=""
              />
            </figure>
            <div className="card-body">
              <h2 className="text-2xl uppercase font-popins  font-semibold text-center">{ins.name}</h2>
              

            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PopularInstructor;
