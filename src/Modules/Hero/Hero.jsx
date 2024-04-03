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
                    <div className=" pt-[80px] max-[800px]:pt-[60px] ps-[80px] max-[800px]:ps-[40px] w-[736px] h-[197px] max-[400px]:pt-[32px] max-[400px]:ps-[20px]">
                      <button className="hero_btn absolute bottom-[-5px] left-[550px]  bg-[#265AD9] py-[26px] px-[37px]  rounded-[110px] text-[24px]   font-semibold uppercase leading-normal text-black max-[900px]:left-[40px] max-[900px]:bottom-[-50px] max-[580px]:bottom-[0px] max-[400px]:left-[20px] max-[580px]:py-[16px] max-[580px]:px-[25px] max-[480px]:bottom-[40px]">
                        <div className="flex items-center gap-[32px]">
                          <p className=" text-white max-[480px]:text-[15px] max-[580px]:text-[20px]">
                            view now all
                          </p>
                          <img
                            className="max-[680px]:w-[30px]"
                            src={arrowRight}
                            alt=""
                          />
                        </div>
                      </button>
                      <div className="max-w-[736px] max-[800px]:max-w-[575px] max-[680px]:max-w-[400px] max-[480px]:max-w-[300px] max-[375px]:max-w-[250px]">
                        <picture>
                          <source
                            media="(max--width: 350px)"
                            srcset={arrowRight}
                          />
                          <img src={TextImg} />
                        </picture>
                      </div>
                    </div>
                    <img
                      className="absolute top-[30px] max-[800px]:top-[160px] right-0 w-[466px] h-[450px] max-[800px]:w-[372px] max-[800px]:h-[360px] max-[480px]:w-[354px] max-[480px]:h-[369px] max-[480px]:right-[-60px] max-[370px]:h-[300px] max-[370px]:top-auto"
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
