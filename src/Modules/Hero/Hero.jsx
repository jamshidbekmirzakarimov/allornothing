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
import arrowRight from "../../assets/svg/arrowRight.svg";
import heroImg from "../../assets/images/heroImg.png";
const Hero = () => {
  return (
    <>
      <section className="hero-section -z-10 mt-[50px]">
        <div className="container">
          <div className="w-full h-[496px]">
            <Swiper
              spaceBetween={30}
              pagination={{
                clickable: true,
              }}
              modules={[Pagination]} // Autoplay modulini import qilish
              autoplay={{ delay: 2000 }} // autoplay eigizini true qilib berish
              className="mySwiper"
            >
              <SwiperSlide>
                <div className="hero-wrap rounded-[20px] h-[480px] mt-[30px]">
                  <div className="relative">
                    <div className="relative pt-[80px] ps-[80px] w-[736px] h-[197px]">
                      <button className="absolute bottom-[-5px] right-[-70px] max-w-[300px] bg-[#265AD9] py-[26px] px-[37px] rounded-[110px] text-[24px] font-semibold uppercase leading-normal text-black">
                        <div className="flex items-center gap-[32px]">
                          <p className="mt-[8px]">view now all</p>
                          <img src={arrowRight} alt="" />
                        </div>
                      </button>
                      <img src={TextImg} alt="" />
                    </div>
                    <img
                      className="absolute top-[30px] right-0 w-[466px] h-[450px]"
                      src={heroImg}
                      alt=""
                    />
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="bg-[red]  rounded-[20px] h-[480px] mt-[30px]">
                  <div className="relative">
                    <div className="relative pt-[80px] ps-[80px] w-[736px] h-[197px]">
                      <button className="flex items-center gap-[32px] absolute bottom-[-5px] right-[-70px] max-w-[300px] bg-[#265AD9] py-[26px] px-[37px] rounded-[110px] text-[24px] font-semibold uppercase leading-normal text-black">
                        view now all
                        <img src={arrowRight} alt="" />
                      </button>
                      <img src={TextImg} alt="" />
                    </div>
                    <img
                      className="absolute top-[30px] right-0 w-[466px] h-[450px]"
                      src={heroImg}
                      alt=""
                    />
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="hero-wrap rounded-[20px] h-[480px] mt-[30px]">
                  <div className="relative">
                    <div className="relative pt-[80px] ps-[80px] w-[736px] h-[197px]">
                      <button className="flex items-center gap-[32px] absolute bottom-[-5px] right-[-70px] max-w-[300px] bg-[#265AD9] py-[26px] px-[37px] rounded-[110px] text-[24px] font-semibold uppercase leading-normal text-black">
                        view now all
                        <img src={arrowRight} alt="" />
                      </button>
                      <img src={TextImg} alt="" />
                    </div>
                    <img
                      className="absolute top-[30px] right-0 w-[466px] h-[450px]"
                      src={heroImg}
                      alt=""
                    />
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="hero-wrap rounded-[20px] h-[480px] mt-[30px]">
                  <div className="relative">
                    <div className="relative pt-[80px] ps-[80px] w-[736px] h-[197px]">
                      <button className="flex items-center gap-[32px] absolute bottom-[-5px] right-[-70px] max-w-[300px] bg-[#265AD9] py-[26px] px-[37px] rounded-[110px] text-[24px] font-semibold uppercase leading-normal text-black">
                        view now all
                        <img src={arrowRight} alt="" />
                      </button>
                      <img src={TextImg} alt="" />
                    </div>
                    <img
                      className="absolute top-[30px] right-0 w-[466px] h-[450px]"
                      src={heroImg}
                      alt=""
                    />
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="hero-wrap rounded-[20px] h-[480px] mt-[30px]">
                  <div className="relative">
                    <div className="relative pt-[80px] ps-[80px] w-[736px] h-[197px]">
                      <button className="flex items-center gap-[32px] absolute bottom-[-5px] right-[-70px] max-w-[300px] bg-[#265AD9] py-[26px] px-[37px] rounded-[110px] text-[24px] font-semibold uppercase leading-normal text-black">
                        view now all
                        <img src={arrowRight} alt="" />
                      </button>
                      <img src={TextImg} alt="" />
                    </div>
                    <img
                      className="absolute top-[30px] right-0 w-[466px] h-[450px]"
                      src={heroImg}
                      alt=""
                    />
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="hero-wrap rounded-[20px] h-[480px] mt-[30px]">
                  <div className="relative">
                    <div className="relative pt-[80px] ps-[80px] w-[736px] h-[197px]">
                      <button className="flex items-center gap-[32px] absolute bottom-[-5px] right-[-70px] max-w-[300px] bg-[#265AD9] py-[26px] px-[37px] rounded-[110px] text-[24px] font-semibold uppercase leading-normal text-black">
                        view now all
                        <img src={arrowRight} alt="" />
                      </button>
                      <img src={TextImg} alt="" />
                    </div>
                    <img
                      className="absolute top-[30px] right-0 w-[466px] h-[450px]"
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
