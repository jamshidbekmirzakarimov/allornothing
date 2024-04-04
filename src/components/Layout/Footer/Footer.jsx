import React from "react";
import Mailo from "../../../assets/svg/mailo.svg";
import Instagram from "../../../assets/svg/instagram.svg";
import Facebook from "../../../assets/svg/facebook.svg";
import Telegram from "../../../assets/svg/telegram.svg";
const Footer = () => {
  return (
    <>
      <footer>
        <div className="container">
          <div className="bg-[#262626] rounded-[20px]">
            <div className="w-full min-h-[226px] pt-[40px] ps-[40px] max-[400px]:ps-[20px] max-[800px]:pe-[20px]">
              <h2 className="text-[#F1C05B] text-[12px] leading-[16px] mb-[31px]">
                All or Nothing
              </h2>

              <div className="flex items-center w-full max-[780px]:flex-col max-[780px]:items-start " >
                <div className="flex items-center w-full max-[780px]:mb-[20px] max-[500px]:gap-[10px] ">
                  <div className="flex flex-col gap-y-[16px] me-[80px] max-[800px]:me-[40px] max-[500px]:me-[0] ">
                    <a
                      className="roboto font-normal text-[16px] leading-[18px] opacity-80 text-white whitespace-nowrap"
                      href="tel:+998998208008"
                    >
                      + 99 820 8008
                    </a>
                    <a
                      className="roboto font-normal text-[16px] leading-[18px] opacity-80 text-white"
                      href="tel:+998998208008"
                    >
                      + 99 820 8008
                    </a>
                  </div>

                  <div className="flex flex-col gap-y-[16px] me-[80px] max-[460px]:me-[0]">
                    <p className="roboto font-normal text-[16px] leading-[18px] opacity-80 text-white whitespace-nowrap max-[360px]:whitespace-normal">
                      Biz haqimizda
                    </p>
                    <p className="roboto font-normal text-[16px] leading-[18px] opacity-80 text-white whitespace-nowrap max-[360px]:whitespace-normal">
                      Ish vaqti 11:00 - 23:00
                    </p>
                  </div>
                </div>

                <div className="flex flex-col gap-y-[8px] me-[100px] max-[800px]:me-[0] max-[780px]:mb-[20px]">
                  <a
                    className="flex items-center max-w-[223px] bg-[#808080] gap-[8px] py-[6px] px-[12px] rounded-[8px]"
                    href="mailto:allornothing.uz@gmail.com"
                  >
                    <img src={Mailo} alt="" />
                    <p className="roboto font-normal text-[14px] leading-[16px] text-[#262626]">
                      allornothing.uz@gmail.com
                    </p>
                  </a>
                  <a
                    className="flex items-center bg-[#808080] gap-[8px] py-[6px] px-[12px] rounded-[8px]"
                    href="https://www.google.com/maps/place/41%C2%B017'54.2%22N+69%C2%B016'41.8%22E/@41.29839,69.278283,16z/data=!4m5!3m4!1s0x0:0x0!8m2!3d41.29839!4d69.278283"
                  >
                    <img src={Mailo} alt="" />
                    <p className="roboto font-normal text-[14px] leading-[16px] text-[#262626]">
                      T.sh Moirobod tuman. Fidokor 10. 4a uy
                    </p>
                  </a>
                </div>

                <div className="w-[1px] h-[44px] bg-[#333333] me-[100px] max-[800px]:hidden"></div>
                <ul className="flex items-center gap-[14px] max-[800px]:hidden">
                  <li>
                    <a
                      className="w-[44px] h-[44px] flex items-center justify-center rounded-[50%] bg-[#0D0D0D]"
                      href="https://www.instagram.com/all_or_nothing_shop"
                    >
                      <img src={Instagram} alt="" />
                    </a>
                  </li>
                  <li>
                    <a
                      className="w-[44px] h-[44px] flex items-center justify-center rounded-[50%] bg-[#0D0D0D]"
                      href="https://www.facebook.com/allornothinshop/"
                    >
                      <img src={Facebook} alt="" />
                    </a>
                  </li>
                  <li>
                    <a
                      className="w-[44px] h-[44px] flex items-center justify-center rounded-[50%] bg-[#0D0D0D]"
                      href="https://t.me/all_or_nothing_shop"
                    >
                      <img src={Telegram} alt="" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="w-full h-[1px] bg-[#0F0F0F]"></div>
            <div className="hidden max-[800px]:block">
              <div className="flex items-center justify-center">
                <ul className="flex items-center gap-[14px] py-[20px]">
                  <li>
                    <a
                      className="w-[44px] h-[44px] flex items-center justify-center rounded-[50%] bg-[#0D0D0D]"
                      href="https://www.instagram.com/all_or_nothing_shop"
                    >
                      <img src={Instagram} alt="" />
                    </a>
                  </li>
                  <li>
                    <a
                      className="w-[44px] h-[44px] flex items-center justify-center rounded-[50%] bg-[#0D0D0D]"
                      href="https://www.facebook.com/allornothinshop/"
                    >
                      <img src={Facebook} alt="" />
                    </a>
                  </li>
                  <li>
                    <a
                      className="w-[44px] h-[44px] flex items-center justify-center rounded-[50%] bg-[#0D0D0D]"
                      href="https://t.me/all_or_nothing_shop"
                    >
                      <img src={Telegram} alt="" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="ps-[40px] pt-[16px] pb-[14px] flex items-center gap-[9px]">
            <p className="roboto text-[12px] leading-[14px] font-normal text-[#7B7B7B]">
              Designer by:{" "}
              <span className="text-[#fff] font-medium">Og’abek Yusuf</span>
            </p>
            <p className="text-white font-normal text-[12px] leading-[14px] opacity-60 roboto">
              Getter.com December - 2022 year
            </p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
