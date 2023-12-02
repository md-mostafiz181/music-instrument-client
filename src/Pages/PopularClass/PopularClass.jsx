import React, { useEffect, useState } from "react";
import { Slide } from "react-awesome-reveal";
import AOS from "aos";
import "aos/dist/aos.css";
import Container from "../../components/Container/Container";

const PopularClass = () => {
  const [popular, setPopular] = useState([]);

  useEffect(() => {
    AOS.init();
  }, []);

  useEffect(() => {
    fetch("https://music-learning-server.vercel.app/popularClass")
      .then((res) => res.json())
      .then((data) => setPopular(data));
  }, []);

  return (
    <div className="py-10">
      <Container>
        <Slide>
          {" "}
          <h2 className="text-center lg:text-4xl md:text-3xl sm:text-2xl font-bold font-popins uppercase text-blue-400">
            Our Popular Class
          </h2>
          <p className="sm:text-xl font-normal font-popins text-center mt-2 mb-3">
            Its our popular class. Most of the students want <br /> to learn
            this kind of instrument.
          </p>
        </Slide>

        <div
          className="grid md:grid-cols-3 sm:grid-cols-1 gap-5 px-2 "
          data-aos="fade-up"
        >
          {popular.map((popular) => (
            <div className="card card-compact w-full bg-[#7071E8] shadow-xl">
              <figure>
                <img src={popular.classImage} alt="" />
              </figure>
              <div className="card-body text-center">
                <h2 className="text-3xl text-white uppercase font-bold ">
                  {popular.className}
                </h2>
                <p className="font-semibold font-popins">
                  {popular.instructorEmail}
                </p>

                <p className="font-semibold font-popins">
                  Price: ${popular.price}
                </p>
                <p className="font-semibold font-popins">
                  Seats:{popular.seats}
                </p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
};

export default PopularClass;
