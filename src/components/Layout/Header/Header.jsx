import React, { useState } from "react";
import Logo from "../../../assets/svg/logo.svg";
import "./Header.scss";
import { Link } from "react-router-dom";
import User from "../../../assets/svg/user.svg";
import Heart from "../../../assets/svg/heart.svg";
import Basket from "../../../assets/svg/basket.svg";
import Close from "../../../assets/svg/close.svg";
import ChangeLang from "../../ChangeLang/ChangeLang";
import Categorys from "../../../api/category";
const Header = () => {
  const [activeMenu, setActiveMenu] = useState(null);
  const [showComponent, setShowComponent] = useState(true);
  const handleMenuClick = (menu) => {
    setActiveMenu(menu);
  };

  const handleCloseButtonClick = () => {
    setActiveMenu(null);
    setShowComponent(false);
  };
  return (
    <header className="site-header py-[5px] w-full  relative z-50">
      <div className="container ">
        <div className="site-header-wrapper relative w-full p-[4px] flex items-center flex-col">
          <div className="bg-[#D9D9D9] pt-[4px] pb-[4px] ps-[4px] pe-[32px] flex items-center justify-between w-full rounded-[12px]">
            <div className="flex items-center">
              <Link to="/">
                <img className="pe-[20px]" src={Logo} alt="logo" />
              </Link>
              <ul className="flex">
                <li className="mt-[4px] p-0">
                  <Link
                    className={`uppercase font-bold px-[24px] border-s-[1px] border-[#BFBFBF] ${
                      activeMenu === "men" ? "active" : ""
                    }`}
                    onClick={() => handleMenuClick("men")}
                  >
                    MEN
                  </Link>
                </li>
                <li className="mt-[4px] p-0">
                  <Link
                    className={`uppercase font-bold px-[24px] border-s-[1px] border-[#BFBFBF] ${
                      activeMenu === "women" ? "active" : ""
                    }`}
                    onClick={() => handleMenuClick("women")}
                  >
                    women
                  </Link>
                </li>
                <li className="mt-[4px] p-0">
                  <Link
                    className={`uppercase font-bold px-[24px] border-s-[1px] border-[#BFBFBF] ${
                      activeMenu === "children" ? "active" : ""
                    }`}
                    onClick={() => handleMenuClick("children")}
                  >
                    children
                  </Link>
                </li>
                <li className="mt-[4px] p-0">
                  <Link
                    className={`uppercase font-bold px-[24px] border-s-[1px] border-[#BFBFBF] ${
                      activeMenu === "sale" ? "active" : ""
                    }`}
                    onClick={() => handleMenuClick("sale")}
                  >
                    sale
                  </Link>
                </li>
                <li className="mt-[4px] p-0">
                  <Link
                    className={`uppercase font-bold px-[24px] border-s-[1px] border-[#BFBFBF] ${
                      activeMenu === "collection" ? "active" : ""
                    }`}
                    onClick={() => handleMenuClick("collection")}
                  >
                    collection
                  </Link>
                </li>
              </ul>
            </div>
            <div className="flex items-center overflow-hidden">
              <ChangeLang />
              <div className="flex items-center bg-[#BFBFBF] h-[50px] w-[1px] mx-[36px]"></div>
              <div className="flex items-center">
                <Link
                  className={`flex flex-col items-center ${
                    activeMenu === "collection" ? "active" : ""
                  }`}
                  onClick={() => handleMenuClick("profile")}
                >

                <img className="pe-[16px]" src={User} alt="" />
                </Link>
                <div className="w-[1px] h-[16px] bg-[#BFBFBF] me-[16px]"></div>
                <div className="flex items-center flex-col pe-[16px] gap-[2px]">
                  <Link
                    className={`flex flex-col items-center ${
                      activeMenu === "collection" ? "active" : ""
                    }`}
                    onClick={() => handleMenuClick("like")}
                  >
                    <img src={Heart} alt="" />
                    <div className="w-[4px] h-[4px] bg-[#FB1919] rounded"></div>
                  </Link>
                </div>
                <div className="w-[1px] h-[16px] bg-[#BFBFBF] me-[16px]"></div>
                <div className="flex items-center flex-col gap-[2px]">
                  <Link
                    className={`flex flex-col items-center ${
                      activeMenu === "collection" ? "active" : ""
                    }`}
                    onClick={() => handleMenuClick("basket")}
                  >
                    <img src={Basket} alt="" />
                    <div className="w-[4px] h-[4px] bg-[#FB1919] rounded"></div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          {activeMenu && (
            <div className="menu-items w-full  absolute -z-10 top-[50px] bg-[#1E1E1E] mt-[-15px] rounded-br-[12px] rounded-bl-[12px] pt-[45px] px-[56px] pb-[32px]">
              {activeMenu === "men" && (
                <div>
                  <div className="w-full flex items-center justify-between pb-[10px] mb-[20px] border-b-[1px] border-[#333] px-[8px]">
                    <h2 className="font-bold leading-normal text-[16px] text-[#fff] uppercase">
                      MEN
                    </h2>
                    <button
                      className="close-button border-s-[1px] border-[#333] ps-[21px] "
                      onClick={handleCloseButtonClick}
                    >
                      <img src={Close} alt="" />
                    </button>
                  </div>
                  <ul className="flex flex-wrap gap-[12px]">
                    {Categorys.map((category, index) => (
                      <Link to={`/men/${category?.title.toLowerCase()}`}>
                        <li
                          onClick={handleCloseButtonClick}
                          className={` ${
                            index == 0 ? "bg-[#F6CE3C]" : "bg-[#999999]"
                          } pt-[15px] pb-[12px] px-[20px] rounded-[30px] capitalize font-bold text-[12px] leading-[16px]`}
                        >
                          {category?.title}
                        </li>
                      </Link>
                    ))}
                  </ul>
                </div>
              )}
              {activeMenu === "women" && (
                <div>
                  <div className="w-full flex items-center justify-between pb-[10px] mb-[20px] border-b-[1px] border-[#333] px-[8px]">
                    <h2 className="font-bold leading-normal text-[16px] text-[#fff] uppercase">
                      women
                    </h2>
                    <button
                      className="close-button border-s-[1px] border-[#333] ps-[21px] "
                      onClick={handleCloseButtonClick}
                    >
                      <img src={Close} alt="" />
                    </button>
                  </div>
                  <ul>
                    <li>Menu item 1</li>
                    <li>Menu item 2</li>
                    <li>Menu item 3</li>
                  </ul>
                </div>
              )}
              {activeMenu === "children" && (
                <div>
                  <div className="w-full flex items-center justify-between pb-[10px] mb-[20px] border-b-[1px] border-[#333] px-[8px]">
                    <h2 className="font-bold leading-normal text-[16px] text-[#fff] uppercase">
                      children
                    </h2>
                    <button
                      className="close-button border-s-[1px] border-[#333] ps-[21px] "
                      onClick={handleCloseButtonClick}
                    >
                      <img src={Close} alt="" />
                    </button>
                  </div>
                  <ul>
                    <li>Menu item 1</li>
                    <li>Menu item 2</li>
                    <li>Menu item 3</li>
                  </ul>
                </div>
              )}
              {activeMenu === "sale" && (
                <div>
                  <div className="w-full flex items-center justify-between pb-[10px] mb-[20px] border-b-[1px] border-[#333] px-[8px]">
                    <h2 className="font-bold leading-normal text-[16px] text-[#fff] uppercase">
                      sale
                    </h2>
                    <button
                      className="close-button border-s-[1px] border-[#333] ps-[21px] "
                      onClick={handleCloseButtonClick}
                    >
                      <img src={Close} alt="" />
                    </button>
                  </div>
                  <ul>
                    <li>Menu item 1</li>
                    <li>Menu item 2</li>
                    <li>Menu item 3</li>
                  </ul>
                </div>
              )}
              {activeMenu === "collection" && (
                <div>
                  <div className="w-full flex items-center justify-between pb-[10px] mb-[20px] border-b-[1px] border-[#333] px-[8px]">
                    <h2 className="font-bold leading-normal text-[16px] text-[#fff] uppercase">
                      collection
                    </h2>
                    <button
                      className="close-button border-s-[1px] border-[#333] ps-[21px] "
                      onClick={handleCloseButtonClick}
                    >
                      <img src={Close} alt="" />
                    </button>
                  </div>
                  <ul>
                    <li>Menu item 1</li>
                    <li>Menu item 2</li>
                    <li>Menu item 3</li>
                  </ul>
                </div>
              )}

              {activeMenu === "like" && (
                <div>
                  <div className="w-full flex items-center justify-between pb-[10px] mb-[20px] border-b-[1px] border-[#333] px-[8px]">
                    <h2 className="font-bold leading-[22px] text-[16px] text-[#fff] uppercase">
                      Like
                    </h2>
                    <button
                      className="close-button border-s-[1px] border-[#333] ps-[21px] "
                      onClick={handleCloseButtonClick}
                    >
                      <img src={Close} alt="" />
                    </button>
                  </div>
                  <ul>
                    <li>Menu item 1</li>
                    <li>Menu item 2</li>
                    <li>Menu item 3</li>
                  </ul>
                </div>
              )}
              {activeMenu === "basket" && (
                <div>
                  <div className="w-full flex items-center justify-between pb-[10px] mb-[20px] border-b-[1px] border-[#333] px-[8px]">
                    <h2 className="font-bold leading-[22px] text-[16px] text-[#fff] uppercase">
                      Karzinka
                    </h2>
                    <button
                      className="close-button border-s-[1px] border-[#333] ps-[21px] "
                      onClick={handleCloseButtonClick}
                    >
                      <img src={Close} alt="" />
                    </button>
                  </div>
                  <ul>
                    <li>Menu item 1</li>
                    <li>Menu item 2</li>
                    <li>Menu item 3</li>
                  </ul>
                </div>
              )}
              {activeMenu === "profile" && (
                <div>
                  <div className="w-full flex items-center justify-between pb-[10px] mb-[20px] border-b-[1px] border-[#333] px-[8px]">
                    <h2 className="font-bold leading-[22px] text-[16px] text-[#fff] uppercase">
                      Profile
                    </h2>
                    <button
                      className="close-button border-s-[1px] border-[#333] ps-[21px] "
                      onClick={handleCloseButtonClick}
                    >
                      <img src={Close} alt="" />
                    </button>
                  </div>
                  <ul>
                    <li>Menu item 1</li>
                    <li>Menu item 2</li>
                    <li>Menu item 3</li>
                  </ul>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
