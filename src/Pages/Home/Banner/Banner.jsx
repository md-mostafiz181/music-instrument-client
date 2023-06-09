import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper";
import banner1 from "../../../assets/banner1.jpg"
import banner2 from "../../../assets/banner2.jpg"
import banner3 from "../../../assets/banner3.jpg"
import banner4 from "../../../assets/banner4.jpg"
import banner5 from "../../../assets/banner5.jpg"
import banner6 from "../../../assets/banner6.jpg"
import "./Banner.css"




const Banner = () => {
    return (

        <Swiper navigation={true} modules={[Navigation]} className="mySwiper ">
        <SwiperSlide  >
            <img className="w-full relative min-h-[700px] " src={banner1} alt="" />
            <div className="overlay absolute pt-24  center">
                <h1 className="text-center pt-20 text-white text-5xl  font-semibold font-popins ">Grow your <span className="text-blue-400">music skills </span> with <br /> Music Hunt Academy</h1>
                <p className="text-center text-white font-semibold pt-3 font-popins">Music is everybody’s possession. It’s only publishers <br /> who think that people own it.</p>
               <div className="text-center mt-3">
               <button className="btn font-bold text-white btn-primary hover:bg-blue-600 ">Explore Us</button>
               </div>
            </div>
        
        </SwiperSlide>
        <SwiperSlide ><img className="w-full min-h-[700px] " src={banner2} alt="" />
        <div className="overlay absolute pt-24">
                <h1 className="text-center pt-20 text-white text-5xl font-semibold font-popins">Grow your <span className="text-blue-400">music skills </span> with <br /> Music Hunt Academy</h1>
                <p className="text-center text-white font-semibold pt-3 font-popins">Music is everybody’s possession. It’s only publishers <br /> who think that people own it.</p>
                <div className="text-center mt-3">
                <button className="btn font-bold text-white btn-primary hover:bg-blue-600 ">Explore Us</button>
               </div>
            </div>
        </SwiperSlide>
        <SwiperSlide ><img className="w-full min-h-[700px] " src={banner3} alt="" />
        <div className="overlay absolute pt-24">
                <h1 className="text-center pt-20 text-white text-5xl font-semibold font-popins">Grow your <span className="text-blue-400">music skills </span>  with <br /> Music Hunt Academy</h1>
                <p className="text-center text-white font-semibold pt-3 font-popins">Music is everybody’s possession. It’s only publishers <br /> who think that people own it.</p>
                <div className="text-center mt-3">
                <button className="btn font-bold text-white btn-primary hover:bg-blue-600 ">Explore Us</button>
               </div>
            </div>
        </SwiperSlide>
        <SwiperSlide ><img className="w-full min-h-[700px] " src={banner4} alt="" />
        <div className="overlay absolute pt-24">
                <h1 className="text-center pt-20 text-white text-5xl font-semibold font-popins">Grow your <span className="text-blue-400">music skills </span>  with <br /> Music Hunt Academy</h1>
                <p className="text-center text-white font-semibold pt-3 font-popins">Music is everybody’s possession. It’s only publishers <br /> who think that people own it.</p>
                <div className="text-center mt-3">
                <button className="btn font-bold text-white btn-primary hover:bg-blue-600 ">Explore Us</button>
               </div>
            </div>
        </SwiperSlide>
        <SwiperSlide ><img className="w-full min-h-[700px] " src={banner5} alt="" />
        <div className="overlay absolute pt-24">
                <h1 className="text-center pt-20 text-white text-5xl font-semibold font-popins">Grow your <span className="text-blue-400">music skills </span>  with <br /> Music Hunt Academy</h1>
                <p className="text-center text-white font-semibold pt-3 font-popins">Music is everybody’s possession. It’s only publishers <br /> who think that people own it.</p>
                <div className="text-center mt-3">
                <button className="btn font-bold text-white btn-primary hover:bg-blue-600 ">Explore Us</button>
               </div>
            </div>
        </SwiperSlide>
        <SwiperSlide ><img className="w-full min-h-[700px] " src={banner6} alt="" />
        <div className="overlay absolute pt-24">
                <h1 className="text-center pt-20 text-white text-5xl font-semibold font-popins">Grow your <span className="text-blue-400">music skills </span>  with <br /> Music Hunt Academy</h1>
                <p className="text-center text-white font-semibold pt-3 font-popins">Music is everybody’s possession. It’s only publishers <br /> who think that people own it.</p>
                <div className="text-center mt-3">
                <button className="btn font-bold text-white btn-primary hover:bg-blue-600 ">Explore Us</button>
               </div>
            </div>
        </SwiperSlide>

     
      </Swiper>

   
    );
};

export default Banner;