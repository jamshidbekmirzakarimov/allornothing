import React from "react";
import "./Profile.scss";
import JacketsProfile from "../../assets/images/Jackets-profile.png";
import vapormaxProfile from "../../assets/images/vapormax-profile.png"
import Kaws from "../../assets/images/kaws.png"
import ArrowRight from "../../assets/svg/arrowRight.svg";
import adidasterrex from "../../assets/images/adidas-terrex-multi-rain.png"
const Profile = () => {
  return (
    <>
      <section className="px-[56px] max-[500px]:px-[10px]">
        <div className="flex gap-[122px]">
          <form className="w-[530px] max-[1190px]:w-full">
            <div className="flex flex-col mb-[24px]">
              <label
                className="roboto ps-[5px] font-normal text-[14px] leading-[20px] text-[#D9D9D9] mb-[8px]"
                htmlFor="name"
              >
                Name
              </label>
              <input
                className="placeholder:font-medium placeholder:text-[16px] placeholder:leading-[20px] placeholder:roboto roboto placeholder:text-[#666666] rounded-[8px] text-white pt-[12px] pb-[10px] ps-[20px] bg-[#333333] border-none outline-none "
                type="text"
                id="name"
                placeholder="Name"
              />
            </div>
            <div className="flex flex-col mb-[24px]">
              <label
                className="roboto ps-[5px] font-normal text-[14px] leading-[20px] text-[#D9D9D9] mb-[8px]"
                htmlFor="Sorname"
              >
                Sorname
              </label>
              <input
                className="placeholder:font-medium placeholder:text-[16px] placeholder:leading-[20px] placeholder:roboto roboto placeholder:text-[#666666] rounded-[8px] text-white pt-[12px] pb-[10px] ps-[20px] bg-[#333333] border-none outline-none "
                type="text"
                id="Sorname"
                placeholder="Sorname"
              />
            </div>
            <div className="flex flex-col mb-[24px]">
              <label
                className="roboto ps-[5px] font-normal text-[14px] leading-[20px] text-[#D9D9D9] mb-[8px]"
                htmlFor="Password"
              >
                Password
              </label>
              <input
                className="placeholder:font-medium placeholder:text-[16px] placeholder:leading-[20px] placeholder:roboto roboto placeholder:text-[#666666] rounded-[8px] text-white pt-[12px] pb-[10px] ps-[20px] bg-[#333333] border-none outline-none "
                type="password"
                id="Password"
                placeholder="Password"
              />
            </div>
            <div className="flex flex-col mb-[24px]">
              <label
                className="roboto ps-[5px] font-normal text-[14px] leading-[20px] text-[#D9D9D9] mb-[8px]"
                htmlFor="date"
              >
                Date of Birth
              </label>
              <input
                className="placeholder:font-medium placeholder:text-[16px] placeholder:leading-[20px] placeholder:roboto roboto placeholder:text-[#666666] rounded-[8px] text-white pt-[12px] pb-[10px] ps-[20px] bg-[#333333] border-none outline-none "
                type="date"
                id="date"
                placeholder="Date of birth"
              />
            </div>
            <div>
              <p className="roboto ps-[5px] font-normal text-[14px] leading-[20px] text-[#D9D9D9] mb-[8px]">
                Gender
              </p>
              <div className="flex items-center w-full gap-[8px] mb-[20px]">
                <div className="radio-container w-[50%] bg-[#333333] py-[10px] ps-[12px] rounded-[8px]">
                  <input
                    type="radio"
                    id="man"
                    name="gender"
                    className="radio-input"
                  />
                  <label
                    className="roboto font-medium text-[14px] leading-[16px] radio-label"
                    htmlFor="man"
                  >
                    Man
                  </label>
                </div>
                <div className="radio-container w-[50%] bg-[#333333] py-[10px] ps-[12px] rounded-[8px]">
                  <input
                    type="radio"
                    id="woman"
                    name="gender"
                    className="radio-input"
                  />
                  <label
                    className="roboto font-medium text-[14px] leading-[16px] radio-label"
                    htmlFor="woman"
                  >
                    Woman
                  </label>
                </div>
              </div>
              <div className="w-full h-[1px] bg-[#333333] mb-[20px]"></div>
              <button className="w-full text-center bg-[#F6CE3C] roboto text-[20px] py-[10px] rounded-[8px] font-semibold">
                Confirmation
              </button>
            </div>
          </form>
          <div className="flex flex-wrap w-[644px] justify-between mt-[30px] gap-[10px] max-[1190px]:hidden">
            <div className="w-[49%] bg-[#FCFCFC] h-[50%] rounded-[12px] overflow-hidden flex items-center justify-center relative">
              <img className="" src={JacketsProfile} alt="" />
              <div className="absolute w-full flex items-center justify-between bottom-[20px] px-[20px]">
                <p className="font-semibold text-[32px] leading-[42px] uppercase">
                  Jackets
                </p>
                <img width={32} height={20} src={ArrowRight} alt="" />
              </div>
            </div>

            <div className="w-[49%] bg-[#40B5FF] h-[50%] rounded-[12px] overflow-hidden flex items-center justify-center relative">
              <img className="" src={vapormaxProfile} alt="" />
              <div className="absolute w-full flex items-center justify-between bottom-[20px] px-[20px]">
                <p className="font-semibold text-[32px] leading-[42px] uppercase">
                vapormax
                </p>
                <img width={32} height={20} src={ArrowRight} alt="" />
              </div>
            </div>

            <div className="w-[49%] bg-[#FAD40C] h-[50%] rounded-[12px] overflow-hidden flex items-center justify-center relative">
              <img className="" src={Kaws} alt="" />
              <div className="absolute w-full flex items-center justify-between bottom-[20px] px-[20px]">
                <p className="font-semibold text-[32px] leading-[42px] uppercase">
                KAWS
                </p>
                <img width={32} height={20} src={ArrowRight} alt="" />
              </div>
            </div>

            <div className="w-[49%] bg-[#fff] h-[50%] rounded-[12px] overflow-hidden flex items-center justify-center relative">
              <img className="" src={adidasterrex} alt="" />
              <div className="absolute w-full flex items-center justify-between bottom-[20px] px-[20px]">
                <p className="font-semibold text-[32px] leading-[42px] uppercase">
                shop now
                </p>
                <img width={32} height={20} src={ArrowRight} alt="" />
              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  );
};

export default Profile;
