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
          <div className="item-0 flex items-start rounded-[20px] pt-[30px] ps-[40px] max-[450px]:ps-[20px] max-[450px]:pt-[24px]">
            <div>
              <h3 className="text-[#0f0f0f] uppercase text-[48px] font-bold leading-normal max-[400px]:text-[36px]">
                caps
              </h3>
              <button className="flex items-center gap-[10px] rounded-[34px] bg-[#FFFFFF] py-[10px] px-[20px] max-[430px]:px-[10px] max-[430px]:gap-[5px]">
                <img className="max-[400px]:w-[70px] max-[400px]:h-[10px]" src={ShopNow} alt="" />
                <img className="w-[22px] h-[11px]" src={arrowRight} alt="" />
              </button>
            </div>
            <img className="all-menu-img-0" src={Caps} alt="" />
          </div>
           
          <div className="item-1 flex rounded-[20px] pt-[30px] ps-[40px] max-[450px]:ps-[20px] max-[450px]:pt-[24px]">
            <div>
              <h3 className="text-[#0f0f0f] uppercase text-[48px] font-bold leading-normal max-[400px]:text-[36px]">
               Jackets
              </h3>
              <button className="flex items-center gap-[10px] rounded-[34px] bg-[#FFFFFF] py-[10px] px-[20px] max-[430px]:px-[10px] max-[430px]:gap-[5px]">
                <img className="max-[400px]:w-[70px] max-[400px]:h-[10px]" src={ShopNow} alt="" />
                <img className="w-[22px] h-[11px]" src={arrowRight} alt="" />
              </button>
            </div>
            <img className="all-menu-img-1" src={Jackets} alt="" />
          </div>
           
          <div className="item-2 flex rounded-[20px] pt-[30px] ps-[40px] max-[450px]:ps-[20px] max-[450px]:pt-[24px]">
            <div>
              <h3 className="text-[#0f0f0f] uppercase text-[48px] font-bold leading-normal max-[400px]:text-[36px]">
              trousers  
              </h3>
              <button className="flex items-center gap-[10px] rounded-[34px] bg-[#FFFFFF] py-[10px] px-[20px] max-[430px]:px-[10px] max-[430px]:gap-[5px]">
                <img className="max-[400px]:w-[70px] max-[400px]:h-[10px]" src={ShopNow} alt="" />
                <img className="w-[22px] h-[11px]" src={arrowRight} alt="" />
              </button>
            </div>
            <img className="all-menu-img-2" src={Trousers} alt="" />
          </div>
           
          <div className="item-3 flex rounded-[20px] pt-[30px] ps-[40px] max-[450px]:ps-[20px] max-[450px]:pt-[24px] ">
            <div>
              <h3 className="text-[#0f0f0f] uppercase text-[48px] font-bold leading-normal max-[400px]:text-[36px]">
                SNAKERS
              </h3>
              <button className="flex items-center gap-[10px] rounded-[34px] bg-[#FFFFFF] py-[10px] px-[20px] max-[430px]:px-[10px] max-[430px]:gap-[5px]">
                <img className="max-[400px]:w-[70px] max-[400px]:h-[10px]" src={ShopNow} alt="" />
                <img className="w-[22px] h-[11px]" src={arrowRight} alt="" />
              </button>
            </div>
            <img className="all-menu-img-3" src={SNAKERS} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AllMenu;
