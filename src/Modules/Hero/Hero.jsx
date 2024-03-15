import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "./Hero.scss";
// import required modules
import { Pagination, Autoplay } from "swiper/modules";
import TextImg from "../../assets/svg/textimg.svg";
import arrowRight from "../../assets/svg/arrowRightWhite.svg";
import heroImg from "../../assets/images/heroImg.png";
const Hero = () => {
  return (
    <>
      <section className="hero-section -z-10 mt-[130px] max-[680px]:mt-[90px]">
        <div className="container">
          <div className="w-full h-[496px]">
            <Swiper
              spaceBetween={30}
              pagination={{
                clickable: true,
              }}
              modules={[Pagination, Autoplay]} // Autoplay modulini import qilish
              autoplay={{
                delay: 2500,
                disableOnInteraction: false,
              }} // autoplay eigizini true qilib berish
              className="mySwiper"
            >
              <SwiperSlide>
                <div className="hero-wrap rounded-[20px] h-[480px] max-[800px]:h-[520px] mt-[30px]">
                  <div className="relative">
                    <div className="relative pt-[80px] max-[800px]:pt-[60px] max-[] ps-[80px] max-[800px]:ps-[40px] w-[736px] h-[197px]">
                      <button className="hero_btn absolute bottom-[-5px] right-[-70px] max-[800px]:left-[40px] max-[800px]:bottom-[-100px] max-[680px]:bottom-[-20px] max-w-[300px] max-[680px]:max-w-[260px] bg-[#265AD9] py-[26px] px-[37px] max-[680px]:py-[20px] max-[680px]:px-[20px] rounded-[110px] text-[24px] max-[480px]:text-[20px] max-[480px]:py-[10px] max-[480px]:px-[10px] max-[480px]:bottom-[50px] max-[480px]:w-[200px] max-[480px]:ps-[20px] max-[480px]:pt-[20px] font-semibold uppercase leading-normal text-black">
                        <div className="flex items-center gap-[32px]">
                          <p className=" text-white">view now all</p>
                          <img
                            className="max-[680px]:w-[30px]"
                            src={arrowRight}
                            alt=""
                          />
                        </div>
                      </button>
                      <div className="max-w-[736px] max-[800px]:max-w-[575px] max-[680px]:max-w-[400px] max-[480px]:max-w-[300px]">
                        <img src={TextImg} alt="" />
                      </div>
                    </div>
                    <img
                      className="absolute top-[30px] max-[800px]:top-[160px] right-0 w-[466px] h-[450px] max-[800px]:w-[372px] max-[800px]:h-[360px] max-[480px]:w-[250px] max-[480px]:h-[300px] max-[480px]:top-[220px]"
                      src={heroImg}
                      alt=""
                    />
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
