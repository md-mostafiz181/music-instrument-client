import React from "react";
import gal1 from "../../assets/gal1.jpg";
import gal2 from "../../assets/gal2.jpg";
import gal3 from "../../assets/gal3.jpg";
import gal4 from "../../assets/gal4.jpg";
import gal5 from "../../assets/gal5.jpg";
import gal6 from "../../assets/gal6.jpg";

const Gallery = () => {
  return (
    <div>
      <div className="text-center">
        <h1 className="text-4xl uppercase font-bold font-popins mt-5">
          Our Instrument
        </h1>
        <h3 className="text-xl font-semibold font-popin ">
          Its a bit of part of our instrument. We have lots of musical
          instrument.
        </h3>
      </div>

      <div className="grid lg:grid-cols-3 md:grid-cols-1 gap-5 px-2 py-4">
        <div className="card w-full bg-base-100 shadow-xl">
          <figure className="px-10 pt-10">
            <img src={gal1} alt="Shoes" className="rounded-xl" />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title font-bold">Guitar</h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
            <div className="card-actions">
              <button className="btn btn-primary">Buy Now</button>
            </div>
          </div>
        </div>

        <div className="card w-full bg-base-100 shadow-xl">
          <figure className="px-10 pt-10">
            <img src={gal2} alt="Shoes" className="rounded-xl" />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title font-bold">Frech Flute</h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
            <div className="card-actions">
              <button className="btn btn-primary">Buy Now</button>
            </div>
          </div>
        </div>

        <div className="card w-full bg-base-100 shadow-xl">
          <figure className="px-10 pt-10">
            <img src={gal3} alt="Shoes" className="rounded-xl" />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title font-bold">Dram</h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
            <div className="card-actions">
              <button className="btn btn-primary">Buy Now</button>
            </div>
          </div>
        </div>

        <div className="card w-full bg-base-100 shadow-xl">
          <figure className="px-10 pt-10">
            <img src={gal4} alt="Shoes" className="rounded-xl" />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title font-bold">Ukalale</h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
            <div className="card-actions">
              <button className="btn btn-primary">Buy Now</button>
            </div>
          </div>
        </div>

        <div className="card w-full bg-base-100 shadow-xl">
          <figure className="px-10 pt-10">
            <img src={gal5} alt="Shoes" className="rounded-xl" />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title font-bold">Bujong</h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
            <div className="card-actions">
              <button className="btn btn-primary">Buy Now</button>
            </div>
          </div>
        </div>

        <div className="card w-full bg-base-100 shadow-xl">
          <figure className="px-10 pt-10">
            <img src={gal6} alt="Shoes" className="rounded-xl" />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title font-bold">Piano</h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
            <div className="card-actions">
              <button className="btn btn-primary">Buy Now</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
