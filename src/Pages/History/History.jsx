import React from "react";
import "./History.css";
import historyImg from "../../assets/newsMusic.jpg";
import { FaPlayCircle } from "react-icons/fa";
import { Link } from "react-router-dom";
import { Fade } from "react-awesome-reveal";
import Container from "../../components/Container/Container";

const History = () => {
  return (
    <div id="history-part">
      <Container>
        <div className=" py-3">
          <Fade>
            {" "}
            <h1 className="lg:text-4xl md:text-3xl sm:text-2xl font-bold font-popins text-center text-blue-400 mb-4">
              The History
            </h1>
          </Fade>
          <p className="sm:text-xl font-normal font-popins px-2 text-center mb-4">
            What is MUSIC HUNT and for what purpose? There is no room for such
            silly <br /> questions! We are here for the music
          </p>

          <div className="grid md:grid-cols-2 sm:grid-cols-1">
            <div className="w-full bg-[#7071E8] py-24 px-3">
              <p className="font-semibold font-2xl text-white">
                This is MUSIC HUNT ACADEMY. Its a well known academy in this
                city. Most of the time we teach music instrument of the student
                in summer time. Because they get free time in this time. In this
                situation we arrange a lot of service in our academy.
              </p>
              <p className=" font-semibold font-2xl mt-3 text-white">
                {" "}
                If you want to purchase a service you first buy our courses. We
                are always give a better service for our student. There are a
                lots of musician here who teaches music instrument of the
                student.They are very experience about music. Happy journey with
                MUSIC HUNT ACADEMY.
              </p>
            </div>

            <div className="w-full history-Img">
              <img src={historyImg} alt="" />
              <div className="history-overlay">
                <Link to="https://youtu.be/mPr_SvnJ_z0">
                  <button className="text-white play-btn ">
                    {" "}
                    <FaPlayCircle className="text-8xl"></FaPlayCircle>
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default History;
