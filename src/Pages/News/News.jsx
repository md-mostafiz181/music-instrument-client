import React from "react";
import news1 from "../../assets/news.jpg";
import news2 from "../../assets/news1.jpg";
import news3 from "../../assets/news3.jpg";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";

import { Pagination } from "swiper";
import { Fade } from "react-awesome-reveal";
import Container from "../../components/Container/Container";

import "./News.css"

const News = () => {
  return (
    <div id="news-part">
      <div className="overlay">

      <Container>
        <div className="text-center py-5 ">
          <Fade>
            <h1 className="lg:text-4xl md:text-3xl mt-4 sm:text-2xl font-bold font-popins text-white mb-5">
              Latest News
            </h1>
          </Fade>
          <p className="text-xl text-white font-semibold font-popins mb-5">
            The latest Music news is up to events in our concerts here! <br />{" "}
            Welcome to the music world!
          </p>

          <div className="mb-5">
            <Swiper
              slidesPerView={3}
              spaceBetween={30}
              pagination={{
                clickable: true,
              }}
              modules={[Pagination]}
              className="mySwiper"
            >
              <SwiperSlide>
                <img src={news1} alt="" />
              </SwiperSlide>
              <SwiperSlide>
                <img src={news2} alt="" />
              </SwiperSlide>
              <SwiperSlide>
                <img src={news3} alt="" />
              </SwiperSlide>
              <SwiperSlide>
                <img src={news2} alt="" />
              </SwiperSlide>
              <SwiperSlide>
                <img src={news1} alt="" />
              </SwiperSlide>
              <SwiperSlide>
                <img src={news2} alt="" />
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </Container>

      </div>

    </div>
  );
};

export default News;
