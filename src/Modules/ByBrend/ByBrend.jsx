import React from "react";
import "./ByBrend.scss";
import SectionName from "../../constants/SectionName/SectionName";
import SeeAll from "../../assets/svg/seeall.svg";
import arrowRight from "../../assets/svg/arrowRight.svg";
import Newproduct1 from "../../assets/images/newproduct1.png";
import Newproduct2 from "../../assets/images/newproduct2.png";
import Newproduct3 from "../../assets/images/newproduct3.png";
import Newproduct4 from "../../assets/images/newproduct4.png";
import Newproduct5 from "../../assets/images/newproduct5.png";
import Newproduct6 from "../../assets/images/newproduct6.png";
import Newproduct7 from "../../assets/images/newproduct7.png";
import Newproduct8 from "../../assets/images/newproduct8.png";

const imagePaths = [
  Newproduct1,
  Newproduct2,
  Newproduct3,
  Newproduct4,
  Newproduct5,
  Newproduct6,
  Newproduct7,
  Newproduct8,
];

const ByBrend = () => {
  return (
    <section className="NewProduct mt-[80px]">
      <div className="container">
        <SectionName>News product</SectionName>
        <div className="grid grid-cols-[auto_1fr]">
          <div className="me-[64px]">
            <p className="text-white text-[64px] font-semibold uppercase w-full max-w-[500px] leading-normal">
              We have new products
            </p>
            <button className="bg-[#F6CE3C] py-[10px] px-[25px] rounded-[34px] flex items-center gap-[10px]">
              <img src={SeeAll} alt="" />
              <img className="w-[22px] h-[14px]" src={arrowRight} alt="" />
            </button>
          </div>
          <div className="New-list">
            {imagePaths.map((imagePath, index) => (
              <div
                key={index}
                className={`newitems-${
                  index + 1
                } bg-[#E6E6E6] rounded-[20px] flex items-center justify-center ${
                  index === 1 || index === 6 ? "overflow-hidden" : ""
                }`}
              >
                <img
                  className={
                    index === 1 || index === 6
                      ? "object-cover w-full h-full"
                      : ""
                  }
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
