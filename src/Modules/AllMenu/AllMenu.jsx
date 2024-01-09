import React from "react";
import "./AllMenu.scss";
import Caps from "../../assets/images/Caps.png";
import ShopNow from "../../assets/images/Shop-Now.svg";
import arrowRight from "../../assets/svg/arrowRight.svg";
import Trousers from "../../assets/images/trousers.png";
import Jackets from "../../assets/images/Jackets.png";
import SNAKERS from "../../assets/images/SNAKERS.png";
import SectionName from "../../constants/SectionName/SectionName";
const AllMenu = () => {
  return (
    <section className="all-menu mt-[100px]">
      <div className="container">
      <SectionName>All Menu</SectionName>
        <div className="angry-grid">
          <div className="item-0 flex items-start rounded-[20px] pt-[30px] ps-[40px]">
            <div>
              <h3 className="text-[#0f0f0f] uppercase text-[48px] font-bold leading-normal">
                caps
              </h3>
              <button className="flex items-center gap-[10px] rounded-[34px] bg-[#5BF1CD] py-[10px] px-[20px]">
                <img src={ShopNow} alt="" />
                <img className="w-[22px] h-[11px]" src={arrowRight} alt="" />
              </button>
            </div>
            <img src={Caps} alt="" />
          </div>
           
          <div className="item-1 flex rounded-[20px] pt-[30px] ps-[40px]">
            <div>
              <h3 className="text-[#0f0f0f] uppercase text-[48px] font-bold leading-normal">
               Jackets
              </h3>
              <button className="flex items-center gap-[10px] rounded-[34px] bg-[#93B5E3] py-[10px] px-[20px]">
                <img src={ShopNow} alt="" />
                <img className="w-[22px] h-[11px]" src={arrowRight} alt="" />
              </button>
            </div>
            <img src={Jackets} alt="" />
          </div>
           
          <div className="item-2 flex rounded-[20px] pt-[30px] ps-[40px]">
            <div>
              <h3 className="text-[#0f0f0f] uppercase text-[48px] font-bold leading-normal">
              trousers  
              </h3>
              <button className="flex items-center gap-[10px] rounded-[34px] bg-[#F7D96E] py-[10px] px-[20px]">
                <img src={ShopNow} alt="" />
                <img className="w-[22px] h-[11px]" src={arrowRight} alt="" />
              </button>
            </div>
            <img src={Trousers} alt="" />
          </div>
           
          <div className="item-3 flex rounded-[20px] pt-[30px] ps-[40px]">
            <div>
              <h3 className="text-[#0f0f0f] uppercase text-[48px] font-bold leading-normal">
                SNAKERS
              </h3>
              <button className="flex items-center gap-[10px] rounded-[34px] bg-[#B85BF0] py-[10px] px-[20px]">
                <img src={ShopNow} alt="" />
                <img className="w-[22px] h-[11px]" src={arrowRight} alt="" />
              </button>
            </div>
            <img src={SNAKERS} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AllMenu;
