import React from "react";
import Zood from "../../../assets/svg/zood.svg";
import WhiteArrow from "../../../assets/svg/arrowRightWhite.svg";
import ArticleBg from "../../../assets/images/article-bg.png";
const Article = () => {
  return (
    <>
      <article className="pt-[140px] mb-[8px]">
        <div className="container">
          <div className="flex items-center justify-between bg-[#6EAEE3] rounded-[24px]">
            <div className="relative ps-[40px] pt-[60px] pb-[90px]">
              <div className=" flex items-center gap-[8px] mb-[20px]">
                <img src={Zood} alt="" />
                <h3 className="font-bold mb-[-7px] text-[40px] text-white uppercase leading-[56px]">
                  ood pay
                </h3>
              </div>
              <p className="w-[300px] leading-[64px] font-black uppercase text-[64px] text-[#262626]">
                bilan chegirma
              </p>
              <div className="flex gap-[40px] absolute top-[120px] left-[270px] bg-[#F91B1B] py-[15px] px-[40px] rounded-[40px] cursor-pointer">
                <p className="text-[20px] text-white font-bold leading-[28px]">20%</p>
                <img width={22} height={14} src={WhiteArrow} alt="" />
              </div>
            </div>
            <img src={ArticleBg} alt="" />
          </div>
        </div>
      </article>
    </>
  );
};

export default Article;
