import React, { useEffect, useState } from "react";
import { Slide } from "react-awesome-reveal";
import AOS from "aos";
import "aos/dist/aos.css";
import Container from "../../components/Container/Container";
import "./PopularInstructor.css"

const PopularInstructor = () => {
  const [instructor, setInstructor] = useState([]);

  useEffect(() => {
    fetch("https://music-learning-server.vercel.app/instructors")
      .then((res) => res.json())
      .then((data) => setInstructor(data));
  }, []);

  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div id="popularInstructor-part" className="py-10 ">
      <div className="overlay"></div>
      <Container>
        <Slide>
          <h1 className="text-center font-bold lg:text-4xl md:text-3xl sm:text-3xl font-popins uppercase text-blue-400 ">
            Popular Instructor
          </h1>
          <p className="text-center  sm:text-xl text-white font-normal font-popins mt-3">
            They are our popular instructor. They are always dedicated <br />{" "}
            them self for their students.
          </p>
        </Slide>

        <div
          className="grid md:grid-cols-3 sm:grid-cols-1 gap-5 mt-5 px-2"
          data-aos="fade-up"
        >
          {instructor.slice(0, 6).map((ins) => (
            <div key={ins._id} className="card w-full bg-[#7071E8] shadow-xl">
              <figure>
                <img src={ins.image} alt="" />
              </figure>
              <div className="card-body">
                <h2 className="text-2xl uppercase text-white font-popins  font-semibold text-center">
                  {ins.name}
                </h2>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
};

export default PopularInstructor;
