import React, { useEffect, useState } from "react";
import { Slide } from "react-awesome-reveal";

const PopularClass = () => {
  const [popular, setPopular] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/popularClass")
      .then((res) => res.json())
      .then((data) => setPopular(data));
  }, []);

  return (
    <div className="py-10">
      <Slide>
        {" "}
        <h2 className="text-center text-4xl font-bold font-popins uppercase">
          Our Popular Class
        </h2>
        <p className="font-xl font-semibold font-popins text-center mt-2 mb-3">
          Its our popular class. Most of the students want <br /> to learn this
          kind of instrument.
        </p>
      </Slide>

      <div className="grid md:grid-cols-3 sm:grid-cols-1 gap-5 ">
        {popular.map((popular) => (
          <div className="card card-compact w-full bg-gray-300 shadow-xl">
            <figure>
              <img src={popular.classImage} alt="" />
            </figure>
            <div className="card-body text-center">
              <h2 className="text-3xl uppercase font-bold ">
                {popular.className}
              </h2>
              <p className="font-semibold font-popins">
                {popular.instructorEmail}
              </p>

              <p className="font-semibold font-popins">
                Price: ${popular.price}
              </p>
              <p className="font-semibold font-popins">Seats:{popular.seats}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PopularClass;
