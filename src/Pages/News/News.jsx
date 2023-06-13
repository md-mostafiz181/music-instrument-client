import React from "react";
import news1 from "../../assets/news.jpg";
import news2 from "../../assets/news1.jpg";
import news3 from "../../assets/news3.jpg";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";

import { Pagination } from "swiper";

const News = () => {
  return (
    <div className="text-center py-5 ">
      <h1 className="text-4xl font-bold font-popins">Latest News</h1>
      <p className="text-xl font-semibold font-popins mb-5">
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
  );
};

export default News;
