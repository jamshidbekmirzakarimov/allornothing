import React from "react";
import "./ByBrend.scss";
import SectionName from "../../constants/SectionName/SectionName";
import SeeAll from "../../assets/svg/seeall.svg";
import arrowRight from "../../assets/svg/arrowRight.svg";
import Adidas from "../../assets/images/adidas.png";
import North from "../../assets/images/north.png";
import fourBrend from "../../assets/images/fourBrend.png";
import offwhite from "../../assets/images/offwhite.svg";
import bape from "../../assets/images/bape.png";
import fourBrend2 from "../../assets/images/fourBrend2.png";
import supreme from "../../assets/images/supreme.png";
import gap from "../../assets/images/gap.png";

const imagePaths = [
  Adidas,
  North,
  fourBrend,
  offwhite,
  bape,
  fourBrend2,
  supreme,
  gap,
];

const ByBrend = () => {
  return (
    <section className="NewProduct mt-[80px] ">
      <div className="container">
        <SectionName>News product</SectionName>
        <div className="grid grid-cols-[auto_1fr] max-[800px]:grid-cols-1">
          <div className="me-[48px] max-[800px]:mb-[40px]">
            <p className="text-white text-[64px] font-semibold uppercase w-full max-w-[500px] leading-normal max-[650px]:leading-[70px]   max-[650px]:text-[50px] max-[440px]:text-[45px] max-[405px]:text-[40px] max-[400px]:leading-[50px]">
              selection by brands
            </p>
            <button className="bg-[#F6CE3C] py-[10px] px-[25px] rounded-[34px] flex items-center gap-[10px]">
              <h2 className="uppercase font-normal text-[16px] leading-[22px] mb-[-2px]">
                by brand
              </h2>
              <img className="w-[22px] h-[14px]" src={arrowRight} alt="" />
            </button>
          </div>
          <div className="New-listBrend">
            {imagePaths.map((imagePath, index) => (
              <div
                key={index}
                className={`newitemsBrend-${
                  index + 1
                } bg-[#F5F5F5] rounded-[20px] flex items-center justify-center `}
              >
                <img
                  className={index === 2 ? "w-full h-full" : ""}
                  src={imagePath}
                  alt=""
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ByBrend;
